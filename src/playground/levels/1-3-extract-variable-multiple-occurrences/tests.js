import assert from "assert";

export function runTests() {
  const { Item, Shop } = require("./playground");

  const shop = new Shop([
    new Item("Aged Brie", 10, 0),
    new Item("Aged Brie", -10, 0),
    new Item("Aged Brie", 10, 20),
    new Item("Aged Brie", 10, 50),
    new Item("Random", 10, 0),
    new Item("Random", -10, 0),
    new Item("Random", 10, 50),
    new Item("Random", 10, 2),
    new Item("Random", -1, 10),
    new Item("Sulfuras, Hand of Ragnaros", 10, 0),
    new Item("Sulfuras, Hand of Ragnaros", 50, 0),
    new Item("Sulfuras, Hand of Ragnaros", -10, 0),
    new Item("Sulfuras, Hand of Ragnaros", -10, 10),
    new Item("Sulfuras, Hand of Ragnaros", 10, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
    new Item("Backstage passes to a TAFKAL80ETC concert", -10, 10),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, -2),
  ]);

  shop.updateQuality();
  shop.updateQuality();
  shop.updateQuality();
  shop.updateQuality();
  shop.updateQuality();
  shop.updateQuality();
  shop.updateQuality();

  const result = shop.items
    .map((i) => `${i.name}, ${i.sellIn}, ${i.quality}`)
    .join("\n");

  assert(
    result ===
      `Aged Brie, 3, 7
Aged Brie, -17, 14
Aged Brie, 3, 27
Aged Brie, 3, 50
Random, 3, 0
Random, -17, 0
Random, 3, 43
Random, 3, 0
Random, -8, 0
Sulfuras, Hand of Ragnaros, 10, 0
Sulfuras, Hand of Ragnaros, 50, 0
Sulfuras, Hand of Ragnaros, -10, 0
Sulfuras, Hand of Ragnaros, -10, 10
Sulfuras, Hand of Ragnaros, 10, 50
Backstage passes to a TAFKAL80ETC concert, 3, 16
Backstage passes to a TAFKAL80ETC concert, -17, 0
Backstage passes to a TAFKAL80ETC concert, 3, 50
Backstage passes to a TAFKAL80ETC concert, 3, 14`,
    result
  );
}
