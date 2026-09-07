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

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      

    </aside>
  );
}

export default AdminSidebar;