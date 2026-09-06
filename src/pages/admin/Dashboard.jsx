import AlertCard from "../../components/alerts/AlertCard";
import MapView from "../../components/maps/MapView";
import StatCard from "../../components/ui/StatCard";
import TripOverview from "../../components/admin/TripOverview";
import DashboardTrendChart from "../../components/charts/DashboardTrendChart";

import LoadingState from "../../components/ui/LoadingState";
import EmptyState from "../../components/ui/EmptyState";

// TODO: BACKEND/API INTEGRATION
// Replace demo statistics and trend values with backend response.
//
// Demo API example:
// GET /api/admin/dashboard/stats
//
// Expected response:
// {
//   "totalVehicles": 428,
//   "activeTrips": 1240,
//   "criticalAlerts": 18,
//   "riskZones": 24,
//   "systemHealth": 98,
//   "trends": {
//     "vehicles": "+8%",
//     "trips": "+6%",
//     "alerts": "-5%",
//     "riskZones": "+6%",
//     "systemHealth": "+2%"
//   }
// }
 const stats = [
   { title: "Active Vehicles", value: "428", trend: "↑ 8% vs yesterday", trendType: "positive" },
  { title: "Active Trips", value: "1,240", trend: "↑ 6% vs yesterday", trendType: "positive" },
   { title: "Active Alerts", value: "18", trend: "↓ 5% vs yesterday", trendType: "negative" },
   { title: "High-Risk Areas", value: "24", trend: "↑ 6% vs yesterday", trendType: "negative" },
   { title: "Average ETA", value: "46 min", trend: "↓ 4% vs yesterday", trendType: "positive" },
   { title: "Average Delivery Time", value: "3.2 hrs", trend: "↓ 2% vs yesterday", trendType: "positive" },
   { title: "Accessibility Index", value: "7.8 /10", trend: "↑ 0.6 vs last month", trendType: "positive" },
  ];


// TODO: BACKEND/API INTEGRATION
// Replace demo alerts with data received from the backend.
//
// Demo API example:
// GET /api/admin/alerts?limit=5
//
// Expected response:
// [
//   {
//     "type": "landslide",
//     "severity": "high",
//     "title": "Landslide Risk Detected",
//     "message": "High-risk condition reported in the monitored region.",
//     "recommendedAction": "Review affected route and infrastructure.",
//     "createdAt": "2026-09-05T10:30:00Z"
//   }
// ]
//
// Later example:
// const response = await fetch("/api/admin/alerts?limit=5");
// const alerts = await response.json();
const alerts = [
  {
    type: "Landslide",
    severity: "High",
    title: "Landslide Risk Detected - NH-6",
    message: "High-risk condition reported in the monitored region.",
    recommendedAction: "Review affected route and infrastructure.",
    createdAt: "Recently",
  },
  {
    type: "Landslide",
    severity: "High",
    title: "Landslide Risk Detected - Cachar",
    message: "High-risk condition reported in the monitored region.",
    recommendedAction: "Review affected route and infrastructure.",
    createdAt: "Recently",
  },
  {
    type: "Landslide",
    severity: "High",
    title: "Landslide Risk Detected - Jaintia Hills",
    message: "High-risk condition reported in the monitored region.",
    recommendedAction: "Review affected route and infrastructure.",
    createdAt: "Recently",
  },
  
];

function Dashboard() {
  return (
    <div className="admin-dashboard">

      {/* Page Header */}
      <div className="dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Regional logistics overview</p>
        </div>
      </div>

      {/* Statistics */}
      <section className="dashboard-stats kpi-stats-grid">
        {stats.map((stat)=> (
        <StatCard 
            key={stat.title}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendType={stat.trendType}
        />
        ))}

      </section>

      {/* Main Dashboard Content */}
      <section className="dashboard-grid">

        {/* Regional Overview */}
        <div className="dashboard-card regional-overview">

          <div className="card-header">
            <h2>Regional Overview</h2>
          </div>

          <MapView />
        </div>

        {// TODO: BACKEND/API INTEGRATION
          // Replace this demo alert with alerts received from the backend.
          //
          // Demo API example:
          // GET /api/admin/alerts?limit=5
          //
          // Example response:
          // [
          //   {
          //     "type": "landslide",
          //     "severity": "high",
          //     "title": "Landslide Risk Detected",
          //     "message": "High-risk condition reported in the monitored          region.",
          //     "recommendedAction": "Review affected route and          infrastructure.",
          //     "createdAt": "2026-09-04T10:30:00Z"
          //   }
          // ]
          //
          // Later example:
          // const response = await fetch("/api/admin/alerts?limit=5");
          // const alerts = await response.json();
        }

      <div className="dashboard-side">
        <div className="dashboard-card recent-alerts">

          <div className="card-header">
            <h2>Recent Alerts</h2>
          </div>

          <div className="alerts-list"> 
            {alerts.map((alert) => (
                <AlertCard
                key={alert.title}
                type={alert.type}
                severity={alert.severity}
                title={alert.title}
                message={alert.message}
                recommendedAction={alert.recommendedAction}
                createdAt={alert.createdAt}
                />
            ))}
          </div> 

        </div> 
        <TripOverview />
      </div>  
      </section>
      <div className="dashboard-card">
       <div className="card-header">
         <h2>Active Trips Trend</h2>
       </div>
      <div className="chart-card-body">
         <DashboardTrendChart />
       </div>
     </div>


    </div>
  );
}

export default Dashboard;