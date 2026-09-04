function AlertCard({
  type,
  severity,
  title,
  message,
  recommendedAction,
  createdAt,
}) {
  return (
    <div className="alert-card">

      <div className="alert-card-top">
        <span className={`alert-severity ${severity}`}>
          {severity}
        </span>

        <span className="alert-type">
          {type}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{message}</p>

      <div className="alert-action">
        <strong>Recommended Action:</strong>
        <span>{recommendedAction}</span>
      </div>

      <small>{createdAt}</small>

    </div>
  );
}

export default AlertCard;