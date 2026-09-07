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

// TODO: BACKEND/API INTEGRATION
// Replace demo trend data with backend response.
//
// Demo API example:
// GET /api/admin/traffic/trend?range=7d
//
// Expected response:
// [
//   { "date": "12 May", "avgSpeed": 45, "delayTime": 28 },
//   ...
// ]
const demoData = [
  { date: "12 May", avgSpeed: 45, delayTime: 28 },
  { date: "13 May", avgSpeed: 58, delayTime: 35 },
  { date: "14 May", avgSpeed: 72, delayTime: 52 },
  { date: "15 May", avgSpeed: 65, delayTime: 40 },
  { date: "16 May", avgSpeed: 62, delayTime: 38 },
  { date: "17 May", avgSpeed: 68, delayTime: 42 },
  { date: "18 May", avgSpeed: 75, delayTime: 45 },
];

function TrafficFlowChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={demoData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} />
        <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
        <Tooltip />
        <Legend
          formatter={(value) =>
            value === "avgSpeed" ? "Avg Speed (km/h)" : "Delay Time (min)"
          }
        />
        <Line
          type="monotone"
          dataKey="avgSpeed"
          stroke="#2563eb"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="delayTime"
          stroke="#f59e0b"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TrafficFlowChart;