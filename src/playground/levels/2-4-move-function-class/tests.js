import assert from "assert";

export function runTests() {
  const { getMessages, resetMessages } = require("./notify");
  const { Task } = require("./task");
  const { DateTime } = require("./dates");
  const { toReportString, onToggle } = require("./playground");

  assert(
    toReportString(new Task({ completedAt: new DateTime("2") })) ===
      "Task was completed 8 days ago",
    toReportString(new Task({ completedAt: new DateTime("2") }))
  );
  assert(
    toReportString(new Task({ completedAt: new DateTime("10") })) ===
      "Task was completed 0 days ago",
    toReportString(new Task({ completedAt: new DateTime("10") }))
  );
  assert(
    toReportString(new Task({ completedAt: new DateTime("12") })) ===
      "Task was completed -2 days ago",
    toReportString(new Task({ completedAt: new DateTime("12") }))
  );

  resetMessages();

  const tasks = [
    new Task({ id: "t-1", completedAt: null }),
    new Task({ id: "t-2", completedAt: new DateTime("2") }),
  ];
  onToggle(tasks);
  assert(tasks[0].completedAt !== null, "first task should be completed");
  assert(tasks[1].completedAt === null, "second task should NOT be completed");
  assert(getMessages().length === 2, `${getMessages().length} instead of 2`);
  assert(getMessages()[0] === "Complete task with ID t-1", getMessages()[0]);
  assert(
    getMessages()[1] === "It has been 8 day(s) since completion",
    getMessages()[1]
  );

  resetMessages();
}
