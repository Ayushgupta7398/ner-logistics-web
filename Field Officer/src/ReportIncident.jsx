import { useEffect, useState } from "react";
import "./ReportIncident.css";

function ReportIncident() {
  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState({
    lat: "26.345678",
    lng: "92.670901",
    captured: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(new Date().toLocaleString());
  }, []);

  const useLocation = () =>
    setLocation({
      lat: "26.345678",
      lng: "92.670901",
      captured: true,
    });

  const submit = () => {
    if (!type || !severity || !description.trim()) {
      alert(
        "Please select incident type, severity and enter a description."
      );
      return;
    }

    // Unique Report ID added
    const report = {
      id: `REP-${Date.now()}`,
      title: type,
      location: `Lat ${location.lat}, Long ${location.lng}`,
      severity,
      sync: "Pending Sync",
      date: timestamp || new Date().toLocaleString(),
      type: type,
      description,
      photo: photo?.name || "No photo",
    };

    const old = JSON.parse(
      localStorage.getItem("ner:reports") || "[]"
    );

    localStorage.setItem(
      "ner:reports",
      JSON.stringify([report, ...old])
    );

    localStorage.setItem(
      "ner:selectedReport",
      JSON.stringify(report)
    );

    window.dispatchEvent(new Event("ner:reports-updated"));

    setSubmitted(true);
  };

  const cancel = () => {
    setType("");
    setSeverity("");
    setDescription("");
    setPhoto(null);
    setSubmitted(false);
  };

  // ========================================
  // SUCCESS SCREEN
  // ========================================

  if (submitted) {
    return (
      <div className="report-incident-page">
        <div className="report-card">
          <div className="success-state">
            <div className="success-icon">✓</div>

            <h1>Report Submitted</h1>

            <p>
              Your incident report has been saved locally and is marked{" "}
              <strong>Pending Sync</strong>.
            </p>

            <button
              type="button"
              className="submit-button"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("ner:navigate", {
                    detail: "My Reports",
                  })
                )
              }
            >
              View My Reports →
            </button>

            <button
              type="button"
              className="cancel-button"
              onClick={cancel}
            >
              Create Another Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========================================
  // REPORT INCIDENT PAGE
  // ========================================

  return (
    <div className="report-incident-page">
      <div className="report-header">
        <div>
          <div className="report-kicker">FIELD OPERATIONS</div>

          <h1>Report Incident</h1>

          <p>Create a geo-tagged field incident report</p>
        </div>

        <div className="report-status">
          <span className="status-dot" />
          Ready to submit
        </div>
      </div>

      <div className="report-card">

        {/* ========================================
            INCIDENT INFORMATION
        ======================================== */}

        <section className="incident-information">
          <div className="section-heading">
            <div className="section-icon">+</div>

            <div>
              <h2>Incident Information</h2>
              <p>Record what you observed in the field</p>
            </div>
          </div>

          {/* Incident Type */}

          <div className="form-group">
            <label>
              Incident Type <span>*</span>
            </label>

            <select
              className="incident-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select incident type</option>
              <option>Road Blocked</option>
              <option>Landslide</option>
              <option>Flood</option>
              <option>Bridge Damage</option>
              <option>Heavy Traffic</option>
            </select>
          </div>

          {/* Severity */}

          <div className="form-group">
            <label>
              Severity <span>*</span>
            </label>

            <div className="severity-options">
              {["Low", "Moderate", "High", "Critical"].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`severity-${s.toLowerCase()} ${
                    severity === s ? "selected" : ""
                  }`}
                  onClick={() => setSeverity(s)}
                >
                  <span>●</span> {s}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}

          <div className="form-group">
            <label>
              Description <span>*</span>
            </label>

            <textarea
              className="description-box"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you observed, road condition, impact, or immediate risk..."
            />

            <div className="field-hint">
              Include any details that may help the response team.
            </div>
          </div>

          {/* Photo */}

          <div className="form-group">
            <label>
              Photo <span>*</span>
            </label>

            <label className="photo-upload">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setPhoto(e.target.files?.[0] || null)
                }
                hidden
              />

              <div className="upload-icon">↑</div>

              <div>
                <strong>
                  {photo
                    ? photo.name
                    : "Upload incident photo"}
                </strong>

                <span>
                  {photo
                    ? "Photo selected"
                    : "Tap to choose a photo from your device"}
                </span>
              </div>

              <div className="upload-arrow">›</div>
            </label>
          </div>

          {/* Client Timestamp */}

          <div className="form-group timestamp-group">
            <label>
              Client Timestamp <span>*</span>
            </label>

            <div className="timestamp-wrap">
              <span className="timestamp-icon">◷</span>

              <input
                className="timestamp-input"
                value={timestamp}
                readOnly
              />

              <span className="captured-badge">
                Captured
              </span>
            </div>
          </div>
        </section>

        {/* ========================================
            LOCATION
        ======================================== */}

        <section className="location-section">
          <div className="section-heading">
            <div className="section-icon location-icon">
              ⌖
            </div>

            <div>
              <h2>Location</h2>
              <p>Confirm where the incident was observed</p>
            </div>
          </div>

          <div className="map-toolbar">
            <span>Current field position</span>

            <button
              type="button"
              onClick={useLocation}
            >
              ⌖ Use my location
            </button>
          </div>

          <div className="incident-map">
            <div className="map-grid" />

            <div className="map-water water-one" />
            <div className="map-water water-two" />

            <div className="map-line line-one" />
            <div className="map-line line-two" />
            <div className="map-line line-three" />
            <div className="map-line line-four" />

            <span className="map-label label-one">
              Jorhat
            </span>

            <span className="map-label label-two">
              West District
            </span>

            <span className="map-label label-three">
              NH 206
            </span>

            <div className="incident-marker">
              <span>!</span>
            </div>

            <div className="incident-marker-label">
              Incident location
            </div>

            <div className="incident-zoom">
              <button type="button">+</button>
              <button type="button">−</button>
            </div>

            <button
              className="map-location-control"
              type="button"
              onClick={useLocation}
            >
              ⌖
            </button>

            <div className="map-scale">
              2 km
            </div>
          </div>

          {/* Location Details */}

          <div className="location-details">
            <div className="location-detail-main">
              <span className="geo-label">
                GEO-TAGGED LOCATION
              </span>

              <strong>
                Lat: {location.lat} • Long: {location.lng}
              </strong>
            </div>

            <span className="location-captured">
              <span>✓</span>{" "}
              {location.captured
                ? "Location captured"
                : "Location required"}
            </span>
          </div>

          <div className="location-note">
            <span>i</span>
            Location is attached automatically to this
            report for operational tracking.
          </div>

          <div className="location-divider" />

          {/* Actions */}

          <div className="report-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={cancel}
            >
              Cancel
            </button>

            <button
              type="button"
              className="submit-button"
              onClick={submit}
            >
              <span>+</span>
              Submit Report
              <b>→</b>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReportIncident;