import StatCard from "../../components/ui/StatCard";
import AlertCard from "../../components/alerts/AlertCard";

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
      <section className="dashboard-stats">
        <StatCard 
            title=" Total vechiles"
            value="__"
        />

        <StatCard 
            title=" Active Trips"
            value="__"
        />

        <StatCard 
            title=" Critical Alerts"
            value="__"
        />

        <StatCard 
            title=" Fleet Utilization"
            value="__"
        />
      </section>

      {/* Main Dashboard Content */}
      <section className="dashboard-grid">

        {/* Regional Overview */}
        <div className="dashboard-card regional-overview">

          <div className="card-header">
            <h2>Regional Overview</h2>
          </div>

          <div className="map-placeholder">
            Map will be integrated here
          </div>

        </div>

        {/* Recent Alerts */}
        <div className="dashboard-card recent-alerts">

          <div className="card-header">
            <h2>Recent Alerts</h2>
          </div>

          <div className="alerts-list"> 
            <AlertCard
                type="Landslide"
                severity="High"
                title="Landslide Risk Detected"
                message="High-risk condition reported in the monitored region."
                recommendedAction="Review affected route and infrastructure."
                createdAt="Recently"
            />
          </div> 
        </div> 
      </section>

    </div>
  );
}

export default Dashboard;