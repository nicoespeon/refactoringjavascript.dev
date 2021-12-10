import assert from "assert";

class FakeChrono {
  constructor(value) {
    this._value = value;
  }

  until(targetDate, unit) {
    return targetDate === "2021-02-10"
      ? 800
      : targetDate === "2021-01-10"
      ? 1600
      : 5;
  }
}

export function runTests() {
  const { Scroll, CatalogItem } = require("./playground");

  const scroll = new Scroll(
    "scroll-id",
    "Scroll title",
    ["one", "two", "scroll"],
    new FakeChrono()
  );
  assert(scroll.id === "scroll-id", `Scroll ID: ${scroll.id}`);
  assert(scroll.title === "Scroll title", `Scroll title: ${scroll.title}`);
  assert(scroll.hasTag("one") === true, `Scroll should have tag "one"`);
  assert(
    scroll.hasTag("unknown") === false,
    `Scroll should not have tag "unknown"`
  );
  assert(
    scroll.needsCleaning("2021-01-10") === true,
    `Needs cleaning? ${scroll.needsCleaning("2021-01-10")}`
  );
  assert(
    scroll.needsCleaning("2021-02-10") === false,
    `Needs cleaning? ${scroll.needsCleaning("2021-02-10")}`
  );
  assert(
    scroll.needsCleaning("2021-03-10") === false,
    `Needs cleaning? ${scroll.needsCleaning("2021-03-10")}`
  );

  scroll.title = "New scroll title";
  assert(scroll.title === "New scroll title", `Scroll title: ${scroll.title}`);

  const reveredScroll = new Scroll(
    "scroll-id",
    "Scroll title",
    ["revered"],
    new FakeChrono()
  );
  assert(
    reveredScroll.needsCleaning("2021-01-10") === true,
    `Needs cleaning? ${reveredScroll.needsCleaning("2021-01-10")}`
  );
  assert(
    reveredScroll.needsCleaning("2021-02-10") === true,
    `Needs cleaning? ${reveredScroll.needsCleaning("2021-02-10")}`
  );
  assert(
    reveredScroll.needsCleaning("2021-03-10") === false,
    `Needs cleaning? ${reveredScroll.needsCleaning("2021-03-10")}`
  );

  const catalog = new CatalogItem("catalog-id", "Catalog title", ["one"]);

  assert(catalog.id === "catalog-id", `Catalog ID: ${catalog.id}`);
  assert(catalog.title === "Catalog title", `Catalog title: ${catalog.title}`);
  assert(catalog.hasTag("one") === true, `Catalog should have tag "one"`);
  assert(
    catalog.hasTag("unknown") === false,
    `Catalog should not have tag "unknown"`
  );

  catalog.title = "New catalog title";
  assert(
    catalog.title === "New catalog title",
    `Catalog title: ${catalog.title}`
  );
}
