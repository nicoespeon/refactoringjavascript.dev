function createReport(data, points) {
  calculateAscent();
  calculateTime();
  calculateDistance();

  function calculateAscent() {
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      data.totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
  }

  function calculateTime() {
    for (let i = 1; i < points.length; i++) {
      const time = points[i].start - points[i - 1].start ?? 0;
      data.totalTime += time;
    }
  }

  function calculateDistance() {
    for (let i = 1; i < points.length; i++) {
      const change = points[i].x - points[i - 1].x;
      data.totalDistance += Math.abs(change);
    }
  }

  return data;
}

export { createReport };
