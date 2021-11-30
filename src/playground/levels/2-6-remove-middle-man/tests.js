import assert from "assert";

export function runTests() {
  const log = new FakeLog();
  const { createReport } = require("./playground");
  const report = createReport(log);

  report([
    { type: 1, amount: 1000 },
    { type: 2, amount: 1000 },
    { type: 3, amount: 1000 },
    { type: 1, amount: 9000 },
    { type: 2, amount: 9000 },
    { type: 3, amount: 1000 },
  ]);

  assert(
    log.messages ===
      `
Expenses 2021-10-06
Breakfast	1000
Dinner	1000
Car Rental	1000
Breakfast	9000	X
Dinner	9000	X
Car Rental	1000
Meal expenses: 20000
Total expenses: 22000
`.trim(),
    log.messages
  );
}

class FakeLog {
  _messages = [];

  write(message) {
    this._messages.push(message.trim());
  }

  get messages() {
    return this._messages.join("\n");
  }
}
