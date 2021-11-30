import { DateTime } from "./luxon";

export function diff(dateA, dateB) {
  return DateTime.diff(dateA.valueOf(), dateB.valueOf()).toObject();
}

export function now() {
  return DateTime.fromJSDate(new Date());
}
