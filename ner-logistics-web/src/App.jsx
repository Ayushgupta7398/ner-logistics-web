
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "./pages/User/Landingpage/Landingpage";
import LoginPage from "./pages/User/LoginPage/LoginPage";
import HomeDashboard from "./pages/User/HomeDashboard/HomeDashboard";
import RoutePlanner from "./pages/User/RoutePlanner/RoutePlanner";
import RouteResults from "./pages/User/RouteResults/RouteResults";
import RouteDetails from "./pages/User/RouteDetails/RouteDetails";
import LiveTrip from "./pages/User/LiveTrip/LiveTrip";
import FleetTracking from "./pages/User/FleetTracking/FleetTracking";
import TrafficOverview from "./pages/User/TrafficOverview/TrafficOverview";
import Accessibility from "./pages/User/Accessibility/Accessibility";
import RiskMonitoring from "./pages/User/RiskMonitoring/RiskMonitoring";
import Alerts from "./pages/User/Alerts/Alerts";
import Analytics from "./pages/User/Analytics/Analytics";
import Reports from "./pages/User/Reports/Reports";
import Settings from "./pages/User/Settings/Settings";


function SignupPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Sign Up</h1>

        <p>
          Signup screen will be implemented next.
        </p>

        <a href="/login">
          Back to Login
        </a>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>NER Dashboard</h1>

        <p>
          Dashboard will be implemented next.
        </p>
      </div>
    </div>
  );
}

function ForgotPasswordPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Forgot Password</h1>

        <p>
          Password recovery screen will be
          implemented next.
        </p>

        <a href="/login">
          Back to Login
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>

      {/* SCREEN 1 */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* SCREEN 2 */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      {/* FUTURE */}
      <Route
        path="/signup"
        element={<SignupPage />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

     <Route
  path="/dashboard"
  element={<HomeDashboard />}
/>
     {/* SCREEN 4 */}
<Route
  path="/route-planner"
  element={<RoutePlanner />}
/>
{/* SCREEN 5 */}
<Route
  path="/route-results"
  element={<RouteResults />}
/>
{/* SCREEN 6 */}
<Route
  path="/route-details"
  element={<RouteDetails />}
/>
{/* SCREEN 7 */}
<Route
  path="/live-map"
  element={<LiveTrip />}
/>
{/* SCREEN 8 - FLEET TRACKING */}
<Route
  path="/tracking"
  element={<FleetTracking />}
/>
{/* SCREEN 9 - TRAFFIC OVERVIEW */}
<Route
  path="/traffic"
  element={<TrafficOverview />}
/>
{/* SCREEN 10 - ACCESSIBILITY */}
<Route
  path="/accessibility"
  element={<Accessibility />}
/>
{/* SCREEN 11 - RISK MONITORING */}
<Route
  path="/risk-monitoring"
  element={<RiskMonitoring />}
/>
<Route
  path="/alerts"
  element={<Alerts />}
/>
<Route
  path="/analytics"
  element={<Analytics />}
/>
<Route
  path="/reports"
  element={<Reports />}
/>
<Route
  path="/settings"
  element={<Settings />}
/>
      {/* UNKNOWN URL */}
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
}