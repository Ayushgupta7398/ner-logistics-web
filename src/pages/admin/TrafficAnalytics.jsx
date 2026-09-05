import StatCard from "../../components/ui/StatCard";
import MapView from "../../components/maps/MapView";
import TrafficFlowChart from "../../components/charts/TrafficFlowChart";
import TrafficDistributionChart from "../../components/charts/TrafficDistributionChart";

// TODO: BACKEND/API INTEGRATION
// Replace demo stats with backend response.
//
// Demo API example:
// GET /api/admin/traffic/stats?range=7d&region=all
const stats = [
  { title: "Avg Speed", value: "42 km/h", trend: "↑ 6%", trendType: "positive" },
  { title: "Congested Routes", value: "28", trend: "↑ 6%", trendType: "negative" },
  { title: "Total Incidents", value: "156", trend: "↓ 3%", trendType: "positive" },
  { title: "Delay Time", value: "128 min", trend: "↓ 9%", trendType: "positive" },
];

// TODO: BACKEND/API INTEGRATION
// Replace demo route list with backend response.
//
// Demo API example:
// GET /api/admin/traffic/congested-routes?region=all
//
// Expected response:
// [
//   {
//     "route": "Guwahati → Shillong",
//     "avgSpeed": "15 km/h",
//     "delay": "2h 45m",
//     "congestionLevel": "high"
//   }
// ]
const congestedRoutes = [
  { route: "Guwahati → Shillong", avgSpeed: "15 km/h", delay: "2h 45m", congestionLevel: "high" },
  { route: "Guwahati → Nagaon", avgSpeed: "22 km/h", delay: "1h 50m", congestionLevel: "high" },
  { route: "Silchar → Imphal", avgSpeed: "25 km/h", delay: "1h 30m", congestionLevel: "moderate" },
  { route: "Dibrugarh → Tinsukia", avgSpeed: "28 km/h", delay: "1h 10m", congestionLevel: "moderate" },
  { route: "Aizawl → Lunglei", avgSpeed: "30 km/h", delay: "45m", congestionLevel: "low" },
];

function TrafficAnalytics() {
  return (
    <div className="admin-dashboard">

      {/* Page Header + Toolbar (filters) */}
      <div className="dashboard-header" style={{ display: "flex", alignItems: "flex-start" }}>
        <div>
          <h1>Traffic Analytics</h1>
          <p>Route performance & congestion insights</p>
        </div>

        {/* TODO: BACKEND/API INTEGRATION
            Filters are non-functional placeholders for now.
            Wiring these will re-fetch stats/chart/table data by
            date range and region once the backend endpoint exists. */}
        <div className="page-toolbar">
          <select className="toolbar-select" defaultValue="7d">
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
          <select className="toolbar-select" defaultValue="all">
            <option value="all">All Regions</option>
            <option value="assam">Assam</option>
            <option value="meghalaya">Meghalaya</option>
          </select>
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

      {/* Traffic Flow + Heatmap */}
      <section className="traffic-content-grid">

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Traffic Flow</h2>
          </div>
          <div className="chart-card-body">
            <TrafficFlowChart />
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Traffic Heatmap</h2>
          </div>
          <MapView variant="heatmap" />
        </div>

      </section>

      {/* Congested Routes Table + Distribution Donut */}
      <section className="traffic-content-grid">

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Top Congested Routes</h2>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Route</th>
                <th>Avg Speed</th>
                <th>Delay</th>
                <th>Congestion Level</th>
              </tr>
            </thead>
            <tbody>
              {congestedRoutes.map((r) => (
                <tr key={r.route}>
                  <td>{r.route}</td>
                  <td>{r.avgSpeed}</td>
                  <td>{r.delay}</td>
                  <td>
                    <span className={`level-badge ${r.congestionLevel}`}>
                      {r.congestionLevel.charAt(0).toUpperCase() + r.congestionLevel.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Traffic by Level</h2>
          </div>
          <div className="chart-card-body">
            <TrafficDistributionChart />
          </div>
        </div>

      </section>

    </div>
  );
}

export default TrafficAnalytics;