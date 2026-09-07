import { useEffect, useMemo, useState } from "react";
import "./MyReports.css";

const demo = [
  {
    id: "DEMO-001",
    title: "Road Blocked",
    location: "NH206, Near Jorhat",
    severity: "High",
    sync: "Synced",
    date: "03/09/2026, 08:45 PM",
    type: "Road Blockage",
  },
  {
    id: "DEMO-002",
    title: "Bridge Damage",
    location: "Bridge near Rangapara",
    severity: "Moderate",
    sync: "Pending Sync",
    date: "03/09/2026, 07:30 PM",
    type: "Infrastructure",
  },
  {
    id: "DEMO-003",
    title: "Landslide",
    location: "Near Haflong Hill Road",
    severity: "High",
    sync: "Sync Failed",
    date: "02/09/2026, 05:15 PM",
    type: "Natural Hazard",
  },
  {
    id: "DEMO-004",
    title: "Flooded Area",
    location: "Low lying area, Marigaon",
    severity: "Moderate",
    sync: "Synced",
    date: "01/09/2026, 11:20 AM",
    type: "Flooding",
  },
];

function MyReports() {
  const [activeTab, setActiveTab] = useState("All");

  const [reports, setReports] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("ner:reports") || "[]"
      );

      return [...saved, ...demo];
    } catch {
      return demo;
    }
  });

  useEffect(() => {
    const refresh = () => {
      try {
        const saved = JSON.parse(
          localStorage.getItem("ner:reports") || "[]"
        );

        setReports([...saved, ...demo]);
      } catch {
        setReports(demo);
      }
    };

    window.addEventListener("ner:reports-updated", refresh);

    return () => {
      window.removeEventListener(
        "ner:reports-updated",
        refresh
      );
    };
  }, []);

  const filtered = useMemo(() => {
    return activeTab === "All"
      ? reports
      : reports.filter((r) => r.sync === activeTab);
  }, [activeTab, reports]);

  const count = (status) =>
    reports.filter((r) => r.sync === status).length;

  const tabs = [
    "All",
    "Pending Sync",
    "Syncing",
    "Synced",
    "Sync Failed",
  ];

  // ========================================
  // OPEN REPORT DETAILS
  // ========================================

  const open = (report) => {
    // Save complete selected report
    localStorage.setItem(
      "ner:selectedReport",
      JSON.stringify(report)
    );

    // Save only unique report ID
    localStorage.setItem(
      "ner:selectedReportId",
      report.id
    );

    // Navigate to Report Details
    window.dispatchEvent(
      new CustomEvent("ner:navigate", {
        detail: "Report Details",
      })
    );
  };

  return (
    <div className="my-reports-page">

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="my-reports-header">
        <div>
          <h1>My Reports</h1>

          <p>
            Only your submitted incident reports are shown here
          </p>
        </div>

        <div className="reports-header-badge">
          {reports.length} Total Reports
        </div>
      </div>

      {/* ========================================
          SUMMARY CARDS
      ======================================== */}

      <div className="report-summary-row">

        <div className="report-summary-card">
          <span className="summary-label">
            Total Reports
          </span>

          <strong>{reports.length}</strong>

          <span className="summary-note">
            Submitted by you
          </span>
        </div>

        <div className="report-summary-card summary-teal">
          <span className="summary-label">
            Synced
          </span>

          <strong>{count("Synced")}</strong>

          <span className="summary-note">
            Successfully synced
          </span>
        </div>

        <div className="report-summary-card summary-amber">
          <span className="summary-label">
            Pending Sync
          </span>

          <strong>{count("Pending Sync")}</strong>

          <span className="summary-note">
            Waiting to sync
          </span>
        </div>

        <div className="report-summary-card summary-red">
          <span className="summary-label">
            Sync Failed
          </span>

          <strong>{count("Sync Failed")}</strong>

          <span className="summary-note">
            Needs attention
          </span>
        </div>

      </div>

      {/* ========================================
          REPORTS CONTAINER
      ======================================== */}

      <div className="reports-container">

        <div className="reports-section-heading">
          <div>
            <h2>Submitted Reports</h2>

            <p>
              Track the sync status and severity of each incident
              report
            </p>
          </div>
        </div>

        {/* ========================================
            FILTER TABS
        ======================================== */}

        <div
          className="reports-tabs"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`report-tab ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}

              {tab !== "All" && (
                <span className="tab-count">
                  {count(tab)}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ========================================
            REPORT LIST
        ======================================== */}

        <div className="reports-list">

          {filtered.length ? (
            filtered.map((report, index) => (

              <div
                className="report-card"
                key={`${report.id || report.title}-${index}`}
              >

                <div className="report-image">
                  <div className="image-line" />
                  <span className="image-tag">
                    PHOTO
                  </span>
                </div>

                <div className="report-main-info">

                  <div className="report-type">
                    {report.type || report.title}
                  </div>

                  <h3>{report.title}</h3>

                  <p>{report.location}</p>

                </div>

                <span
                  className={`report-severity ${
                    report.severity === "High" ||
                    report.severity === "Critical"
                      ? "severity-high"
                      : "severity-moderate"
                  }`}
                >
                  {report.severity}
                </span>

                <span
                  className={`sync-status ${
                    report.sync === "Synced"
                      ? "sync-success"
                      : report.sync === "Pending Sync"
                      ? "sync-pending"
                      : report.sync === "Sync Failed"
                      ? "sync-failed"
                      : ""
                  }`}
                >
                  {report.sync}
                </span>

                <span className="report-date">
                  <small>Submitted</small>
                  {report.date}
                </span>

                <button
                  className="report-arrow"
                  type="button"
                  onClick={() => open(report)}
                  aria-label={`View ${report.title} report`}
                >
                  →
                </button>

              </div>

            ))
          ) : (

            <div className="reports-empty">

              <div className="empty-icon">
                ✓
              </div>

              <h3>
                No reports in this status
              </h3>

              <p>
                There are no submitted reports matching the
                selected filter.
              </p>

            </div>

          )}

        </div>
      </div>
    </div>
  );
}

export default MyReports;