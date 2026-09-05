// TODO: BACKEND/API INTEGRATION
// Replace demo region scores with backend response.
//
// Demo API example:
// GET /api/admin/accessibility/regions
//
// Expected response:
// [{ "region": "Assam", "score": 8.3 }, ...]
//
// Data source note: maps to District.accessibilityScore (0-10)
// for each NER district/state.
const demoRegions = [
  { region: "Assam", score: 8.3 },
  { region: "Meghalaya", score: 7.5 },
  { region: "Arunachal Pradesh", score: 6.9 },
  { region: "Manipur", score: 7.2 },
  { region: "Nagaland", score: 6.8 },
  { region: "Mizoram", score: 7.1 },
  { region: "Tripura", score: 8.0 },
  { region: "Sikkim", score: 7.9 },
];

function RegionScoreList() {
  return (
    <div className="region-score-list">
      {demoRegions.map((r) => (
        <div className="region-score-row" key={r.region}>
          <span className="region-score-name">{r.region}</span>
          <div className="region-score-track">
            <div
              className="region-score-fill"
              style={{ width: `${r.score * 10}%` }}
            ></div>
          </div>
          <span className="region-score-value">{r.score}</span>
        </div>
      ))}
    </div>
  );
}

export default RegionScoreList;