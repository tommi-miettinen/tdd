export class Item {
  constructor(
    name,
    sellIn,
    quality,
    degradeable = true,
    conjured = false,
    needsToBeSold = true,
    uselessAfterSellIn = false,
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.degradeable = degradeable;
    this.conjured = conjured;
    this.needsToBeSold = needsToBeSold;
    this.uselessAfterSellIn = false;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  decreaseQuality(item) {
    if (!item.degradeable) return;

    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (
        this.items[i].degradeable &&
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        this.decreaseQuality(this.items[i]);
      } else {
        this.increaseQuality(this.items[i]);

        if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert" && this.items[i].sellIn < 11) {
          this.increaseQuality(this.items[i]);
        }

        if (this.items[i].sellIn < 6 && this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          this.increaseQuality(this.items[i]);
        }
      }
      if (this.items[i].needsToBeSold) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        this.decreaseQuality(this.items[i]);
      }

      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert" && this.items[i].sellIn < 0) {
        this.items[i].quality = 0;
      }

      if (this.items[i].name == "Aged Brie" && this.items[i].sellIn < 0) {
        this.increaseQuality(this.items[i]);
      }
    }

    return this.items;
  }
}
