import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reports.css";

const reportTypes = [
  {
    icon: "▧",
    title: "Trip Report",
    description: "Detailed trip analytics",
    type: "trip",
  },
  {
    icon: "▤",
    title: "Delivery Report",
    description: "Delivery performance",
    type: "delivery",
  },
  {
    icon: "▦",
    title: "Vehicle Report",
    description: "Vehicle performance",
    type: "vehicle",
  },
  {
    icon: "◷",
    title: "Delay Report",
    description: "Delivery delay report",
    type: "delay",
  },
  {
    icon: "◫",
    title: "Custom Report",
    description: "Create custom reports",
    type: "custom",
  },
];

export default function Reports() {
  const navigate = useNavigate();
  const [generating, setGenerating] = useState("");

  function generateReport(report) {
    setGenerating(report.type);

    setTimeout(() => {
      setGenerating("");
      alert(`${report.title} generated successfully!`);
    }, 700);
  }

  return (
    <div className="reports-page">

      {/* HEADER */}

      <header className="reports-header">

        <button
          className="reports-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div>
          <h1>Reports</h1>
          <p>Generate and manage logistics reports</p>
        </div>

        <div className="reports-status">
          <span></span>
          SYSTEM READY
        </div>

      </header>


      {/* CONTENT */}

      <main className="reports-content">

        <div className="reports-intro">
          <div>
            <h2>Reports Center</h2>
            <p>
              Select a report type to generate detailed
              logistics insights.
            </p>
          </div>

          <div className="report-date">
            <span>Reporting Period</span>
            <strong>Last 30 Days</strong>
          </div>
        </div>


        {/* REPORT CARDS */}

        <section className="reports-grid">

          {reportTypes.map((report) => (
            <article
              className={`report-card ${
                report.type === "custom"
                  ? "custom-report"
                  : ""
              }`}
              key={report.type}
            >

              <div className="report-card-top">

                <div className="report-icon">
                  {report.icon}
                </div>

                <div className="report-info">
                  <h3>{report.title}</h3>
                  <p>{report.description}</p>
                </div>

              </div>


              <button
                className="generate-button"
                onClick={() => generateReport(report)}
                disabled={generating === report.type}
              >
                {generating === report.type
                  ? "Generating..."
                  : "Generate"}
              </button>

            </article>
          ))}

        </section>


        {/* RECENT REPORTS */}

        <section className="recent-reports">

          <div className="recent-heading">
            <div>
              <h2>Recent Reports</h2>
              <p>Your recently generated reports</p>
            </div>

            <button
              onClick={() =>
                alert("All reports will be available here.")
              }
            >
              View All
            </button>
          </div>


          <div className="recent-list">

            <div className="recent-item">

              <div className="recent-file-icon">
                PDF
              </div>

              <div>
                <strong>Trip Performance Report</strong>
                <span>Generated today • 1.8 MB</span>
              </div>

              <button
                onClick={() =>
                  alert("Demo report download")
                }
              >
                ↓
              </button>

            </div>


            <div className="recent-item">

              <div className="recent-file-icon">
                PDF
              </div>

              <div>
                <strong>Delivery Performance Report</strong>
                <span>Generated yesterday • 2.1 MB</span>
              </div>

              <button
                onClick={() =>
                  alert("Demo report download")
                }
              >
                ↓
              </button>

            </div>


            <div className="recent-item">

              <div className="recent-file-icon">
                CSV
              </div>

              <div>
                <strong>Vehicle Utilization Report</strong>
                <span>Generated 3 days ago • 820 KB</span>
              </div>

              <button
                onClick={() =>
                  alert("Demo report download")
                }
              >
                ↓
              </button>

            </div>

          </div>

        </section>


        {/* AI REPORT INSIGHT */}

        <section className="reports-ai">

          <div className="reports-ai-icon">
            ✦
          </div>

          <div>
            <strong>AI Report Assistant</strong>

            <p>
              Generate reports to understand route
              performance, vehicle utilization, delivery
              efficiency and operational risks.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}