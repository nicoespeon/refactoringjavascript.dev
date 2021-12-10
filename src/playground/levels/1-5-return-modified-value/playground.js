function createReport(points) {
  let totalAscent = 0;
  let totalTime = 123;
  let totalDistance = 0;

  calculateData();

  function calculateData() {
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      const time = points[i].start - points[i - 1].start ?? 0;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
      totalTime += time;
      totalDistance += Math.abs(points[i].x - points[i - 1].x);
    }
  }

  return { totalAscent, totalTime, totalDistance };
}

export { createReport };
