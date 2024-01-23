import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceHandValueTestable } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  test("todo", () => {
    // TODO: write proper tests
    expect(diceHandValue()).to.be.a("number");
  });

  test("returns correct value when dice are the same", () => {
    expect(diceHandValueTestable(1, 1)).to.equal(101);
  });

  test("returns correct value when first die is higher", () => {
    expect(diceHandValueTestable(3, 1)).to.equal(3);
  });

  test("returns correct value when second die is higher", () => {
    expect(diceHandValueTestable(1, 3)).to.equal(3);
  });
});
