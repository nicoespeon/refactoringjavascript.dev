import assert from "assert";

export function runTests() {
  const { subscribe } = require("./playground");
  const getTitle = subscribe((value) => value + "R!");

  assert(
    getTitle() === "Acme Gooseberries - Inc. cpyNm: Acme GooseberriesR!",
    getTitle()
  );
}
