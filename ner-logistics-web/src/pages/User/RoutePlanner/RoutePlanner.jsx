import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RoutePlanner.css";

const navItems = [
  { icon: "⌂", label: "Dashboard", path: "/dashboard" },
  { icon: "⌖", label: "Route Planner", path: "/route-planner" },
  { icon: "◉", label: "Live Map", path: "/live-map" },
  { icon: "◈", label: "Tracking", path: "/tracking" },
  { icon: "≋", label: "Traffic", path: "/traffic" },
  { icon: "♿", label: "Accessibility", path: "/accessibility" },
  { icon: "⚠", label: "Alerts", path: "/alerts" },
  { icon: "▥", label: "Analytics", path: "/analytics" },
  { icon: "▤", label: "Reports", path: "/reports" },
  { icon: "⚙", label: "Settings", path: "/settings" },
];

const recentSearches = [
  {
    from: "Guwahati",
    to: "Shillong",
    time: "2 hours ago",
  },
  {
    from: "Imphal",
    to: "Dimapur",
    time: "1 day ago",
  },
  {
    from: "Aizawl",
    to: "Silchar",
    time: "2 days ago",
  },
];

function DummyRouteMap({ route }) {
  return (
    <div className="route-map">

      <div className="map-grid"></div>

      <div className="map-water"></div>

      <div className="map-road route-road-one"></div>
      <div className="map-road route-road-two"></div>
      <div className="map-road route-road-three"></div>

      {route && (
        <div className="selected-route"></div>
      )}

      <div className="route-city city-guwahati">
        Guwahati
      </div>

      <div className="route-city city-shillong">
        Shillong
      </div>

      <div className="route-marker start-marker">
        ●
      </div>

      <div className="route-marker end-marker">
        ●
      </div>

      <div className="route-map-controls">
        <button>+</button>
        <button>−</button>
      </div>

      <div className="map-info-card">
        <strong>
          {route ? "Recommended Route" : "Route Preview"}
        </strong>

        <span>
          {route
            ? "AI optimized for safety and accessibility"
            : "Enter locations to find the best route"}
        </span>
      </div>

    </div>
  );
}

export default function RoutePlanner() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [from, setFrom] = useState("Guwahati, Assam");
  const [to, setTo] = useState("Shillong, Meghalaya");

  const [travelMode, setTravelMode] = useState("Road");
  const [priority, setPriority] = useState("Fastest");

  const [accessible, setAccessible] = useState(true);
  const [routeFound, setRouteFound] = useState(false);

 function handleFindRoute(event) {
  event.preventDefault();

  if (!from.trim() || !to.trim()) {
    return;
  }

  navigate("/route-results", {
    state: {
      from,
      to,
      travelMode,
      priority,
      accessible,
    },
  });
}

  function handleLogout() {
    sessionStorage.removeItem("ner_demo_session");
    navigate("/login");
  }

  return (
    <div className="route-planner-page">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="route-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`route-sidebar ${
          sidebarOpen ? "route-sidebar-open" : ""
        }`}
      >

        <div className="route-logo">
          <div className="route-logo-mark">NER</div>

          <div>
            <strong>NER PLATFORM</strong>
            <span>LOGISTICS INTELLIGENCE</span>
          </div>
        </div>

        <nav className="route-nav">

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`route-nav-link ${
                item.label === "Route Planner"
                  ? "active"
                  : ""
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}

        </nav>

        <button
          className="route-logout"
          onClick={handleLogout}
        >
          ↪ &nbsp; Logout
        </button>

      </aside>


      {/* MAIN */}
      <main className="route-main">

        {/* HEADER */}
        <header className="route-header">

          <button
            className="route-mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <button
            className="route-back"
            onClick={() => navigate(-1)}
          >
            ←
          </button>

          <div className="route-header-search">
            ⌕
            <input
              placeholder="Search location..."
            />
          </div>

          <div className="route-profile">

            <div className="route-avatar">
              A
            </div>

            <div>
              <strong>Rahul</strong>
              <span>Personal User</span>
            </div>

            <span>⌄</span>

          </div>

        </header>


        {/* PAGE */}
        <div className="route-content">

          <div className="route-title">

            <div>
              <h1>Plan Your Route</h1>

              <p>
                Find the safest and most efficient route
                for your journey.
              </p>
            </div>

            <div className="ai-route-badge">
              ✦ AI Route Intelligence
            </div>

          </div>


          <div className="route-layout">

            {/* LEFT FORM */}
            <section className="route-form-card">

              <form onSubmit={handleFindRoute}>

                {/* FROM */}
                <div className="route-field">

                  <label>From</label>

                  <div className="location-input">
                    <span className="location-icon">
                      ◎
                    </span>

                    <input
                      value={from}
                      onChange={(e) =>
                        setFrom(e.target.value)
                      }
                    />
                  </div>

                </div>


                {/* SWAP */}
                <button
                  type="button"
                  className="swap-button"
                  onClick={() => {
                    const temp = from;
                    setFrom(to);
                    setTo(temp);
                  }}
                  title="Swap locations"
                >
                  ⇅
                </button>


                {/* TO */}
                <div className="route-field">

                  <label>To</label>

                  <div className="location-input">
                    <span className="location-icon">
                      ◎
                    </span>

                    <input
                      value={to}
                      onChange={(e) =>
                        setTo(e.target.value)
                      }
                    />
                  </div>

                </div>


                {/* TRAVEL MODE */}
                <div className="route-section">

                  <label>Travel Mode</label>

                  <div className="option-grid">

                    {[
                      ["Road", "♙"],
                      ["Truck", "▣"],
                      ["Bus", "▤"],
                    ].map(([mode, icon]) => (

                      <button
                        type="button"
                        key={mode}
                        className={
                          travelMode === mode
                            ? "option active"
                            : "option"
                        }
                        onClick={() =>
                          setTravelMode(mode)
                        }
                      >
                        <span>{icon}</span>
                        {mode}
                      </button>

                    ))}

                  </div>

                </div>


                {/* PRIORITY */}
                <div className="route-section">

                  <label>Route Priority</label>

                  <div className="priority-grid">

                    {[
                      "Fastest",
                      "Safest",
                      "Accessible",
                    ].map((item) => (

                      <button
                        type="button"
                        key={item}
                        className={
                          priority === item
                            ? "priority active"
                            : "priority"
                        }
                        onClick={() =>
                          setPriority(item)
                        }
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                </div>


                {/* ACCESSIBILITY */}
                <label className="accessibility-option">

                  <input
                    type="checkbox"
                    checked={accessible}
                    onChange={(e) =>
                      setAccessible(e.target.checked)
                    }
                  />

                  <span>
                    Avoid high-risk areas
                  </span>

                </label>


                {/* FIND ROUTE */}
                <button
                  className="find-route-button"
                  type="submit"
                >
                  Find Route
                  <span>→</span>
                </button>

              </form>

            </section>


            {/* RIGHT MAP */}
            <section className="route-map-card">

              <div className="map-card-header">

                <div>
                  <h2>Route Overview</h2>

                  <p>
                    {from} → {to}
                  </p>
                </div>

                {routeFound && (
                  <span className="route-found">
                    ✓ Route Found
                  </span>
                )}

              </div>

              <DummyRouteMap route={routeFound} />


              {/* RESULT */}
              {routeFound && (

                <div className="route-result">

                  <div className="result-main">

                    <div>
                      <span>Recommended Route</span>

                      <strong>
                        {from.split(",")[0]}
                        {" → "}
                        {to.split(",")[0]}
                      </strong>
                    </div>

                    <span className="safe-badge">
                      Low Risk
                    </span>

                  </div>


                  <div className="result-stats">

                    <div>
                      <span>ETA</span>
                      <strong>4h 20m</strong>
                    </div>

                    <div>
                      <span>Distance</span>
                      <strong>98 km</strong>
                    </div>

                    <div>
                      <span>Risk</span>
                      <strong className="green-text">
                        Low
                      </strong>
                    </div>

                    <div>
                      <span>Accessibility</span>
                      <strong>8.7/10</strong>
                    </div>

                  </div>

                  <button
                    className="continue-route"
                    onClick={() =>
                      navigate("/live-map")
                    }
                  >
                    Continue to Live Map →
                  </button>

                </div>

              )}

            </section>

          </div>


          {/* RECENT SEARCHES */}
          <section className="recent-searches">

            <div className="recent-header">

              <div>
                <h2>Recent Searches</h2>
                <p>Your recently planned routes</p>
              </div>

              <button
                onClick={() => setRouteFound(false)}
              >
                Clear
              </button>

            </div>


            <div className="recent-list">

              {recentSearches.map((item) => (

                <button
                  key={`${item.from}-${item.to}`}
                  className="recent-item"
                  onClick={() => {
                    setFrom(`${item.from}, Assam`);
                    setTo(`${item.to}, Meghalaya`);
                  }}
                >

                  <span className="recent-route-icon">
                    ⌖
                  </span>

                  <span className="recent-route">
                    {item.from}
                    <b> → </b>
                    {item.to}
                  </span>

                  <span className="recent-time">
                    {item.time}
                  </span>

                  <span>›</span>

                </button>

              ))}

            </div>

          </section>


          <div className="route-status">
            <span></span>
            AI routing engine operational
          </div>

        </div>

      </main>

    </div>
  );
}