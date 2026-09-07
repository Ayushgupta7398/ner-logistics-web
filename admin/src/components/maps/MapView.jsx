function MapView({ variant = "default", scaleDirection = "goodToBad" }) {

  // TODO: BACKEND/API INTEGRATION
  // Map data will come from backend/GIS service.
  //
  // Demo API example:
  // GET /api/admin/regional-overview
  //
  // Later example:
  // const response = await fetch("/api/admin/regional-overview");
  // const data = await response.json();

  const placeholderText =
    variant === "heatmap"
      ? "Heatmap will be integrated here"
      : "Map will be integrated here";

  // goodToBad: low value = good (green) -> high value = bad (red)
  //   used for Traffic congestion, Risk level
  // badToGood: low value = bad (red) -> high value = good (green)
  //   used for Accessibility score
  const gradient =
    scaleDirection === "badToGood"
      ? "linear-gradient(to right, #ef4444, #f59e0b, #16a34a)"
      : "linear-gradient(to right, #16a34a, #f59e0b, #ef4444)";

  return (
    <>
      <div className="map-view">
        {placeholderText}
      </div>

      {variant === "heatmap" && (
        <div className="heatmap-legend">
          <span>Low</span>
          <div className="heatmap-gradient-bar" style={{ background: gradient }}></div>
          <span>High</span>
        </div>
      )}
    </>
  );
}

export default MapView;