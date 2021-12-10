import assert from "assert";

export function runTests() {
  const { getMessages, resetMessages } = require("./notify");
  const { DateTime } = require("./luxon");
  const { toReportString, onToggle, remainingNotice } = require("./playground");

  assert(
    toReportString({ completedAt: new DateTime("2") }) ===
      "Task was completed 8 days ago",
    toReportString({ completedAt: new DateTime("2") })
  );
  assert(
    toReportString({ completedAt: new DateTime("10") }) ===
      "Task was completed 0 days ago",
    toReportString({ completedAt: new DateTime("10") })
  );
  assert(
    toReportString({ completedAt: new DateTime("12") }) ===
      "Task was completed -2 days ago",
    toReportString({ completedAt: new DateTime("12") })
  );

  assert(
    remainingNotice({ dueIn: new DateTime("3") }) ===
      "Task will expire in 3 days",
    remainingNotice({ dueIn: new DateTime("3") })
  );
  assert(
    remainingNotice({ dueIn: new DateTime("13") }) ===
      "Task will expire in 13 days",
    remainingNotice({ dueIn: new DateTime("13") })
  );

  resetMessages();

  const tasks = [
    { id: "t-1", completedAt: null },
    { id: "t-2", completedAt: new DateTime("2") },
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
