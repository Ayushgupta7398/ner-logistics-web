import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/live-monitoring", label: "Live Monitoring" },
  { to: "/admin/traffic", label: "Traffic Analytics" },
  { to: "/admin/risk", label: "Risk Monitoring" },
  { to: "/admin/accessibility", label: "Accessibility" },
  { to: "/admin/alerts", label: "Alert Management" },
  { to: "/admin/reports", label: "Reports" },
];

function AdminSidebar({ collapsed }) {
  return (
    <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>

      <div className="sidebar-logo">
        <h2>NER PLATFORM</h2>
        <span>Logistics Intelligence</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span>◉</span>
        <span>User Mode</span>
      </div>

    </aside>
  );
}

export default AdminSidebar;