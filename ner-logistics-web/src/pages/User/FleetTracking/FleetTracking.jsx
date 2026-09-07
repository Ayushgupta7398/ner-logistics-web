import { useNavigate } from "react-router-dom";
import "./FleetTracking.css";

export default function FleetTracking() {
  const navigate = useNavigate();

  const vehicles = [
    {
      id: "AS01AB1234",
      route: "Guwahati → Shillong",
      status: "In Progress",
      time: "60m",
      color: "green",
    },
    {
      id: "AS02CD5678",
      route: "Silchar → Guwahati",
      status: "Delayed",
      time: "2h 20m",
      color: "red",
    },
    {
      id: "ML05EF890",
      route: "Imphal → Dimapur",
      status: "In Progress",
      time: "55 min",
      color: "green",
    },
  ];

  return (
    <div className="fleet-page">

      {/* HEADER */}
      <header className="fleet-header">

        <button
          className="fleet-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div className="fleet-title">
          <strong>Fleet Tracking</strong>
          <span>Live vehicle monitoring</span>
        </div>

        <button
          className="fleet-expand"
          title="Full Screen"
        >
          ⛶
        </button>

      </header>


      {/* VIEW TABS */}
      <div className="fleet-tabs">

        <button className="fleet-tab active">
          Map View
        </button>

        <button
          className="fleet-tab"
          onClick={() => {
            document
              .querySelector(".fleet-list")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          List View
        </button>

      </div>


      {/* MAP */}
      <section className="fleet-map">

        <div className="fleet-map-label">
          <span className="live-dot"></span>
          LIVE
        </div>

        <svg
          className="fleet-map-svg"
          viewBox="0 0 900 650"
          preserveAspectRatio="none"
        >

          {/* MAP ROADS */}
          <path
            d="M0 90 C150 140 190 40 330 110
               S520 190 650 120
               S790 80 900 150"
            className="map-road"
          />

          <path
            d="M0 300 C120 260 190 360 320 300
               S500 210 620 300
               S770 400 900 330"
            className="map-road"
          />

          <path
            d="M70 0 C150 120 100 230 220 330
               S300 500 390 650"
            className="map-road"
          />

          <path
            d="M650 0 C580 100 700 190 600 300
               S560 500 680 650"
            className="map-road"
          />

          <path
            d="M350 0 C430 100 350 190 430 300
               S500 500 470 650"
            className="map-road"
          />


          {/* MAIN ROUTE */}
          <path
            d="M110 150
               C210 180 250 250 330 290
               C410 330 440 390 500 420
               C570 455 610 510 700 570"
            className="fleet-route"
          />


          {/* VEHICLE ROUTES */}
          <path
            d="M110 150
               C210 180 250 250 330 290"
            className="route-blue"
          />

          <path
            d="M500 420
               C570 455 610 510 700 570"
            className="route-green"
          />


          {/* VEHICLE 1 */}
          <circle
            cx="330"
            cy="290"
            r="18"
            className="vehicle-ring"
          />

          <circle
            cx="330"
            cy="290"
            r="10"
            className="vehicle-blue"
          />

          <text
            x="330"
            y="294"
            textAnchor="middle"
            className="vehicle-icon"
          >
            🚚
          </text>


          {/* VEHICLE 2 */}
          <circle
            cx="500"
            cy="420"
            r="18"
            className="vehicle-ring-red"
          />

          <circle
            cx="500"
            cy="420"
            r="10"
            className="vehicle-red"
          />

          <text
            x="500"
            y="424"
            textAnchor="middle"
            className="vehicle-icon"
          >
            🚚
          </text>


          {/* VEHICLE 3 */}
          <circle
            cx="700"
            cy="570"
            r="18"
            className="vehicle-ring-green"
          />

          <circle
            cx="700"
            cy="570"
            r="10"
            className="vehicle-green"
          />

          <text
            x="700"
            y="574"
            textAnchor="middle"
            className="vehicle-icon"
          >
            🚚
          </text>


          {/* DESTINATION */}
          <circle
            cx="760"
            cy="100"
            r="12"
            className="destination"
          />

          <text
            x="760"
            y="104"
            textAnchor="middle"
            className="destination-text"
          >
            ●
          </text>

        </svg>


        {/* MAP CONTROLS */}
        <div className="fleet-map-controls">

          <button title="Layers">◈</button>
          <button title="Center Map">⌖</button>
          <button title="Current Location">●</button>

        </div>

      </section>


      {/* VEHICLE LIST */}
      <section className="fleet-list">

        <div className="fleet-list-header">
          <strong>Active Vehicles</strong>

          <span>
            {vehicles.length} vehicles
          </span>
        </div>


        {vehicles.map((vehicle) => (

          <div
            className="vehicle-card"
            key={vehicle.id}
          >

            <div
              className={`vehicle-status-icon ${vehicle.color}`}
            >
              🚚
            </div>

            <div className="vehicle-details">

              <strong>
                {vehicle.id}
              </strong>

              <span>
                {vehicle.route}
              </span>

            </div>

            <div className="vehicle-state">

              <strong
                className={`state-${vehicle.color}`}
              >
                {vehicle.status}
              </strong>

              <span>
                {vehicle.time}
              </span>

            </div>

          </div>

        ))}


        <button
          className="all-vehicles"
          onClick={() => alert("Showing all fleet vehicles")}
        >
          View All Vehicles →
        </button>

      </section>

    </div>
  );
}