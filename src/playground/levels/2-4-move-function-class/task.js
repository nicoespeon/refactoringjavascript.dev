import notify from "./notify";
import { DateTime } from "./dates";

export class Task {
  constructor({ id, completedAt }) {
    this.id = id;
    this.completedAt = completedAt;
  }

  daysBetween(dateA, dateB) {
    return dateA.startOf("day").diff(dateB.startOf("day")).days;
  }

  complete() {
    this.completedAt = DateTime.now();
    notify(`Complete task with ID ${this.id}`);
  }

  notifyCompletion() {
    const days = this.daysBetween(this.completedAt, DateTime.now());
    notify(`It has been ${days} day(s) since completion`);
  }
}
