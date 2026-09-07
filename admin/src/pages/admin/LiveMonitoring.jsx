import MapView from "../../components/maps/MapView";
import StatCard from "../../components/ui/StatCard";

// TODO: BACKEND/API INTEGRATION
// Replace demo vehicle stats with backend response.
//
// Demo API example:
// GET /api/admin/live-monitoring/stats
//
// Expected response:
// {
//   "totalVehicles": 428,
//   "moving": 382,
//   "idle": 4,
//   "stopped": 21
// }
//
// Data source notes (for backend team alignment):
// - totalVehicles -> count of Vehicle records
// - idle          -> Vehicle.status === "idle"
// - moving        -> derived from latest LocationPing.speed > 0
// - stopped       -> derived from latest LocationPing.speed === 0
//                    (vehicle otherwise active, currently not moving)
//
// Later example:
// const response = await fetch("/api/admin/live-monitoring/stats");
// const data = await response.json();
const stats = [
  {
    title: "Total Vehicles",
    value: "428",
    trend: "Fleet-wide",
    trendType: "positive",
  },
  {
    title: "Moving",
    value: "382",
    trend: "On route",
    trendType: "positive",
  },
  {
    title: "Idle",
    value: "4",
    trend: "Waiting",
    trendType: "negative",
  },
  {
    title: "Stopped",
    value: "21",
    trend: "Not moving",
    trendType: "negative",
  },
];

function LiveMonitoring() {
  return (
    <div className="admin-dashboard">

      {/* Page Header */}
      <div className="dashboard-header">
        <div>
          <h1>Live Monitoring</h1>
          <p>Real-time fleet tracking across NER</p>
        </div>
      </div>

      {/* Statistics */}
      <section className="dashboard-stats live-stats">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendType={stat.trendType}
          />
        ))}
      </section>

      {/* Live Map */}
      <div className="dashboard-card">

        <div className="card-header">
          <h2>Live Map</h2>
        </div>

        <MapView />

        {/* TODO: BACKEND/API INTEGRATION
            This legend is presentational only. Dot colors must stay in
            sync with actual vehicle marker colors once MapView renders
            real vehicle positions from LocationPing data. */}
        <div className="map-legend">
          <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: "#16a34a" }}></span>
            Moving
          </span>
          <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: "#2563eb" }}></span>
            Idle
          </span>
          <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: "#f59e0b" }}></span>
            Stopped
          </span>
        </div>

      </div>

    </div>
  );
}

export default LiveMonitoring;