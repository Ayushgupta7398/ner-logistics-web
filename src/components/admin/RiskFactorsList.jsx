// TODO: BACKEND/API INTEGRATION
// Replace demo risk factors with backend/AI response.
//
// Demo API example:
// GET /api/admin/risk/factors
//
// Expected response:
// [
//   { "name": "Landslide", "level": "high" },
//   { "name": "Flood", "level": "moderate" }
// ]
//
// Data source note: derived from Infrastructure.topFactors /
// WeatherSnapshot.condition on the backend/AI side.
// Frontend must NOT calculate or reorder risk severity itself.
const demoFactors = [
  { name: "Landslide", level: "high" },
  { name: "Flood", level: "moderate" },
  { name: "Heavy Rain", level: "moderate" },
  { name: "Road Condition", level: "low" },
  { name: "Wind", level: "low" },
];

function RiskFactorsList() {
  return (
    <div className="risk-factors-list">
      {demoFactors.map((factor) => (
        <div className="risk-factor-row" key={factor.name}>
          <span className="risk-factor-name">{factor.name}</span>
          <span className={`level-badge ${factor.level}`}>
            {factor.level.charAt(0).toUpperCase() + factor.level.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RiskFactorsList;