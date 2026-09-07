import { useNavigate, useLocation } from "react-router-dom";
import "./RouteResults.css";

const routes = [
  {
    id: 1,
    name: "Via NH-6",
    time: "4h 45m",
    distance: "105 km",
    risk: "Medium Risk",
    accessibility: "7.2/10",
  },
  {
    id: 2,
    name: "Via SH-5",
    time: "5h 10m",
    distance: "112 km",
    risk: "Low Risk",
    accessibility: "6.8/10",
  },
];

export default function RouteResults() {
  const navigate = useNavigate();
  const location = useLocation();

  const routeData = location.state || {
    from: "Guwahati, Assam",
    to: "Shillong, Meghalaya",
  };

  const from = routeData.from || "Guwahati, Assam";
  const to = routeData.to || "Shillong, Meghalaya";

  const fromShort = from.split(",")[0];
  const toShort = to.split(",")[0];

  return (
    <div className="results-page">

      {/* HEADER */}
      <header className="results-header">

        <button
          className="results-back"
          onClick={() => navigate("/route-planner")}
        >
          ←
        </button>

        <div className="results-logo">
          <div className="results-logo-mark">
            NER
          </div>

          <div>
            <strong>NER PLATFORM</strong>
            <span>LOGISTICS INTELLIGENCE</span>
          </div>
        </div>

        <div className="results-header-title">
          Route Results
        </div>

        <button
          className="results-plan-again"
          onClick={() => navigate("/route-planner")}
        >
          Plan New Route
        </button>

        <button
          className="results-menu"
          onClick={() => navigate("/dashboard")}
        >
          ☰
        </button>

      </header>


      {/* CONTENT */}
      <main className="results-content">

        {/* TITLE */}
        <section className="results-title">

          <div>
            <h1>Recommended Routes</h1>

            <p>
              Best routes from{" "}
              <strong>{fromShort}</strong>
              {" "}to{" "}
              <strong>{toShort}</strong>
            </p>
          </div>

          <div className="ai-results-badge">
            ✦ AI Optimized
          </div>

        </section>


        {/* MAIN RECOMMENDED ROUTE */}
        <section className="recommended-card">

          <div className="recommended-top">

            <div>
              <span className="recommended-label">
                AI Recommended
              </span>

              <h2>
                {fromShort} → {toShort}
              </h2>
            </div>

            <div className="best-route-badge">
              BEST ROUTE
            </div>

          </div>


          {/* STATS */}
          <div className="route-stats">

            <div className="route-stat">
              <span>ETA</span>
              <strong>4h 20m</strong>
            </div>

            <div className="route-stat">
              <span>Distance</span>
              <strong>98 km</strong>
            </div>

            <div className="route-stat">
              <span>Risk</span>
              <strong className="green">
                Low
              </strong>
            </div>

            <div className="route-stat">
              <span>Accessibility</span>
              <strong>
                8.7/10
              </strong>
            </div>

          </div>


          {/* CONFIDENCE */}
          <div className="confidence-section">

            <div className="confidence-heading">
              <span>
                AI Confidence 94%
              </span>

              <strong>
                94%
              </strong>
            </div>

            <div className="confidence-bar">
              <div
                className="confidence-progress"
                style={{ width: "94%" }}
              />
            </div>

          </div>


          {/* ACTIONS */}
          <div className="recommended-actions">

            <button
              className="view-details"
              onClick={() =>
                navigate("/route-details", {
                  state: {
                    from,
                    to,
                  },
                })
              }
            >
              View Details
              <span>→</span>
            </button>

            <button
              className="start-route"
              onClick={() =>
                navigate("/live-map", {
                  state: {
                    from,
                    to,
                  },
                })
              }
            >
              Start Route
              <span>↗</span>
            </button>

          </div>

        </section>


        {/* ALTERNATIVE ROUTES */}
        <section className="alternative-section">

          <div className="section-heading">

            <div>
              <h2>Alternative Routes</h2>

              <p>
                Other available route options
              </p>
            </div>

            <span>
              {routes.length} options
            </span>

          </div>


          <div className="alternative-list">

            {routes.map((route) => (

              <div
                className="alternative-card"
                key={route.id}
              >

                <div className="alternative-main">

                  <div className="alternative-icon">
                    {route.id === 1 ? "↗" : "↘"}
                  </div>

                  <div>
                    <h3>{route.name}</h3>

                    <div className="alternative-meta">
                      <span>
                        ◷ {route.time}
                      </span>

                      <span>
                        ◎ {route.distance}
                      </span>

                      <span
                        className={
                          route.risk === "Low Risk"
                            ? "low-risk"
                            : "medium-risk"
                        }
                      >
                        ● {route.risk}
                      </span>

                      <span>
                        ♿ {route.accessibility}
                      </span>
                    </div>
                  </div>

                </div>


                <button
                  className="select-route"
                  onClick={() =>
                    navigate("/route-planner", {
                      state: {
                        from,
                        to,
                      },
                    })
                  }
                >
                  Select
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* FOOTER INFO */}
        <div className="results-info">

          <span className="status-dot"></span>

          Routes calculated using traffic,
          safety and accessibility factors.

          <button
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}