import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// TODO: BACKEND/API INTEGRATION
// Replace demo trend with backend response.
//
// Demo API example:
// GET /api/admin/dashboard/trips-trend?range=7d
const demoData = [
  { date: "12 May", trips: 1080 },
  { date: "13 May", trips: 1120 },
  { date: "14 May", trips: 1190 },
  { date: "15 May", trips: 1150 },
  { date: "16 May", trips: 1210 },
  { date: "17 May", trips: 1230 },
  { date: "18 May", trips: 1240 },
];

function DashboardTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={demoData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#64748b" }} />
        <YAxis tick={{ fontSize: 11, fill: "#64748b" }} />
        <Tooltip />
        <Line type="monotone" dataKey="trips" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default DashboardTrendChart;