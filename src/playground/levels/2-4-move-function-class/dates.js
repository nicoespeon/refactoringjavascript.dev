import { DateTime as LuxonDateTime } from "./luxon";

export class DateTime {
  static now() {
    return new DateTime(LuxonDateTime.fromJSDate(new Date()).valueOf());
  }

  constructor(date) {
    this.date = date;
  }

  valueOf() {
    return this.date.valueOf();
  }

  startOf(unit) {
    return new DateTime(new LuxonDateTime(this.date).startOf(unit));
  }

  diff(other) {
    return LuxonDateTime.diff(this.valueOf(), other.valueOf()).toObject();
  }
}
