import { daysBetween, complete, notifyCompletion } from "./helpers";
import { now } from "./dates";

function onToggle(tasks) {
  tasks.forEach((t) => {
    if (t.completedAt === null) {
      onComplete(tasks, t.id);
    } else {
      notifyCompletion(t);
      t.completedAt = null;
    }
  });
}

function toReportString(task) {
  return `Task was completed ${daysBetween(task.completedAt, now())} days ago`;
}

function onComplete(tasks, taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    complete(task);
  } else {
    throw new Error("Can't find task to complete");
  }
}

export { onToggle, toReportString };
