import notify from "./notify";
import { diff, now } from "./dates";

export function daysBetween(dateA, dateB) {
  return diff(dateA.startOf("day"), dateB.startOf("day")).days;
}

export function complete(task) {
  task.completedAt = now();
  notify(`Complete task with ID ${task.id}`);
}

export function notifyCompletion(task) {
  const days = daysBetween(task.completedAt, now());
  notify(`It has been ${days} day(s) since completion`);
}
