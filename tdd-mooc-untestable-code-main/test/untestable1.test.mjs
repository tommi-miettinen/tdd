import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas, daysUntilChristmasTestable } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  test("todo", () => {
    expect(daysUntilChristmasTestable(new Date(2024, 0, 0))).to.be.a("number");
  });

  test("returns correct number of days when date is before christmas", () => {
    expect(daysUntilChristmasTestable(new Date(2023, 11, 24))).to.equal(1);
  });

  test("returns correct number of days when date is christmas", () => {
    expect(daysUntilChristmasTestable(new Date(2023, 11, 25))).to.equal(0);
  });

  test("returns correct number of days when date is after christmas and its a leap year", () => {
    expect(daysUntilChristmasTestable(new Date(2023, 11, 26))).to.equal(365);
  });

  test("returns correct number of days when date is after christmas and its not a leap year", () => {
    expect(daysUntilChristmasTestable(new Date(2022, 11, 26))).to.equal(364);
  });
});
