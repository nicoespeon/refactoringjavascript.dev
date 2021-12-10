import assert from "assert";

export function runTests() {
  const { createReport } = require("./playground");

  const points = [
    { elevation: 10, start: 0, x: 0 },
    { elevation: 10, start: 20, x: -10 },
    { elevation: 20, start: 30, x: -30 },
    { elevation: 0, start: 50, x: 40 },
    { elevation: 40, start: 60, x: 50 },
    { elevation: 190, start: 60, x: 100 },
    { elevation: -10, start: 100, x: 2300 },
    { elevation: 430, start: 102, x: 212 },
    { elevation: 523, start: 222, x: 293 },
  ];
  const { totalAscent, totalTime, totalDistance } = createReport(points);

  assert(totalAscent === 733, `Actual ascent: ${totalAscent}`);
  assert(totalTime === 345, `Actual time: ${totalTime}`);
  assert(totalDistance === 4529, `Actual distance: ${totalDistance}`);
}
