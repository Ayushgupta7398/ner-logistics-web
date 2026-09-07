import { useNavigate } from "react-router-dom";
import "./TrafficOverview.css";

export default function TrafficOverview() {
  const navigate = useNavigate();

  const trafficUpdates = [
    {
      location: "Guwahati Bypass",
      type: "Heavy Traffic",
      time: "10 min ago",
      level: "red",
      icon: "🚗",
    },
    {
      location: "NH-6, Meghalaya",
      type: "Moderate Traffic",
      time: "15 min ago",
      level: "yellow",
      icon: "🚧",
    },
    {
      location: "Jorhat Road",
      type: "Smooth Traffic",
      time: "20 min ago",
      level: "green",
      icon: "🚙",
    },
  ];

  return (
    <div className="traffic-page">

      {/* HEADER */}
      <header className="traffic-header">

        <button
          className="traffic-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div>
          <h1>Traffic Overview</h1>
          <p>Live traffic conditions</p>
        </div>

        <span className="traffic-live">
          <span></span>
          LIVE
        </span>

      </header>


      {/* MAP */}
      <section className="traffic-map">

        <div className="map-status">
          ● Live Traffic
        </div>

        <svg
          viewBox="0 0 900 520"
          className="traffic-svg"
          preserveAspectRatio="none"
        >

          {/* BACKGROUND ROADS */}

          <path
            d="M0 100 C150 180 180 50 330 110
               S520 210 650 120
               S790 70 900 140"
            className="road"
          />

          <path
            d="M0 280 C120 220 210 340 330 290
               S500 210 610 300
               S780 400 900 330"
            className="road"
          />

          <path
            d="M150 0 C190 120 100 220 230 320
               S300 450 360 520"
            className="road"
          />

          <path
            d="M620 0 C550 100 690 180 590 290
               S570 420 700 520"
            className="road"
          />

          <path
            d="M400 0 C470 100 360 200 450 300
               S510 430 480 520"
            className="road"
          />

          {/* GREEN TRAFFIC */}

          <path
            d="M20 105
               C150 170 180 60 320 115
               S500 190 640 125"
            className="traffic-green"
          />

          {/* YELLOW TRAFFIC */}

          <path
            d="M320 115
               S500 190 640 125
               S760 80 890 145"
            className="traffic-yellow"
          />

          {/* RED TRAFFIC */}

          <path
            d="M330 290
               S500 210 610 300
               S760 390 890 330"
            className="traffic-red"
          />

          {/* EXTRA GREEN ROAD */}

          <path
            d="M150 0
               C190 120 100 220 230 320"
            className="traffic-green"
          />

          {/* TRAFFIC POINTS */}

          <circle cx="320" cy="115" r="8" className="point-yellow" />
          <circle cx="610" cy="300" r="8" className="point-red" />
          <circle cx="230" cy="320" r="8" className="point-green" />

        </svg>


        {/* MAP CONTROLS */}

        <div className="traffic-controls">

          <button title="Layers">◈</button>

          <button title="Center Map">⌖</button>

          <button title="Current Location">●</button>

        </div>

      </section>


      {/* LEGEND */}

      <section className="traffic-legend">

        <div className="legend-item">
          <span className="legend-dot green"></span>
          Smooth
        </div>

        <div className="legend-item">
          <span className="legend-dot yellow"></span>
          Moderate
        </div>

        <div className="legend-item">
          <span className="legend-dot red"></span>
          Heavy
        </div>

        <div className="legend-item">
          <span className="legend-dot dark-red"></span>
          Jam
        </div>

      </section>


      {/* UPDATES */}

      <section className="traffic-updates">

        <div className="updates-header">
          <div>
            <h2>Traffic Updates</h2>
            <p>Latest road conditions</p>
          </div>

          <button
            onClick={() => window.location.reload()}
          >
            ↻
          </button>
        </div>


        {trafficUpdates.map((item, index) => (

          <div
            className="traffic-card"
            key={index}
          >

            <div
              className={`traffic-icon ${item.level}`}
            >
              {item.icon}
            </div>

            <div className="traffic-info">

              <strong>
                {item.location}
              </strong>

              <span className={`traffic-type ${item.level}`}>
                {item.type}
              </span>

            </div>

            <span className="traffic-time">
              {item.time}
            </span>

          </div>

        ))}

      </section>


      {/* FOOTER ACTION */}

      <button
        className="traffic-fleet-button"
        onClick={() => navigate("/tracking")}
      >
        View Fleet Traffic
      </button>

    </div>
  );
}