import { useEffect, useState } from "react";
import "./ReportDetails.css";

function ReportDetails() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    try {
      // Step 1: Selected report ID read karo
      const selectedReportId = localStorage.getItem(
        "ner:selectedReportId"
      );

      // Step 2: All saved reports read karo
      const allReports = JSON.parse(
        localStorage.getItem("ner:reports") || "[]"
      );

      // Step 3: ID ke basis par exact report find karo
      const foundReport = selectedReportId
        ? allReports.find(
            (r) => r.id === selectedReportId
          )
        : null;

      // Step 4: Agar ID se report mil gayi
      if (foundReport) {
        setReport(foundReport);
        return;
      }

      // Step 5: Fallback - selectedReport se data read karo
      const savedReport = JSON.parse(
        localStorage.getItem("ner:selectedReport") || "null"
      );

      if (savedReport) {
        setReport(savedReport);
        return;
      }

      setReport(null);
    } catch {
      setReport(null);
    }
  }, []);

  // Demo fallback
  const r =
    report || {
      id: "DEMO-003",
      title: "Landslide",
      severity: "High",
      description:
        "Landslide occurred due to heavy rainfall. Road is partially blocked.",
      location: "Near Haflong Hill Road",
      date: "02/09/2026, 05:15 PM",
      sync: "Synced",
    };

  return (
    <div className="report-details-page">

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="report-details-header">
        <div>
          <h1>Report Details</h1>
          <p>Read-only incident information</p>
        </div>

        <span className="top-sync-badge">
          {r.sync || "Synced"}
        </span>
      </div>

      {/* ========================================
          MAIN CARD
      ======================================== */}

      <div className="details-card">

        {/* ========================================
            INCIDENT PHOTO
        ======================================== */}

        <div className="incident-photo">
          <div className="photo-shape shape-one" />
          <div className="photo-shape shape-two" />

          <span>Incident Photo</span>
        </div>

        {/* ========================================
            INFORMATION
        ======================================== */}

        <div className="details-information">

          <div className="details-info-top">
            <div>
              <span className="details-eyebrow">
                INCIDENT RECORD
              </span>

              <h2>Incident Information</h2>
            </div>

            <span className="read-only-pill">
              Read-only
            </span>
          </div>

          {/* Incident Type */}

          <div className="detail-item">
            <span className="detail-label">
              Incident Type
            </span>

            <strong>
              {r.title}
            </strong>
          </div>

          {/* Severity */}

          <div className="detail-item">
            <span className="detail-label">
              Severity
            </span>

            <span className="detail-severity">
              {r.severity}
            </span>
          </div>

          {/* Description */}

          <div className="detail-item">
            <span className="detail-label">
              Description
            </span>

            <p className="detail-description">
              {r.description ||
                "No additional description provided."}
            </p>
          </div>

          {/* Location */}

          <div className="detail-item">
            <span className="detail-label">
              Location
            </span>

            <strong>
              {r.location ||
                "Field location captured"}
            </strong>
          </div>

          {/* Coordinates */}

          <div className="detail-item">
            <span className="detail-label">
              Coordinates
            </span>

            <span className="detail-value">
              {r.location?.includes("Lat")
                ? r.location
                : "Lat: 26.234567  Long: 92.345678"}
            </span>
          </div>

          {/* Client Timestamp */}

          <div className="detail-item">
            <span className="detail-label">
              Client Timestamp
            </span>

            <span className="detail-value">
              {r.date}
            </span>
          </div>

          {/* Synced At */}

          <div className="detail-item">
            <span className="detail-label">
              Synced At
            </span>

            <span className="detail-value">
              {r.sync === "Synced"
                ? "03/09/2026, 08:50 PM"
                : "Waiting for connection"}
            </span>
          </div>

          {/* Sync Status */}

          <div className="detail-item">
            <span className="detail-label">
              Sync Status
            </span>

            <span className="detail-sync-badge">
              {r.sync || "Synced"}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ReportDetails;