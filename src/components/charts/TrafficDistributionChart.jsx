import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

// TODO: BACKEND/API INTEGRATION
// Replace demo distribution with backend response.
//
// Demo API example:
// GET /api/admin/traffic/distribution
//
// Expected response:
// { "low": 30, "moderate": 42, "high": 28 }
//
// Data source note: aligns with trafficLevel field
// ("low" | "moderate" | "high") from Trip / RouteResponse contract.
const demoData = [
  { name: "Low", value: 30, color: "#16a34a" },
  { name: "Moderate", value: 42, color: "#f59e0b" },
  { name: "High", value: 28, color: "#ef4444" },
];

function TrafficDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={demoData}
          dataKey="value"
          nameKey="name"
          innerRadius={55}
          outerRadius={85}
          paddingAngle={2}
        >
          {demoData.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          formatter={(value) => {
            const item = demoData.find((d) => d.name === value);
            return `${value} (${item.value}%)`;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default TrafficDistributionChart;