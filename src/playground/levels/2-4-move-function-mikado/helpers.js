import notify from "./notify";
import { now } from "./dates";
import { DateTime } from "./luxon";

export function daysBetween(dateA, dateB) {
  return diff(dateA.startOf("day"), dateB.startOf("day"));
}

export function complete(task) {
  task.completedAt = now();
  notify(`Complete task with ID ${task.id}`);
}

export function toDays(date) {
  return date.toObject().days;
}

export function notifyCompletion(task) {
  const days = daysBetween(task.completedAt, now());
  notify(`It has been ${days} day(s) since completion`);
}

export function diff(dateA, dateB) {
  return toDays(DateTime.diff(dateA.valueOf(), dateB.valueOf()));
}
