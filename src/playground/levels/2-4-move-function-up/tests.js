import assert from "assert";

export function runTests() {
  const { trackSummary } = require("./playground");

  const first = trackSummary([]);
  assert(first.time === 0, `First time: ${first.time}`);
  assert(first.distance === 0, `First distance: ${first.distance}`);
  assert(Number.isNaN(first.pace), `First pace: ${first.pace}`);

  const points = [
    { lat: 10, lon: 10, start: 0, x: 0 },
    { lat: 10, lon: 44, start: 20, x: -10 },
    { lat: 20, lon: 120, start: 30, x: -30 },
    { lat: 0, lon: 0, start: 50, x: 40 },
    { lat: 40, lon: -40, start: 60, x: 50 },
    { lat: 190, lon: 40, start: 60, x: 100 },
    { lat: -10, lon: 40, start: 100, x: 2300 },
    { lat: 430, lon: 340, start: 102, x: 212 },
    { lat: 523, lon: -32, start: 41550222, x: 293 },
  ];
  const result = trackSummary(points);
  assert(result.time === 41550222, `Second time: ${result.time}`);
  assert(
    Math.round(result.distance) === 50126,
    `Second distance: ${result.distance}`
  );
  assert(Math.round(result.pace) === 14, `Second pace: ${result.pace}`);
}
