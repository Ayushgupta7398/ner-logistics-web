function TripOverview() {

  // TODO: BACKEND/API INTEGRATION
  // Replace these demo trip statistics with backend data.
  //
  // Demo API example:
  // GET /api/admin/trips/overview
  //
  // Expected response:
  // {
  //   "totalTrips": 1240,
  //   "ongoingTrips": 428,
  //   "completedTrips": 812
  // }
  //
  // Later example:
  // const response = await fetch("/api/admin/trips/overview");
  // const data = await response.json();

  const totalTrips = 1240;
  const ongoingTrips = 428;
  const completedTrips = 812;

  const ongoingPercentage = Math.round(
    (ongoingTrips / totalTrips) * 100
  );

  const completedPercentage = Math.round(
    (completedTrips / totalTrips) * 100
  );

  return (
    <div className="trip-overview">

      <div className="card-header">
        <h2>Trip Overview</h2>
      </div>

      <div className="trip-overview-content">

        <div
          className="trip-donut"
          style={{
            "--ongoing-percentage": `${ongoingPercentage}%`,
          }}
        >
          <div className="trip-donut-center">
            <strong>{totalTrips.toLocaleString()}</strong>
            <span>Total Trips</span>
          </div>
        </div>

        <div className="trip-legend">

          <div className="trip-legend-item">

            <span className="trip-dot ongoing"></span>

            <div>
              <strong>{ongoingTrips}</strong>
              <span>
                Ongoing ({ongoingPercentage}%)
              </span>
            </div>

          </div>


          <div className="trip-legend-item">

            <span className="trip-dot completed"></span>

            <div>
              <strong>{completedTrips}</strong>
              <span>
                Completed ({completedPercentage}%)
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TripOverview;