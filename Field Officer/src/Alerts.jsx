import "./Alerts.css";

function Alerts() {
  const alerts = [
    { title: "Landslide Warning", description: "High risk hill area", severity: "High", time: "12 min ago" },
    { title: "Heavy Traffic", description: "NH6 • Slow movement", severity: "Moderate", time: "28 min ago" },
    { title: "Flood Alert", description: "Low lying areas affected", severity: "High", time: "1 hr ago" },
    { title: "Road Condition Update", description: "Road accessibility improved", severity: "Low", time: "2 hrs ago" },
  ];

  const highCount = alerts.filter((alert) => alert.severity === "High").length;
  const moderateCount = alerts.filter((alert) => alert.severity === "Moderate").length;
  const lowCount = alerts.filter((alert) => alert.severity === "Low").length;

  return (
    <div className="alerts-page">
      <div className="alerts-header">
        <div>
          <span className="alerts-eyebrow">FIELD OPERATIONS</span>
          <h1>Alerts</h1>
          <p>Read-only alerts relevant to your district</p>
        </div>
        <div className="alerts-live-status">
          <span className="status-dot" />
          Live monitoring
        </div>
      </div>

      <div className="alerts-summary">
        <div className="alert-summary-card">
          <span className="summary-label">ACTIVE ALERTS</span>
          <strong>{alerts.length}</strong>
          <span className="summary-note">Current district alerts</span>
        </div>
        <div className="alert-summary-card summary-high">
          <span className="summary-label">HIGH</span>
          <strong>{highCount}</strong>
          <span className="summary-note">Immediate attention</span>
        </div>
        <div className="alert-summary-card summary-moderate">
          <span className="summary-label">MODERATE</span>
          <strong>{moderateCount}</strong>
          <span className="summary-note">Monitor closely</span>
        </div>
        <div className="alert-summary-card summary-low">
          <span className="summary-label">LOW</span>
          <strong>{lowCount}</strong>
          <span className="summary-note">Informational</span>
        </div>
      </div>

      <div className="alerts-container">
        <div className="alerts-title-row">
          <div>
            <span className="section-kicker">DISTRICT MONITORING</span>
            <h2>Area Alerts</h2>
            <p>Operational alerts generated for your area</p>
          </div>
          <span className="active-alert-count">
            <span className="count-dot" />
            {alerts.length} Active
          </span>
        </div>

        <div className="alerts-list">
          {alerts.map((alert, index) => (
            <div className={`alert-card alert-${alert.severity.toLowerCase()}`} key={index}>
              <div className="alert-icon" aria-hidden="true">!</div>
              <div className="alert-content">
                <div className="alert-content-top">
                  <h3>{alert.title}</h3>
                  <span className="alert-mobile-time">{alert.time}</span>
                </div>
                <p>{alert.description}</p>
              </div>
              <span className="alert-severity">
                <span className="severity-dot" />
                {alert.severity}
              </span>
              <span className="alert-time">{alert.time}</span>
            </div>
          ))}
        </div>

        <div className="alerts-footer-note">
          <span className="footer-check">✓</span>
          Alerts are read-only. Field officers can review operational updates here.
        </div>
      </div>
    </div>
  );
}

export default Alerts;
