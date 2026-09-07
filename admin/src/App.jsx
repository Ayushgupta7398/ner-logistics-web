import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/admin/Dashboard";
import LiveMonitoring from "./pages/admin/LiveMonitoring";
import TrafficAnalytics from "./pages/admin/TrafficAnalytics";
import RiskMonitoring from "./pages/admin/RiskMonitoring";
import Accessibility from "./pages/admin/Accessibility";
import AlertManagement from "./pages/admin/AlertManagement";
import Reports from "./pages/admin/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<Dashboard />} />

          <Route
            path="live-monitoring"
            element={<LiveMonitoring />}
          />

          <Route
            path="traffic"
            element={<TrafficAnalytics />}
          />

          <Route
            path="risk"
            element={<RiskMonitoring />}
          />

          <Route
            path="accessibility"
            element={<Accessibility />}
          />

          <Route
            path="alerts"
            element={<AlertManagement />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;