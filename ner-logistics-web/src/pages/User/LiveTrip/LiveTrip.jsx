import { useLocation, useNavigate } from "react-router-dom";
import "./LiveTrip.css";

export default function LiveTrip() {
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

  const handleEndTrip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="live-page">

      {/* HEADER */}
      <header className="live-header">

        <button
          className="live-back"
          onClick={() => navigate("/route-details", {
            state: { from, to }
          })}
        >
          ←
        </button>

        <div className="live-brand">
          <div className="live-brand-icon">NER</div>

          <div>
            <strong>NER PLATFORM</strong>
            <span>LOGISTICS INTELLIGENCE</span>
          </div>
        </div>

        <h1>Live Trip</h1>

        <button
          className="live-menu"
          onClick={() => navigate("/dashboard")}
        >
          ☰
        </button>

      </header>


      {/* MAP */}
      <section className="live-map">

        <div className="live-map-title">
          <span>● Live Tracking</span>
          <small>GPS Active</small>
        </div>

        {/* DUMMY MAP */}
        <svg
          className="live-map-svg"
          viewBox="0 0 900 560"
          preserveAspectRatio="none"
        >

          {/* roads */}
          <path
            d="M0 90 C120 120 180 40 300 110
               S500 180 610 100
               S770 60 900 120"
            className="live-road"
          />

          <path
            d="M0 410 C130 350 200 450 320 390
               S520 290 650 370
               S790 430 900 350"
            className="live-road"
          />

          <path
            d="M120 0 C190 90 130 180 250 260
               S300 430 380 560"
            className="live-road"
          />

          <path
            d="M650 0 C570 110 690 180 570 280
               S550 450 650 560"
            className="live-road"
          />

          {/* route */}
          <path
            d="M205 470
               C240 420 260 370 300 330
               C350 285 375 250 420 220
               C480 180 525 165 590 145
               C650 125 710 105 760 65"
            className="live-route"
          />

          {/* travelled route */}
          <path
            d="M205 470
               C240 420 260 370 300 330
               C350 285 375 250 420 220"
            className="travelled-route"
          />

          {/* destination */}
          <circle
            cx="760"
            cy="65"
            r="15"
            className="live-destination"
          />

          <text
            x="760"
            y="65"
            textAnchor="middle"
            dominantBaseline="middle"
            className="live-marker-text"
          >
            B
          </text>

          {/* current vehicle */}
          <circle
            cx="420"
            cy="220"
            r="22"
            className="vehicle-pulse"
          />

          <circle
            cx="420"
            cy="220"
            r="13"
            className="vehicle-marker"
          />

          <text
            x="420"
            y="220"
            textAnchor="middle"
            dominantBaseline="middle"
            className="vehicle-text"
          >
            🚚
          </text>

        </svg>


        {/* Map controls */}
        <div className="live-controls">

          <button title="Layers">
            ◈
          </button>

          <button title="Center">
            ⌖
          </button>

          <button title="Location">
            ●
          </button>

        </div>


        {/* Current location */}
        <div className="current-location">
          <span className="location-dot"></span>
          Vehicle currently en route
        </div>

      </section>


      {/* TRIP DETAILS */}
      <main className="live-content">

        <section className="trip-card">

          <div className="trip-card-header">

            <div>
              <span className="trip-label">
                TRIP DETAILS
              </span>

              <h2>
                {fromShort} → {toShort}
              </h2>
            </div>

            <span className="trip-status">
              ● In Progress
            </span>

          </div>


          <div className="trip-info">

            <div className="trip-row">
              <span>◉ &nbsp;Route</span>
              <strong>
                {fromShort} → {toShort}
              </strong>
            </div>

            <div className="trip-row">
              <span>▣ &nbsp;Vehicle</span>
              <strong>AS01AB1234</strong>
            </div>

            <div className="trip-row">
              <span>♙ &nbsp;Driver</span>
              <strong>Rohit Sharma</strong>
            </div>

            <div className="trip-row">
              <span>● &nbsp;Status</span>
              <strong className="in-progress">
                In Progress
              </strong>
            </div>

            <div className="trip-row">
              <span>◷ &nbsp;ETA</span>
              <strong>4h 20m</strong>
            </div>

          </div>


          {/* PROGRESS */}
          <div className="trip-progress-section">

            <div className="progress-heading">
              <span>Trip Progress</span>
              <strong>48%</strong>
            </div>

            <div className="trip-progress">
              <div></div>
            </div>

          </div>


          {/* END TRIP */}
          <button
            className="end-trip"
            onClick={handleEndTrip}
          >
            End Trip
          </button>

        </section>


        {/* LIVE STATUS */}
        <section className="live-status-card">

          <div className="live-status-icon">
            ✓
          </div>

          <div>
            <strong>Trip is being monitored</strong>

            <p>
              Live route tracking, safety and traffic
              conditions are being monitored.
            </p>
          </div>

          <span className="gps-active">
            GPS Active
          </span>

        </section>

      </main>

    </div>
  );
}