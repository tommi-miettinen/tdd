import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  test("Sulfuras hand of ragnaros doesnt degrade", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 80, false, false, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  test("Sulfuras hand of ragnaros doesnt need to be sold", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 80, false, false, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(5);
  });

  test("Aged Brie increases in quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 0, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  test("Quality degrades twice as fast after sell by date", () => {
    const gildedRose = new Shop([new Item("foo", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  test("Quality is never negative", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  test("Quality cant exceed 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 50, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  test("Aged Brie increases in quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 3, 0, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  test("Backstage pass increases in quality by 2 when sellIn is 10 or less", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  test("Backstage pass increases in quality by 3 when sellIn is 5 or less", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  });

  test("Backstage pass quality drops to 0 after the concert", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50, false)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});
