import { useState } from "react";
import StatCard from "../../components/ui/StatCard";
import Modal from "../../components/ui/Modal";
import CreateAlertForm from "../../components/alerts/CreateAlertForm";

// TODO: BACKEND/API INTEGRATION
// Replace demo stats with backend response.
//
// Demo API example:
// GET /api/admin/alerts/stats
const stats = [
  { title: "Total Alerts", value: "56", trend: "All time", trendType: "positive" },
  { title: "Active Alerts", value: "18", trend: "Needs attention", trendType: "negative" },
  { title: "Scheduled Alerts", value: "12", trend: "Upcoming", trendType: "negative" },
  { title: "Resolved Alerts", value: "26", trend: "Closed", trendType: "positive" },
];

// TODO: BACKEND/API INTEGRATION
// Replace demo alerts with backend response.
//
// Demo API example:
// GET /api/admin/alerts
//
// Expected response: array of Alert (Section 17 contract).
//
// NOTE FOR BACKEND TEAM:
// The "status" field below (active/scheduled/resolved) is a UI-only
// demo convenience. The current Alert contract only defines a boolean
// "resolved" field. Please confirm whether a proper status enum
// (e.g. active/scheduled/resolved) will be added, or whether the
// frontend should derive "Active"/"Resolved" purely from the
// boolean instead.
const initialAlerts = [
  { title: "Landslide Risk Detected", type: "landslide", severity: "high", location: "NH-6, East Khasi Hills", status: "active", time: "10 min ago" },
  { title: "Heavy Rain Alert", type: "weather", severity: "high", location: "West Jaintia Hills", status: "active", time: "25 min ago" },
  { title: "Flood Warning", type: "flood", severity: "high", location: "Cachar District", status: "active", time: "35 min ago" },
  { title: "Traffic Jam Ahead", type: "traffic", severity: "moderate", location: "Guwahati Bypass", status: "active", time: "45 min ago" },
  { title: "Road Damage Reported", type: "blocked_road", severity: "moderate", location: "Tawang Road", status: "scheduled", time: "1 hr ago" },
  { title: "Wind Warning", type: "weather", severity: "low", location: "Namsai, Arunachal", status: "scheduled", time: "2 hr ago" },
  { title: "Low Visibility", type: "weather", severity: "low", location: "Zero Valley", status: "resolved", time: "3 hr ago" },
  { title: "Route Clearance Update", type: "safety", severity: "low", location: "NH-37", status: "resolved", time: "5 hr ago" },
];

const TABS = ["all", "critical", "high", "moderate", "low"];

function AlertManagement() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredAlerts =
    activeTab === "all"
      ? alerts
      : alerts.filter((a) => a.severity === activeTab);

  function handleCreateAlert(newAlert) {
    // TODO: BACKEND/API INTEGRATION
    // On success response, re-fetch or append the server-returned
    // alert (with real id/createdAt) instead of the raw form data.
    setAlerts([newAlert, ...alerts]);
    setIsModalOpen(false);
  }

  return (
    <div className="admin-dashboard">

      <div className="dashboard-header" style={{ display: "flex", alignItems: "flex-start" }}>
        <div>
          <h1>Alert Management</h1>
          <p>Create, monitor & distribute regional alerts</p>
        </div>

        <div className="page-toolbar">
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            + Create Alert
          </button>
        </div>
      </div>

      <section className="dashboard-stats live-stats">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <div className="page-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`page-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all" ? "All Alerts" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="dashboard-card tabbed-content-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Alert Type</th>
              <th>Type</th>
              <th>Severity</th>
              <th>Location</th>
              <th>Status</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlerts.map((a) => (
              <tr key={a.title + a.time}>
                <td><strong>{a.title}</strong></td>
                <td>{a.type}</td>
                <td>
                  <span className={`level-badge ${a.severity}`}>
                    {a.severity.charAt(0).toUpperCase() + a.severity.slice(1)}
                  </span>
                </td>
                <td>{a.location}</td>
                <td>
                  <span className={`status-badge ${a.status}`}>
                    {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                  </span>
                </td>
                <td>{a.time}</td>
                <td>
                  {/* TODO: BACKEND/API INTEGRATION
                      Will open an edit form (PATCH /api/admin/alerts/:id)
                      once that contract is finalized. */}
                  <button className="table-edit-btn">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-card" style={{ marginTop: "18px" }}>
        <div className="card-header">
          <h2>Alert Channels</h2>
        </div>
        <div className="alert-channels-grid">
          <div className="channel-card"><span className="channel-icon">📱</span>In-App</div>
          <div className="channel-card"><span className="channel-icon">💬</span>SMS</div>
          <div className="channel-card"><span className="channel-icon">✉️</span>Email</div>
          <div className="channel-card"><span className="channel-icon">🔔</span>Push Notification</div>
          <div className="channel-card"><span className="channel-icon">📞</span>WhatsApp</div>
        </div>
      </div>

      {isModalOpen && (
        <Modal title="Create New Alert" onClose={() => setIsModalOpen(false)}>
          <CreateAlertForm
            onSubmit={handleCreateAlert}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}

    </div>
  );
}

export default AlertManagement;