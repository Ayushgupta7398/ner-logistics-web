import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Alerts.css";

const alertsData = [
  {
    icon: "⚠",
    title: "Landslide Risk",
    location: "NH-6, Shillong Sector",
    severity: "High",
    time: "10 min ago",
    type: "high",
    description: "Possible landslide activity detected.",
  },
  {
    icon: "☔",
    title: "Heavy Rain",
    location: "Assam, Karbi Anglong",
    severity: "Medium",
    time: "15 min ago",
    type: "medium",
    description: "Heavy rainfall may affect road conditions.",
  },
  {
    icon: "🚦",
    title: "Traffic Jam",
    location: "Guwahati Bypass",
    severity: "Low",
    time: "25 min ago",
    type: "low",
    description: "Moderate traffic congestion detected.",
  },
  {
    icon: "🚧",
    title: "Road Construction",
    location: "NH-37, Jorhat",
    severity: "Low",
    time: "2 hours ago",
    type: "low",
    description: "Construction activity causing minor delays.",
  },
];

const filters = ["All", "High", "Medium", "Low"];

export default function Alerts() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filteredAlerts =
    filter === "All"
      ? alertsData
      : alertsData.filter(
          (alert) => alert.severity === filter
        );

  return (
    <div className="alerts-page">

      {/* HEADER */}
      <header className="alerts-header">

        <button
          className="alerts-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div>
          <h1>Alerts Center</h1>
          <p>Regional logistics alerts & notifications</p>
        </div>

        <div className="live-indicator">
          <span></span>
          LIVE
        </div>

      </header>


      {/* CONTENT */}
      <main className="alerts-content">

        {/* FILTERS */}
        <div className="alert-filters">

          {filters.map((item) => (
            <button
              key={item}
              className={
                filter === item
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}

        </div>


        {/* SUMMARY */}
        <div className="alerts-summary">

          <div>
            <strong>{filteredAlerts.length}</strong>
            <span>
              {filter === "All"
                ? "Active Alerts"
                : `${filter} Risk Alerts`}
            </span>
          </div>

          <span className="updated-text">
            Updated just now
          </span>

        </div>


        {/* ALERT LIST */}
        <section className="alerts-list">

          {filteredAlerts.map((alert, index) => (

            <article
              className={`alert-card ${alert.type}`}
              key={`${alert.title}-${index}`}
            >

              <div className="alert-main">

                <div className="alert-icon-box">
                  {alert.icon}
                </div>

                <div className="alert-information">

                  <div className="alert-title-row">

                    <h2>{alert.title}</h2>

                    <span
                      className={`alert-severity ${alert.type}`}
                    >
                      {alert.severity}
                    </span>

                  </div>

                  <p className="alert-location">
                    {alert.location}
                  </p>

                  <p className="alert-description">
                    {alert.description}
                  </p>

                </div>

              </div>


              <div className="alert-footer">

                <span className="alert-time">
                  ◷ {alert.time}
                </span>

                <button
                  className="details-btn"
                  onClick={() =>
                    navigate("/risk-monitoring")
                  }
                >
                  View Details →
                </button>

              </div>

            </article>

          ))}

        </section>


        {/* EMPTY STATE */}
        {filteredAlerts.length === 0 && (
          <div className="empty-alerts">
            <div>✓</div>
            <strong>No {filter} alerts</strong>
            <p>
              There are currently no alerts in this category.
            </p>
          </div>
        )}


        {/* BOTTOM ACTION */}
        <button
          className="view-all-alerts"
          onClick={() => setFilter("All")}
        >
          View All Alerts
        </button>


        {/* AI ALERT INSIGHT */}
        <section className="alert-insight">

          <div className="insight-symbol">✦</div>

          <div>
            <strong>AI Alert Summary</strong>

            <p>
              One high-risk alert is currently active
              around the Shillong corridor. Consider
              checking Risk Monitoring before planning
              your next trip.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}