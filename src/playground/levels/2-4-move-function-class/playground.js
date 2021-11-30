import { DateTime } from "./dates";

function onToggle(tasks) {
  tasks.forEach((t) => {
    if (t.completedAt === null) {
      onComplete(tasks, t.id);
    } else {
      t.notifyCompletion();
      t.completedAt = null;
    }
  });
}

function toReportString(task) {
  return `Task was completed ${task.daysBetween(
    task.completedAt,
    DateTime.now()
  )} days ago`;
}

function onComplete(tasks, taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.complete();
  } else {
    throw new Error("Can't find task to complete");
  }
}

export { onToggle, toReportString };
