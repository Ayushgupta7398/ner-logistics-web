import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RiskMonitoring.css";

const risks = [
  {
    name: "High Risk",
    count: "2 Areas",
    color: "high",
    icon: "●",
  },
  {
    name: "Medium Risk",
    count: "5 Areas",
    color: "medium",
    icon: "●",
  },
  {
    name: "Low Risk",
    count: "12 Areas",
    color: "low",
    icon: "●",
  },
];

const riskAreas = [
  {
    name: "Shillong Sector",
    type: "High",
    description: "Landslide probability elevated",
  },
  {
    name: "Nongpoh",
    type: "Medium",
    description: "Heavy rainfall detected",
  },
  {
    name: "Guwahati Bypass",
    type: "Low",
    description: "Road conditions stable",
  },
];

function DummyRiskMap({ live }) {
  return (
    <div className="risk-map">

      <div className="map-terrain"></div>

      {/* Roads */}
      <div className="risk-road risk-road-1"></div>
      <div className="risk-road risk-road-2"></div>
      <div className="risk-road risk-road-3"></div>

      {/* Risk zones */}
      <div className="risk-zone zone-red"></div>
      <div className="risk-zone zone-orange"></div>
      <div className="risk-zone zone-yellow"></div>

      {/* Markers */}
      <div className="risk-marker red-marker">●</div>
      <div className="risk-marker blue-marker">●</div>
      <div className="risk-marker yellow-marker">●</div>
      <div className="risk-marker red-marker marker-two">●</div>

      {/* Locations */}
      <span className="map-place place-guwahati">
        Guwahati
      </span>

      <span className="map-place place-shillong">
        Shillong
      </span>

      <span className="map-place place-nongpoh">
        Nongpoh
      </span>

      {/* Map controls */}
      <div className="risk-map-controls">
        <button>+</button>
        <button>−</button>
        <button>◎</button>
      </div>

      {live && (
        <div className="live-map-badge">
          <span></span>
          Live monitoring
        </div>
      )}

    </div>
  );
}

export default function RiskMonitoring() {
  const navigate = useNavigate();
  const [view, setView] = useState("map");

  return (
    <div className="risk-page">

      {/* HEADER */}
      <header className="risk-header">

        <button
          className="risk-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div>
          <h1>Risk Monitoring</h1>
          <p>Regional logistics risk intelligence</p>
        </div>

        <span className="risk-status">
          ● LIVE
        </span>

      </header>


      {/* MAIN */}
      <main className="risk-content">

        {/* VIEW TABS */}
        <div className="risk-tabs">

          <button
            className={view === "map" ? "active" : ""}
            onClick={() => setView("map")}
          >
            Map View
          </button>

          <button
            className={view === "live" ? "active" : ""}
            onClick={() => setView("live")}
          >
            Live View
          </button>

        </div>


        {/* MAP */}
        <section className="risk-map-card">

          <DummyRiskMap live={view === "live"} />

        </section>


        {/* RISK LEVELS */}
        <section className="risk-level-section">

          <div className="section-heading">
            <h2>Risk Levels</h2>
            <span>Current regional status</span>
          </div>

          <div className="risk-level-grid">

            {risks.map((risk) => (
              <div
                className={`risk-level-card ${risk.color}`}
                key={risk.name}
              >

                <div className="risk-level-title">
                  <span>{risk.icon}</span>
                  {risk.name}
                </div>

                <strong>{risk.count}</strong>

              </div>
            ))}

          </div>

        </section>


        {/* RISK AREAS */}
        <section className="risk-areas">

          <div className="section-heading">
            <h2>Active Risk Areas</h2>
            <span>AI monitored locations</span>
          </div>

          <div className="risk-area-list">

            {riskAreas.map((area) => (

              <div
                className="risk-area-card"
                key={area.name}
              >

                <div className="risk-area-icon">
                  {area.type === "High"
                    ? "!"
                    : area.type === "Medium"
                    ? "!"
                    : "✓"}
                </div>

                <div className="risk-area-info">
                  <strong>{area.name}</strong>
                  <span>{area.description}</span>
                </div>

                <span
                  className={`area-risk ${area.type.toLowerCase()}`}
                >
                  {area.type}
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* AI INSIGHT */}
        <section className="risk-insight">

          <div className="insight-icon">✦</div>

          <div>
            <strong>AI Risk Insight</strong>

            <p>
              Elevated risk detected around the Shillong
              corridor due to rainfall and road conditions.
              Consider safer alternate routes.
            </p>
          </div>

        </section>


        {/* BUTTONS */}
        <div className="risk-actions">

          <button
            className="primary-risk-button"
            onClick={() => navigate("/route-planner")}
          >
            Plan Safer Route →
          </button>

          <button
            className="secondary-risk-button"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}