import { useState } from "react";
import QuickReportCard from "../../components/admin/QuickReportCard";

// TODO: BACKEND/API INTEGRATION
// Replace demo quick-report definitions with backend response,
// or keep static if report *types* are fixed and only their
// generated files are dynamic.
const quickReports = [
  { title: "Operational Report", description: "Overview of all operations, trips and fleet", frequency: "Daily / Monthly", category: "operational", actionLabel: "Generate" },
  { title: "Traffic Report", description: "Traffic sessions and congestion report", frequency: "Weekly / Monthly", category: "traffic", actionLabel: "Generate" },
  { title: "Risk Report", description: "Risk zones and incidents", frequency: "Weekly / Monthly", category: "risk", actionLabel: "Generate" },
  { title: "Accessibility Report", description: "Accessibility scores and regional trends", frequency: "Monthly", category: "accessibility", actionLabel: "Generate" },
  { title: "Alert Report", description: "Alerts summary and statistics", frequency: "Daily / Weekly", category: "alerts", actionLabel: "Generate" },
  { title: "Fleet Report", description: "Fleet performance and statistics", frequency: "Daily / Weekly", category: "operational", actionLabel: "Generate" },
  { title: "Route Performance", description: "Route efficiency and delay analysis", frequency: "Weekly / Monthly", category: "operational", actionLabel: "Generate" },
  { title: "Demand Report", description: "Logistics demand forecast and usage trends", frequency: "Weekly / Monthly", category: "operational", actionLabel: "Generate" }, 
  { title: "Custom Report", description: "Build and download custom reports", frequency: "Custom", category: "custom", actionLabel: "Custom" },
];

// TODO: BACKEND/API INTEGRATION
// Replace demo recent-reports list with backend response.
//
// Demo API example:
// GET /api/admin/reports/recent
const recentReports = [
  { name: "Operational Report - May 18", type: "Operational", generatedOn: "18 May 2024", format: "PDF", actionLabel: "Download" },
  { name: "Traffic Report - Week 20", type: "Traffic", generatedOn: "18 May 2024", format: "PDF", actionLabel: "Download" },
  { name: "Risk Report - Week 20", type: "Risk", generatedOn: "18 May 2024", format: "PDF", actionLabel: "Generate" },
  { name: "Accessibility Report - May", type: "Accessibility", generatedOn: "17 May 2024", format: "PDF", actionLabel: "Download" },
  { name: "Alert Report - May 18", type: "Alerts", generatedOn: "17 May 2024", format: "PDF", actionLabel: "Download" },
];

const TABS = ["all", "operational", "traffic", "risk", "accessibility", "alerts", "custom"];

function Reports() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredReports =
    activeTab === "all"
      ? quickReports
      : quickReports.filter((r) => r.category === activeTab);

  return (
    <div className="admin-dashboard">

      <div className="dashboard-header" style={{ display: "flex", alignItems: "flex-start" }}>
        <div>
          <h1>Reports</h1>
          <p>Generate, schedule & download operational reports</p>
        </div>

        {/* TODO: BACKEND/API INTEGRATION
            Phase 2 (PRD Section 24, P6) — non-functional placeholder. */}
        <div className="page-toolbar">
          <button className="btn-primary" disabled title="Report generation — Phase 2">
            ⬇ Generate Report
          </button>
        </div>
      </div>

      <div className="page-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`page-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all" ? "All Reports" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="dashboard-card tabbed-content-card" style={{ marginBottom: "18px" }}>
        <div className="card-header">
          <h2>Quick Reports</h2>
        </div>
        <div className="quick-reports-grid">
          {filteredReports.map((r) => (
            <QuickReportCard key={r.title} {...r} />
          ))}
        </div>
      </div>

      <div className="dashboard-card">
        <div className="recent-reports-header">
          <h2>Recent Reports</h2>
          {/* TODO: BACKEND/API INTEGRATION — non-functional placeholders */}
          <div className="recent-reports-toolbar">
            <input className="toolbar-select" placeholder="Search reports..." disabled />
            <button className="toolbar-select" disabled>Filters</button>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Recent Reports</th>
              <th>Type</th>
              <th>Generated On</th>
              <th>Format</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((r) => (
              <tr key={r.name}>
                <td><strong>{r.name}</strong></td>
                <td>{r.type}</td>
                <td>{r.generatedOn}</td>
                <td>{r.format}</td>
                <td>
                  <button className="table-action-link" disabled>
                    {r.actionLabel}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Reports;