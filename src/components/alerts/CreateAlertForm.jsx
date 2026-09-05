import { useState } from "react";

const ALERT_TYPES = ["blocked_road", "flood", "landslide", "delay", "traffic", "weather", "safety"];
const SEVERITIES = ["low", "moderate", "high", "critical"];

function CreateAlertForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(ALERT_TYPES[0]);
  const [severity, setSeverity] = useState(SEVERITIES[0]);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // TODO: BACKEND/API INTEGRATION
    // POST /api/admin/alerts
    // Backend will validate + persist + enforce role permission (admin only).
    // For now, we only update local UI state (see AlertManagement.jsx).
    onSubmit({
      title,
      type,
      severity,
      location,
      description,
      status: "active",
      time: "Just now",
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Alert Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Landslide Risk Detected"
          required
        />
      </div>

      <div className="form-group">
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {ALERT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Severity</label>
        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          {SEVERITIES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. NH-6, East Khasi Hills"
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description of the alert"
        />
      </div>

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          Create Alert
        </button>
      </div>

    </form>
  );
}

export default CreateAlertForm;