export class Item {
  constructor(name, sellIn, quality, degradeable = true, conjured = false, needsToBeSold = true) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.degradeable = degradeable;
    this.conjured = conjured;
    this.needsToBeSold = needsToBeSold;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0 && this.items[i].degradeable) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
      if (this.items[i].needsToBeSold) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].quality > 0 && this.items[i].degradeable && this.items[i].name != "Age Brie") {
          this.items[i].quality = this.items[i].quality - 1;
        }
        if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }

        if (this.items[i].quality < 50 && this.items[i].name == "Aged Brie") {
          this.items[i].quality = this.items[i].quality + 1;
        }
      }
    }

    return this.items;
  }
}
