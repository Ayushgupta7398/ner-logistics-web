function AlertCard({
  type,
  severity,
  title,
  message,
  recommendedAction,
  createdAt,
}) {
  return (
    <div className={`alert-card alert-${severity.toLowerCase()}`}>

      <div className="alert-card-icon">
        !
      </div>

      <div className="alert-card-content">

        <div className="alert-card-header">

          <div>
            <h3>{title}</h3>

            <span className="alert-type">
              {type}
            </span>
          </div>

          <span className="alert-severity">
            {severity}
          </span>

        </div>

        <p>{message}</p>

        <div className="alert-card-footer">

          <span>
            {createdAt}
          </span>

          <span className="alert-action-text">
            {recommendedAction}
          </span>

        </div>

      </div>

    </div>
  );
}

export default AlertCard;