export class Item {
  constructor(name, sellIn, quality, conjured = false) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.conjured = conjured;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  decreaseQuality(item, qualityDecrease = 1) {
    if (item.quality - qualityDecrease >= 0) {
      item.quality = item.quality - qualityDecrease;
    }
  }

  increaseQuality(item, qualityIncrease = 1) {
    if (item.quality + qualityIncrease <= 50) {
      item.quality = item.quality + qualityIncrease;
    }
  }

  itemIsDegradeable(item) {
    return (
      item.name !== "Aged Brie" &&
      item.name !== "Backstage passes to a TAFKAL80ETC concert" &&
      item.name !== "Sulfuras, Hand of Ragnaros"
    );
  }

  needsToBeSold(item) {
    return item.name !== "Sulfuras, Hand of Ragnaros";
  }

  updateQuality() {
    this.items.forEach((item) => {
      const isBackstagePass = item.name == "Backstage passes to a TAFKAL80ETC concert";

      if (!this.needsToBeSold(item)) return;

      item.sellIn = item.sellIn - 1;

      if (this.itemIsDegradeable(item) && item.sellIn > 0) {
        this.decreaseQuality(item);
      }

      if (item.conjured) this.decreaseQuality(item);

      if (this.itemIsDegradeable(item) && item.sellIn < 0) {
        this.decreaseQuality(item, 2);
      }

      if (item.name == "Aged Brie") {
        this.increaseQuality(item);
      }

      if (isBackstagePass) {
        this.increaseQuality(item);
      }

      if (isBackstagePass && item.sellIn <= 10) {
        this.increaseQuality(item);
      }

      if (isBackstagePass && item.sellIn <= 5) {
        this.increaseQuality(item);
      }

      if (isBackstagePass && item.sellIn < 0) {
        item.quality = 0;
      }
    });

    return this.items;
  }
}
