function StatCard({
  title,
  value,
  trend,
  trendType = "positive",
}) {
  return (
    <div className="stat-card">

      <div className="stat-card-header">
        <span className="stat-indicator"></span>

        <span className="stat-title">
          {title}
        </span>
      </div>

      <strong className="stat-value">
        {value}
      </strong>

      <span className={`stat-trend ${trendType}`}>
        {trend}
      </span>

    </div>
  );
}

export default StatCard;