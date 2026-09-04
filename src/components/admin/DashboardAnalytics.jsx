function DashboardAnalytics() {

  // TODO: BACKEND/API INTEGRATION
  // Replace these demo analytics values with backend data.
  //
  // Demo API example:
  // GET /api/admin/dashboard/analytics
  //
  // Expected response:
  // {
  //   "trafficFlow": "Normal",
  //   "accessibilityScore": 7.8,
  //   "averageSpeed": 42,
  //   "delayTime": 18
  // }
  //
  // Later example:
  // const response = await fetch("/api/admin/dashboard/analytics");
  // const data = await response.json();

  const analytics = [
    {
      title: "Traffic Flow",
      value: "Normal",
      trend: "Stable",
      type: "normal",
    },
    {
      title: "Accessibility Score",
      value: "7.8 / 10",
      trend: "Good",
      type: "good",
    },
    {
      title: "Avg Speed",
      value: "42 km/h",
      trend: "Normal",
      type: "normal",
    },
    {
      title: "Delay Time",
      value: "18 min",
      trend: "Attention",
      type: "warning",
    },
  ];

  return (
    <section className="dashboard-analytics">

      {analytics.map((item) => (
        <div
          className="analytics-card"
          key={item.title}
        >

          <div className="analytics-card-header">

            <span className="analytics-title">
              {item.title}
            </span>

            <span className={`analytics-indicator ${item.type}`}>
              ●
            </span>

          </div>

          <strong className={`analytics-value ${item.type}`}>
            {item.value}
          </strong>

          <span className="analytics-trend">
            {item.trend}
          </span>

        </div>
      ))}

    </section>
  );
}

export default DashboardAnalytics;