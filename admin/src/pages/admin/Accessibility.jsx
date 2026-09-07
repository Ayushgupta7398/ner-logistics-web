import StatCard from "../../components/ui/StatCard";
import MapView from "../../components/maps/MapView";
import RegionScoreList from "../../components/admin/RegionScoreList";
import AccessibilityTrendChart from "../../components/charts/AccessibilityTrendChart";

// TODO: BACKEND/API INTEGRATION
// Replace demo stats with backend response.
//
// Demo API example:
// GET /api/admin/accessibility/stats
const stats = [
  { title: "Overall Accessibility Score", value: "7.8 /10", trend: "↑ 0.6 vs last month", trendType: "positive" },
  { title: "Road Accessibility", value: "8.2 /10", trend: "↑ 0.4 vs last month", trendType: "positive" },
  { title: "Healthcare Access", value: "6.4 /10", trend: "↑ 0.3 vs last month", trendType: "positive" },
  { title: "Market Access", value: "6.9 /10", trend: "↑ 0.5 vs last month", trendType: "positive" },
];

// TODO: BACKEND/API INTEGRATION
// Replace demo factors with backend response.
//
// Demo API example:
// GET /api/admin/accessibility/factors
const factors = [
  { name: "Road Connectivity", status: "good", score: "8.2/10" },
  { name: "Healthcare Availability", status: "moderate", score: "6.4/10" },
  { name: "Market Connectivity", status: "moderate", score: "6.9/10" },
  { name: "Remote Access", status: "moderate", score: "6.8/10" },
  { name: "Public Transport", status: "good", score: "7.6/10" },
];

function Accessibility() {
  return (
    <div className="admin-dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Accessibility Monitoring</h1>
          <p>Regional access to roads, healthcare & markets</p>
        </div>
      </div>

      <section className="dashboard-stats live-stats">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="traffic-content-grid">

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Accessibility Heatmap</h2>
          </div>
          <MapView variant="heatmap" scaleDirection="badToGood" />
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Region-wise Score</h2>
          </div>
          <RegionScoreList />
        </div>

      </section>

      <section className="traffic-content-grid">

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Accessibility Factors</h2>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {factors.map((f) => (
                <tr key={f.name}>
                  <td>{f.name}</td>
                  <td>
                    <span className={`level-badge ${f.status}`}>
                      {f.status.charAt(0).toUpperCase() + f.status.slice(1)}
                    </span>
                  </td>
                  <td>{f.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Accessibility Trend</h2>
          </div>
          <div className="chart-card-body">
            <AccessibilityTrendChart />
          </div>
        </div>

      </section>

    </div>
  );
}

export default Accessibility;