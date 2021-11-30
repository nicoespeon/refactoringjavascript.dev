function createReport(points) {
  let totalAscent = 0;
  let totalTime = 123;
  let totalDistance = 0;

  calculateAscent();
  calculateTime();
  calculateDistance();

  function calculateAscent() {
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
  }

  function calculateTime() {
    for (let i = 1; i < points.length; i++) {
      const time = points[i].start - points[i - 1].start ?? 0;
      totalTime += time;
    }
  }

  function calculateDistance() {
    for (let i = 1; i < points.length; i++) {
      const change = points[i].x - points[i - 1].x;
      totalDistance += Math.abs(change);
    }
  }

  return { totalAscent, totalTime, totalDistance };
}

export { createReport };
