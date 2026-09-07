import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Analytics.css";

const routeData = [
  { route: "Guwahati → Shillong", value: 320 },
  { route: "Shillong → Guwahati", value: 285 },
  { route: "Imphal → Guwahati", value: 210 },
  { route: "Aizawl → Guwahati", value: 165 },
];

function DeliveryChart() {
  return (
    <div className="delivery-chart">

      <div className="chart-y-axis">
        <span>100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>

      <div className="chart-area">

        <div className="chart-grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <svg
          className="trend-line"
          viewBox="0 0 500 180"
          preserveAspectRatio="none"
        >
          <polyline
            points="
              10,130
              65,105
              120,120
              175,75
              230,100
              285,55
              340,80
              395,45
              450,65
              490,35
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          {[
            [10, 130],
            [65, 105],
            [120, 120],
            [175, 75],
            [230, 100],
            [285, 55],
            [340, 80],
            [395, 45],
            [450, 65],
            [490, 35],
          ].map(([x, y], index) => (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
            />
          ))}
        </svg>

        <div className="chart-months">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
        </div>

      </div>
    </div>
  );
}


function RouteChart() {
  const maxValue = 320;

  return (
    <div className="route-chart">

      {routeData.map((item) => (
        <div className="route-row" key={item.route}>

          <div className="route-name">
            {item.route}
          </div>

          <div className="route-bar-area">
            <div
              className="route-bar"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
              }}
            ></div>
          </div>

          <strong>{item.value}</strong>

        </div>
      ))}

    </div>
  );
}


export default function Analytics() {

  const navigate = useNavigate();

  const [period, setPeriod] = useState("7D");

  return (
    <div className="analytics-page">

      {/* HEADER */}

      <header className="analytics-header">

        <button
          className="analytics-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div>
          <h1>Analytics Overview</h1>
          <p>Logistics performance insights</p>
        </div>

        <div className="analytics-live">
          <span></span>
          LIVE DATA
        </div>

      </header>


      {/* MAIN CONTENT */}

      <main className="analytics-content">

        {/* PERIOD FILTER */}

        <div className="period-section">

          <span>Period</span>

          <div className="period-buttons">

            {["7D", "30D", "90D", "Custom"].map(
              (item) => (
                <button
                  key={item}
                  className={
                    period === item
                      ? "period-btn active"
                      : "period-btn"
                  }
                  onClick={() => setPeriod(item)}
                >
                  {item}
                </button>
              )
            )}

          </div>

        </div>


        {/* KPI CARDS */}

        <section className="analytics-stats">

          <div className="analytics-card">

            <span>Total Trips</span>

            <strong>1,284</strong>

            <small className="positive">
              ↑ 12%
            </small>

            <p>vs previous period</p>

          </div>


          <div className="analytics-card">

            <span>Avg. Delivery Time</span>

            <strong>4h 12m</strong>

            <small className="positive">
              ↓ 8%
            </small>

            <p>faster than last period</p>

          </div>


          <div className="analytics-card">

            <span>On-time Delivery</span>

            <strong>94%</strong>

            <small className="positive">
              ↑ 5%
            </small>

            <p>delivery success rate</p>

          </div>

        </section>


        {/* CHARTS */}

        <section className="analytics-grid">

          {/* DELIVERY TREND */}

          <div className="analytics-panel">

            <div className="panel-title">

              <div>
                <h2>Delivery Trend</h2>
                <p>Successful deliveries over time</p>
              </div>

              <span className="trend-badge">
                ↑ 12%
              </span>

            </div>

            <DeliveryChart />

          </div>


          {/* TOP ROUTES */}

          <div className="analytics-panel">

            <div className="panel-title">

              <div>
                <h2>Top Routes</h2>
                <p>Most frequently used routes</p>
              </div>

            </div>

            <RouteChart />

          </div>

        </section>


        {/* ADDITIONAL INSIGHTS */}

        <section className="insights-grid">

          <div className="insight-card">

            <div className="insight-icon">
              ↗
            </div>

            <div>
              <span>Best Performing Route</span>
              <strong>Guwahati → Shillong</strong>
              <small>96% on-time delivery</small>
            </div>

          </div>


          <div className="insight-card">

            <div className="insight-icon">
              ⚡
            </div>

            <div>
              <span>Average Risk Score</span>
              <strong>Low Risk</strong>
              <small>8.2 / 10 accessibility</small>
            </div>

          </div>


          <div className="insight-card">

            <div className="insight-icon">
              🚚
            </div>

            <div>
              <span>Fleet Utilization</span>
              <strong>87%</strong>
              <small>21 of 24 vehicles active</small>
            </div>

          </div>

        </section>


        {/* BOTTOM ACTION */}

        <button
          className="detailed-analytics"
          onClick={() =>
            alert(
              "Detailed analytics module will be connected to live data."
            )
          }
        >
          View Detailed Analytics →
        </button>


        {/* AI INSIGHT */}

        <section className="analytics-ai">

          <div className="ai-icon">
            ✦
          </div>

          <div>

            <strong>
              AI Performance Insight
            </strong>

            <p>
              Delivery performance has improved by
              12% during the selected period. The
              Guwahati–Shillong corridor currently
              shows the strongest performance.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}