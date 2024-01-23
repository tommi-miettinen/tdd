import { execSync } from "child_process";
import chokidar from "chokidar";

function logCommand(command) {
  console.log("\n> " + command);
  return command;
}

function test() {
  execSync(logCommand("npm run test"), {
    stdio: "inherit",
    env: { ...process.env, MAX_CHANGES: process.env.MAX_CHANGES || "2" },
  });
}

function commit() {
  console.log("Tests passed -> Commit changes");
  execSync(logCommand('git commit --all --message="tcr: tests pass"'), {
    stdio: "inherit",
  });
}

function revert() {
  console.log("Test failed -> Revert changes");
  execSync(logCommand("git reset --hard"), { stdio: "inherit" });
}

try {
  test();
} catch (e) {
  console.log("TCR cancelled. Tests need to start green.");
  process.exit(1);
}

chokidar.watch("src").on("all", (_event, _path) => {
  const changes = execSync("git diff --numstat", { encoding: "utf8" });
  if (changes !== "") {
    try {
      test();
      commit();
    } catch (e) {
      revert();
    }
  }
});
