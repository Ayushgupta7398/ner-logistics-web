import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomeDashboard.css";

const alerts = [
  {
    icon: "⚠",
    title: "Landslide Risk",
    location: "NH-6, Shillong Sector",
    severity: "Critical",
    type: "critical",
  },
  {
    icon: "☔",
    title: "Heavy Rain",
    location: "Guwahati–Shillong",
    severity: "High",
    type: "high",
  },
  {
    icon: "🚗",
    title: "Traffic Alert",
    location: "Guwahati Bypass",
    severity: "Medium",
    type: "medium",
  },
];

const navItems = [
  ["⌂", "Dashboard", "/dashboard"],
  ["⌖", "Route Planner", "/route-planner"],
  ["◉", "Live Map", "/live-map"],
  ["◈", "Tracking", "/tracking"],
  ["≋", "Traffic", "/traffic"],
  ["♿", "Accessibility", "/accessibility"],
  ["⚠", "Risk Monitoring", "/risk-monitoring"],
  ["⚠", "Alerts", "/alerts"],
  ["▥", "Analytics", "/analytics"],
  ["▤", "Reports", "/reports"],
  ["⚙", "Settings", "/settings"],
];

function DummyMap() {
  return (
    <div className="ner-map">
      <div className="ner-map-grid" />

      <div className="ner-water" />

      <div className="ner-road ner-road-1" />
      <div className="ner-road ner-road-2" />
      <div className="ner-road ner-road-3" />
      <div className="ner-road ner-road-4" />

      <span className="ner-place ner-guwahati">Guwahati</span>
      <span className="ner-place ner-nongpoh">Nongpoh</span>
      <span className="ner-place ner-shillong">Shillong</span>

      <span className="ner-marker ner-marker-blue">●</span>
      <span className="ner-marker ner-marker-green">●</span>
      <span className="ner-marker ner-marker-red">●</span>

      <div className="ner-route-line" />

      <div className="ner-main-pin">
        <span>●</span>
      </div>

      <div className="ner-map-controls">
        <button>+</button>
        <button>−</button>
      </div>

      <div className="ner-map-label">
        <span>●</span> Live regional map
      </div>
    </div>
  );
}

export default function HomeDashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("ner_demo_session");
    navigate("/login");
  };

  return (
    <div className="ner-dashboard">

      {menuOpen && (
        <div
          className="ner-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`ner-sidebar ${menuOpen ? "open" : ""}`}>

        <div className="ner-brand">
          <div className="ner-logo">NER</div>
          <div>
            <strong>NER PLATFORM</strong>
            <small>LOGISTICS INTELLIGENCE</small>
          </div>
        </div>

        <nav className="ner-nav">
          {navItems.map(([icon, label, path]) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`ner-nav-link ${
                label === "Dashboard" ? "active" : ""
              }`}
            >
              <span>{icon}</span>
              {label}
            </Link>
          ))}
        </nav>

        <button className="ner-logout" onClick={logout}>
          ↪ &nbsp; Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="ner-main">

        {/* HEADER */}
        <header className="ner-header">

          <button
            className="ner-menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          <button
            className="ner-back"
            onClick={() => navigate(-1)}
          >
            ←
          </button>

          <div className="ner-search">
            <span>⌕</span>
            <input placeholder="Search location..." />
            <span>◎</span>
          </div>

          <div className="ner-profile">
            <div className="ner-avatar">A</div>
            <div>
              <strong>Rahul </strong>
              <small>Personal User</small>
            </div>
            <span>⌄</span>
          </div>

        </header>

        {/* CONTENT */}
        <div className="ner-content">

          <div className="ner-greeting">
            <h1>Good Morning, Rahul 👋</h1>
            <p>Here's what's happening today</p>
          </div>

          {/* STATS */}
          <div className="ner-stats">

            <div className="ner-card">
              <div className="ner-card-title">
                Active Trips
                <span className="green-icon">↗</span>
              </div>
              <strong>128</strong>
              <small>+12% from yesterday</small>
            </div>

            <div className="ner-card">
              <div className="ner-card-title">
                Vehicles
                <span className="blue-icon">▣</span>
              </div>
              <strong>24</strong>
              <small>18 currently on route</small>
            </div>

            <div className="ner-card">
              <div className="ner-card-title">
                Alerts
                <span className="red-icon">⚠</span>
              </div>
              <strong>07</strong>
              <small>3 require attention</small>
            </div>

            <div className="ner-card">
              <div className="ner-card-title">
                On-Time
                <span className="green-icon">✓</span>
              </div>
              <strong>94%</strong>
              <small>+3% this week</small>
            </div>

          </div>

          {/* MAP + ALERTS */}
          <div className="ner-middle">

            <section className="ner-panel ner-map-panel">
              <div className="ner-panel-heading">
                <div>
                  <h2>Live Map Overview</h2>
                  <p>Regional logistics activity</p>
                </div>

                <Link to="/live-map">View All</Link>
              </div>

              <DummyMap />
            </section>

            <section className="ner-panel ner-alert-panel">

              <div className="ner-panel-heading">
                <div>
                  <h2>Recent Alerts</h2>
                  <p>Latest regional alerts</p>
                </div>

                <Link to="/alerts">View All</Link>
              </div>

              <div className="ner-alerts">
                {alerts.map((alert) => (
                  <div
                    key={alert.title}
                    className={`ner-alert ${alert.type}`}
                  >
                    <div className="ner-alert-icon">
                      {alert.icon}
                    </div>

                    <div className="ner-alert-text">
                      <strong>{alert.title}</strong>
                      <small>{alert.location}</small>
                    </div>

                    <b>{alert.severity}</b>
                  </div>
                ))}
              </div>

            </section>

          </div>

          {/* ROUTE */}
          <section className="ner-route">

            <div>
              <span className="ner-ai-badge">
                ✦ AI Recommended Route
              </span>

              <h2>
                Guwahati <span>→</span> Shillong
              </h2>
            </div>

            <button
              onClick={() => navigate("/route-planner")}
            >
              View Route
            </button>

            <div className="ner-route-stats">

              <div>
                <small>ETA</small>
                <strong>4h 20m</strong>
              </div>

              <div>
                <small>Distance</small>
                <strong>98 km</strong>
              </div>

              <div>
                <small>Risk</small>
                <strong className="low">✓ Low</strong>
              </div>

              <div>
                <small>Accessibility</small>
                <strong>8.7/10</strong>
              </div>

            </div>

          </section>

          <div className="ner-status">
            <span>●</span>
            System operational
            <b>|</b>
            Last updated 2 min ago
          </div>

        </div>
      </main>
    </div>
  );
}