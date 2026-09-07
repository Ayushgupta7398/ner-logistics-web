import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// TODO: BACKEND/API INTEGRATION
// Replace demo trend with backend response.
//
// Demo API example:
// GET /api/admin/accessibility/trend?range=7d
const demoData = [
  { date: "12 May", score: 6.8 },
  { date: "13 May", score: 6.9 },
  { date: "14 May", score: 7.0 },
  { date: "15 May", score: 7.2 },
  { date: "16 May", score: 7.1 },
  { date: "17 May", score: 7.4 },
  { date: "18 May", score: 7.8 },
];

function AccessibilityTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={demoData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#64748b" }} />
        <YAxis domain={[0, 10]} tick={{ fontSize: 11, fill: "#64748b" }} />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AccessibilityTrendChart;