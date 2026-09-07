import { useLocation, useNavigate } from "react-router-dom";
import "./RouteDetails.css";

export default function RouteDetails() {
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

  const startTrip = () => {
    navigate("/live-map", {
      state: {
        from,
        to,
      },
    });
  };

  return (
    <div className="details-page">

      {/* HEADER */}
      <header className="details-header">

        <button
          className="details-back"
          onClick={() => navigate("/route-results")}
        >
          ←
        </button>

        <div className="details-brand">
          <div className="details-brand-icon">
            NER
          </div>

          <div>
            <strong>NER PLATFORM</strong>
            <span>LOGISTICS INTELLIGENCE</span>
          </div>
        </div>

        <h1>Route Details</h1>

        <button
          className="details-menu"
          onClick={() => navigate("/dashboard")}
        >
          ☰
        </button>

      </header>


      {/* MAP */}
      <section className="route-map">

        <div className="map-label">
          <span>Route Details</span>
          <small>AI Optimized</small>
        </div>

        {/* Dummy Map */}
        <svg
          className="dummy-map"
          viewBox="0 0 900 430"
          preserveAspectRatio="none"
        >

          {/* Map roads */}
          <path
            d="M0 80 C130 100 160 40 290 100
               S480 160 600 80
               S780 40 900 100"
            className="map-road"
          />

          <path
            d="M30 350 C150 290 190 360 300 300
               S480 240 580 290
               S750 360 900 280"
            className="map-road secondary"
          />

          <path
            d="M100 0 C170 80 120 150 220 220
               S300 350 380 430"
            className="map-road"
          />

          <path
            d="M620 0 C560 90 650 130 570 210
               S530 330 620 430"
            className="map-road"
          />

          {/* Route */}
          <path
            d="M105 350
               C180 315 190 270 245 250
               C330 215 360 190 425 170
               C500 145 550 130 610 105
               C690 72 750 75 825 35"
            className="route-line"
          />

          {/* Start */}
          <circle
            cx="105"
            cy="350"
            r="13"
            className="route-marker start"
          />

          <text
            x="105"
            y="350"
            textAnchor="middle"
            dominantBaseline="middle"
            className="marker-text"
          >
            A
          </text>

          {/* End */}
          <circle
            cx="825"
            cy="35"
            r="13"
            className="route-marker end"
          />

          <text
            x="825"
            y="35"
            textAnchor="middle"
            dominantBaseline="middle"
            className="marker-text"
          >
            B
          </text>

        </svg>

        {/* Location labels */}
        <div className="map-location start-location">
          <strong>{fromShort}</strong>
          <span>Starting Point</span>
        </div>

        <div className="map-location end-location">
          <strong>{toShort}</strong>
          <span>Destination</span>
        </div>

        {/* Map controls */}
        <div className="map-controls">
          <button>+</button>
          <button>−</button>
        </div>

      </section>


      {/* ROUTE SUMMARY */}
      <main className="details-content">

        <div className="route-summary">

          <div>
            <span className="summary-label">
              AI RECOMMENDED ROUTE
            </span>

            <h2>
              {fromShort} → {toShort}
            </h2>
          </div>

          <div className="route-status">
            ● Low Risk
          </div>

        </div>


        {/* INFORMATION CARD */}
        <section className="information-card">

          <div className="information-title">
            <div>
              <h2>Route Information</h2>
              <p>
                Optimized for safety, cost and accessibility
              </p>
            </div>

            <span className="confidence">
              94% AI
            </span>
          </div>


          <div className="information-grid">

            <div className="info-row">
              <span>◉ &nbsp;Total Distance</span>
              <strong>98 km</strong>
            </div>

            <div className="info-row">
              <span>◷ &nbsp;Estimated Time</span>
              <strong>4h 20m</strong>
            </div>

            <div className="info-row">
              <span>₹ &nbsp;Fuel Cost (Est.)</span>
              <strong>₹2,640</strong>
            </div>

            <div className="info-row">
              <span>₹ &nbsp;Toll Cost (Est.)</span>
              <strong>₹320</strong>
            </div>

            <div className="info-row">
              <span>● &nbsp;Risk Level</span>
              <strong className="safe">
                Low
              </strong>
            </div>

            <div className="info-row">
              <span>♿ &nbsp;Accessibility Score</span>
              <strong>8.7/10</strong>
            </div>

          </div>


          {/* CONFIDENCE */}
          <div className="details-confidence">

            <div>
              <span>Route confidence</span>
              <strong>94%</strong>
            </div>

            <div className="details-progress">
              <div />
            </div>

          </div>


          {/* START */}
          <button
            className="start-trip"
            onClick={startTrip}
          >
            Start Trip
            <span>→</span>
          </button>

        </section>


        {/* EXTRA INSIGHT */}
        <section className="route-insight">

          <div className="insight-icon">
            ✦
          </div>

          <div>
            <strong>AI Route Insight</strong>

            <p>
              This route provides the best balance of
              travel time, road safety, fuel cost and
              accessibility.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}