import StatCard from "../../components/ui/StatCard";
import MapView from "../../components/maps/MapView";
import RiskFactorsList from "../../components/admin/RiskFactorsList";
import RiskTrendChart from "../../components/charts/RiskTrendChart";

// TODO: BACKEND/API INTEGRATION
// Replace demo stats with backend response.
//
// Demo API example:
// GET /api/admin/risk/stats
const stats = [
  { title: "High Risk Zones", value: "12", trend: "↑ 2 vs yesterday", trendType: "negative" },
  { title: "Moderate Risk Zones", value: "24", trend: "↑ 3 vs yesterday", trendType: "negative" },
  { title: "Low Risk Zones", value: "48", trend: "↑ 5 vs yesterday", trendType: "positive" },
  { title: "Total Risk Alerts", value: "18", trend: "↓ 4 vs last month", trendType: "positive" },
];

// TODO: BACKEND/API INTEGRATION
// Replace demo alerts with backend response.
//
// Demo API example:
// GET /api/admin/risk/alerts?limit=5
//
// Expected response:
// [
//   {
//     "type": "landslide",
//     "location": "East Khasi Hills, NH-6",
//     "riskLevel": "high",
//     "createdAt": "10 min ago"
//   }
// ]
const recentAlerts = [
  { type: "Landslide", location: "East Khasi Hills, NH-6", riskLevel: "high", time: "10 min ago" },
  { type: "Flood", location: "Cachar District", riskLevel: "high", time: "35 min ago" },
  { type: "Heavy Rain", location: "West Jaintia Hills", riskLevel: "moderate", time: "1 hr ago" },
  { type: "Road Damage", location: "Tawang Road", riskLevel: "moderate", time: "2 hr ago" },
  { type: "Wind Warning", location: "Namsai, Arunachal", riskLevel: "low", time: "3 hr ago" },
];

function RiskMonitoring() {
  return (
    <div className="admin-dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Risk Monitoring</h1>
          <p>Hazard zones & predictive risk factors across NER</p>
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
            <h2>Risk Map</h2>
          </div>
          <MapView variant="heatmap" />
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Risk Factors</h2>
          </div>
          <RiskFactorsList />
        </div>

      </section>

      <div className="dashboard-card" style={{ marginBottom: "18px" }}>
        <div className="card-header">
          <h2>Risk Trend — Predicted vs Actual</h2>
        </div>
        <div className="chart-card-body">
          <RiskTrendChart />
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <h2>Recent Risk Alerts</h2>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Location</th>
              <th>Risk Level</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentAlerts.map((a) => (
              <tr key={a.type + a.location}>
                <td>{a.type}</td>
                <td>{a.location}</td>
                <td>
                  <span className={`level-badge ${a.riskLevel}`}>
                    {a.riskLevel.charAt(0).toUpperCase() + a.riskLevel.slice(1)}
                  </span>
                </td>
                <td>{a.time}</td>
                <td>
                  {/* TODO: BACKEND/API INTEGRATION
                      Will navigate to Alert Detail / Report Details
                      once that route + data contract exists. */}
                  <button className="table-action-link">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default RiskMonitoring;