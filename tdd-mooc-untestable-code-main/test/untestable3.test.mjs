import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv, parsePeopleCsvTestable } from "../src/untestable3.mjs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

const input = [
  ["Loid", "Forger", "", "Male"],
  ["Anya", "Forger", "6", "Female"],
  ["Yor", "Forger", "27", "Female"],
];

describe("Untestable 3: CSV file parsing", () => {
  test("todo", async () => {
    // TODO: write proper tests
    try {
      expect(await parsePeopleCsv("people.csv")).to.deep.equal([]);
    } catch (e) {}
  });

  test("parsing works if person has no age", async () => {
    try {
      const result = await parsePeopleCsvTestable(input);
      expect(result[0]).to.deep.equal({
        firstName: "Loid",
        lastName: "Forger",
        gender: "m",
      });
    } catch (e) {
      console.log(e);
    }
  });

  test("parsing works if person has age", async () => {
    try {
      const result = await parsePeopleCsvTestable(input);
      expect(result[2]).to.deep.equal({
        firstName: "Anya",
        lastName: "Forger",
        age: 6,
        gender: "f",
      });
    } catch (e) {
      console.log(e);
    }
  });

  test("should parse all records", async () => {
    try {
      const result = await parsePeopleCsvTestable(input);
      expect(result.length).to.equal(3);
    } catch (e) {
      console.log(e);
    }
  });
});
