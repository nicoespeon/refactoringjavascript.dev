import { DateTime } from "./luxon";

export function now() {
  return DateTime.fromJSDate(new Date());
}
