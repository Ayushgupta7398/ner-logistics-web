import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// TODO: AI/ML API INTEGRATION
// Display predicted-vs-actual risk score trend received from backend/AI.
// Frontend must NOT calculate or modify the AI prediction.
//
// Demo API example:
// GET /api/admin/risk/trend?range=7d
//
// Expected response:
// [
//   { "date": "12 May", "actual": 42, "predicted": 45 },
//   ...
// ]
const demoData = [
  { date: "12 May", actual: 40, predicted: 45 },
  { date: "13 May", actual: 48, predicted: 46 },
  { date: "14 May", actual: 55, predicted: 52 },
  { date: "15 May", actual: 50, predicted: 54 },
  { date: "16 May", actual: 58, predicted: 56 },
  { date: "17 May", actual: 62, predicted: 60 },
  { date: "18 May", actual: 59, predicted: 61 },
];

function RiskTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={demoData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} />
        <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
        <Tooltip />
        <Legend
          formatter={(value) => (value === "actual" ? "Actual Risk Score" : "Predicted Risk Score")}
        />
        <Line type="monotone" dataKey="actual" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke="#2563eb"
          strokeWidth={2}
          strokeDasharray="6 4"
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RiskTrendChart;