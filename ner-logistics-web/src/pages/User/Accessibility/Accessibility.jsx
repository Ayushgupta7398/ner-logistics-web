import { useNavigate } from "react-router-dom";
import "./Accessibility.css";

export default function Accessibility() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🛣️",
      title: "Road Quality",
      status: "Good",
      type: "good",
    },
    {
      icon: "♿",
      title: "Public Transport Access",
      status: "Moderate",
      type: "moderate",
    },
    {
      icon: "🚶",
      title: "Differently Abled Friendly",
      status: "Good",
      type: "good",
    },
    {
      icon: "🛣️",
      title: "Rest Stops Availability",
      status: "Good",
      type: "good",
    },
    {
      icon: "🏥",
      title: "Medical Facilities Nearby",
      status: "Good",
      type: "good",
    },
  ];

  return (
    <div className="accessibility-page">

      {/* HEADER */}
      <header className="accessibility-header">

        <button
          className="accessibility-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div>
          <h1>Accessibility Analysis</h1>
          <p>AI-powered route accessibility assessment</p>
        </div>

        <span className="accessibility-live">
          ● LIVE
        </span>

      </header>


      {/* CONTENT */}
      <main className="accessibility-content">

        {/* SCORE CARD */}
        <section className="access-score-card">

          <div className="score-heading">
            <div>
              <span className="small-label">
                Route Accessibility Score
              </span>

              <div className="score-number">
                8.7<span>/10</span>
              </div>

              <strong className="score-status">
                Good
              </strong>
            </div>

            <button
              className="info-button"
              title="Accessibility score information"
            >
              i
            </button>
          </div>


          {/* SCORE BAR */}
          <div className="score-bar">
            <div className="score-progress"></div>
          </div>

          <div className="score-scale">
            <span>0</span>
            <span>5</span>
            <span>10</span>
          </div>

        </section>


        {/* ACCESSIBILITY FEATURES */}
        <section className="features-section">

          <div className="section-title">
            <div>
              <h2>Accessibility Features</h2>
              <p>Key factors affecting route accessibility</p>
            </div>
          </div>


          <div className="features-list">

            {features.map((feature) => (

              <div
                className="feature-row"
                key={feature.title}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <span className="feature-name">
                  {feature.title}
                </span>

                <span
                  className={`feature-status ${feature.type}`}
                >
                  {feature.status}
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* RECOMMENDATIONS */}
        <section className="recommendation-card">

          <div className="recommendation-title">
            <span className="recommendation-icon">
              ✦
            </span>

            <div>
              <h2>Recommendations</h2>
              <p>AI-generated accessibility insight</p>
            </div>
          </div>


          <p className="recommendation-text">
            This route is well accessible for differently
            abled and elderly travelers.
          </p>


          <div className="recommendation-tags">

            <span>♿ Wheelchair Friendly</span>
            <span>🚑 Medical Support</span>
            <span>🛑 Safe Rest Stops</span>

          </div>

        </section>


        {/* ROUTE DETAILS */}
        <section className="route-summary">

          <div>
            <span>Current Route</span>
            <strong>Guwahati → Shillong</strong>
          </div>

          <div>
            <span>Distance</span>
            <strong>98 km</strong>
          </div>

          <div>
            <span>Overall Risk</span>
            <strong className="low-risk">
              ✓ Low
            </strong>
          </div>

        </section>


        {/* ACTIONS */}
        <div className="accessibility-actions">

          <button
            className="primary-access-button"
            onClick={() => navigate("/route-planner")}
          >
            View Route Details →
          </button>

          <button
            className="secondary-access-button"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}