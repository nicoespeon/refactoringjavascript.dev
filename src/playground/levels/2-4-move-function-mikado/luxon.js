export class DateTime {
  static fromJSDate() {
    return new DateTime("10");
  }

  static diff(valueA, valueB) {
    return new DateTime(String(Number(valueB) - Number(valueA)));
  }

  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  startOf() {
    return this.value;
  }

  toObject() {
    return { days: Number(this.value) };
  }
}
