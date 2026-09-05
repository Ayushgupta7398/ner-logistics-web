function QuickReportCard({ title, description, frequency, actionLabel }) {
  return (
    <div className="report-card">
      <h3 className="report-card-title">{title}</h3>
      <p className="report-card-desc">{description}</p>
      <span className="report-frequency">{frequency}</span>
      <br />
      {/* TODO: BACKEND/API INTEGRATION
          Report generation is Phase 2 (PRD Section 24, P6).
          Will call POST /api/admin/reports/generate once a
          file-generation service exists on the backend. */}
      <button className="btn-soft" disabled>
        {actionLabel}
      </button>
    </div>
  );
}

export default QuickReportCard;