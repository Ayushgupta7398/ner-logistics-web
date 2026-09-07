import { useState, useEffect } from "react";
import "./Dashboard.css";

import LiveMap from "./LiveMap.jsx";
import ReportIncident from "./ReportIncident.jsx";
import MyReports from "./MyReports.jsx";
import ReportDetails from "./ReportDetails.jsx";
import Alerts from "./Alerts.jsx";

function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    "Dashboard",
    "Live Map",
    "Report Incident",
    "My Reports",
    "Report Details",
    "Alerts",
  ];

  useEffect(() => {
    const handleNavigation = (event) => {
      const page = event.detail;

      if (menuItems.includes(page)) {
        setActivePage(page);
      }
    };

    window.addEventListener("ner:navigate", handleNavigation);

    return () => {
      window.removeEventListener("ner:navigate", handleNavigation);
    };
  }, []);

  const goTo = (page) => {
    setActivePage(page);
  };

  const renderOtherPage = () => {
    if (activePage === "Live Map") {
      return <LiveMap />;
    }

    if (activePage === "Report Incident") {
      return <ReportIncident />;
    }

    if (activePage === "My Reports") {
      return <MyReports />;
    }

    if (activePage === "Report Details") {
      return <ReportDetails />;
    }

    if (activePage === "Alerts") {
      return <Alerts />;
    }

    return null;
  };

  const dashboardContent = (
    <main className="dashboard-content">

      {/* PAGE HEADING */}
      <div className="page-heading">
        <span className="platform-title">NER Platform</span>

        <h1>Field Officer Dashboard</h1>

        <p>
          West District • Field intelligence and area monitoring
        </p>
      </div>

      {/* WELCOME CARD */}
      <section className="welcome-card">
        <div className="welcome-left">
          <span className="welcome-label">WELCOME BACK</span>

          <h2>Radhika Gupta</h2>

          <p>
            Monitor your assigned area, track incidents, and stay
            connected with field operations.
          </p>

          <div className="welcome-info">
            <span>West District</span>
            <span>•</span>
            <span>Field Officer</span>
          </div>
        </div>

        <div className="welcome-right">
          <div className="initial-avatar">RG</div>
        </div>
      </section>

      {/* STATUS CARDS */}
      <section className="status-grid">

        <div className="status-card">
          <div className="status-card-top">
            <span className="status-title">Weather</span>
            <span className="status-icon">☁</span>
          </div>

          <h3>28°C</h3>
          <p>Partly Cloudy</p>

          <span className="status-good">
            Good conditions
          </span>
        </div>

        <div className="status-card">
          <div className="status-card-top">
            <span className="status-title">Connectivity</span>
            <span className="status-icon">◉</span>
          </div>

          <h3>Online</h3>
          <p>Network connected</p>

          <span className="status-good">
            Synced
          </span>
        </div>

        <div className="status-card">
          <div className="status-card-top">
            <span className="status-title">Accessibility</span>
            <span className="status-icon">✓</span>
          </div>

          <h3>Good</h3>
          <p>Area accessible</p>

          <span className="status-good">
            Normal
          </span>
        </div>

      </section>

      {/* AREA ALERTS */}
      <section className="section-block">

        <div className="section-header">
          <div>
            <span className="section-kicker">
              AREA MONITORING
            </span>

            <h2>Area Alerts</h2>
          </div>

          <button
            type="button"
            className="view-alerts"
            onClick={() => goTo("Alerts")}
          >
            View all alerts
          </button>
        </div>

        <div className="alerts-grid">

          <div className="area-alert-card high-alert">
            <div className="alert-card-top">
              <span className="severity-badge high">
                HIGH
              </span>

              <span className="alert-time">
                12 min ago
              </span>
            </div>

            <h3>Road obstruction reported</h3>

            <p>
              Major obstruction detected near the west district route.
            </p>

            <span className="alert-location">
              West District
            </span>
          </div>

          <div className="area-alert-card moderate-alert">
            <div className="alert-card-top">
              <span className="severity-badge moderate">
                MODERATE
              </span>

              <span className="alert-time">
                35 min ago
              </span>
            </div>

            <h3>Traffic congestion</h3>

            <p>
              Increased traffic activity reported in the monitored area.
            </p>

            <span className="alert-location">
              Central Route
            </span>
          </div>

          <div className="area-alert-card safe-alert">
            <div className="alert-card-top">
              <span className="severity-badge low">
                LOW
              </span>

              <span className="alert-time">
                1 hr ago
              </span>
            </div>

            <h3>Area operating normally</h3>

            <p>
              No major operational issues reported in the monitored area.
            </p>

            <span className="alert-location">
              West District
            </span>
          </div>

        </div>
      </section>

      {/* RECENT REPORTS */}
      <section className="section-block">

        <div className="section-header">
          <div>
            <span className="section-kicker">
              FIELD ACTIVITY
            </span>

            <h2>Recent Reports</h2>
          </div>

          <button
            type="button"
            className="view-alerts"
            onClick={() => goTo("My Reports")}
          >
            View all reports
          </button>
        </div>

        <div className="reports-card">

          <div className="report-row">
            <div className="report-main">
              <div className="report-dot high-dot"></div>

              <div>
                <h3>Road obstruction</h3>
                <p>
                  West District • Today, 10:42 AM
                </p>
              </div>
            </div>

            <div className="report-status">
              <span className="severity-badge high">
                HIGH
              </span>

              <span className="sync-badge synced">
                Synced
              </span>

              <button
                type="button"
                className="report-arrow"
                onClick={() => {
                  localStorage.setItem(
                    "ner:selectedReportTitle",
                    "Road obstruction"
                  );

                  goTo("Report Details");
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="report-row">
            <div className="report-main">
              <div className="report-dot moderate-dot"></div>

              <div>
                <h3>Traffic congestion</h3>

                <p>
                  Central Route • Today, 09:15 AM
                </p>
              </div>
            </div>

            <div className="report-status">
              <span className="severity-badge moderate">
                MODERATE
              </span>

              <span className="sync-badge syncing">
                Syncing
              </span>

              <button
                type="button"
                className="report-arrow"
                onClick={() => {
                  localStorage.setItem(
                    "ner:selectedReportTitle",
                    "Traffic congestion"
                  );

                  goTo("Report Details");
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="report-row">
            <div className="report-main">
              <div className="report-dot low-dot"></div>

              <div>
                <h3>Routine inspection</h3>

                <p>
                  West District • Yesterday, 04:30 PM
                </p>
              </div>
            </div>

            <div className="report-status">
              <span className="severity-badge low">
                LOW
              </span>

              <span className="sync-badge synced">
                Synced
              </span>

              <button
                type="button"
                className="report-arrow"
                onClick={() => {
                  localStorage.setItem(
                    "ner:selectedReportTitle",
                    "Routine inspection"
                  );

                  goTo("Report Details");
                }}
              >
                →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* DISTRICT OVERVIEW */}
      <section className="section-block">

        <div className="section-header">
          <div>
            <span className="section-kicker">
              OPERATIONS
            </span>

            <h2>District Overview</h2>
          </div>
        </div>

        <div className="overview-grid">

          <div className="overview-card">
            <span className="overview-label">
              ACTIVE INCIDENTS
            </span>

            <strong>08</strong>

            <p>Currently monitored</p>
          </div>

          <div className="overview-card">
            <span className="overview-label">
              HIGH PRIORITY
            </span>

            <strong>02</strong>

            <p>Require attention</p>
          </div>

          <div className="overview-card">
            <span className="overview-label">
              REPORTS TODAY
            </span>

            <strong>12</strong>

            <p>Field submissions</p>
          </div>

          <div className="overview-card">
            <span className="overview-label">
              SYNC STATUS
            </span>

            <strong>98%</strong>

            <p>Successfully synced</p>
          </div>

        </div>
      </section>

      {/* QUICK ACTION */}
      <section className="quick-action-card">

        <div>
          <span className="section-kicker">
            FIELD ACTION
          </span>

          <h2>Need to report something?</h2>

          <p>
            Create a new incident report with location and field information.
          </p>
        </div>

        <button
          type="button"
          className="primary-action"
          onClick={() => goTo("Report Incident")}
        >
          + Report Incident
        </button>

      </section>

    </main>
  );

  return (
    <div
      className={
        sidebarOpen
          ? "dashboard sidebar-open"
          : "dashboard sidebar-closed"
      }
    >

      {/* SINGLE TOGGLE BUTTON */}
      <button
        className="sidebar-open-button"
        type="button"
        onClick={() => setSidebarOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {/* SIDEBAR */}
      {sidebarOpen && (
        <aside className="sidebar">

          <div className="sidebar-brand-space"></div>

          <nav className="nav-menu">

            {menuItems.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  activePage === item
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={() => goTo(item)}
              >
                <span className="nav-text">
                  {item}
                </span>
              </button>
            ))}

          </nav>

          <div className="sidebar-bottom">

            <div className="officer-profile">

              <div className="profile-avatar">
                RG
              </div>

              <div>
                <strong>
                  Radhika Gupta
                </strong>

                <span>
                  West District
                </span>
              </div>

            </div>

          </div>

        </aside>
      )}

      {/* MAIN CONTENT */}
      <div className="main-content">

        {activePage === "Dashboard"
          ? dashboardContent
          : renderOtherPage()}

      </div>

    </div>
  );
}

export default Dashboard;