import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <div className="sidebar-logo">
        <h2>NER Admin</h2>
        <span>Logistics Intelligence</span>
      </div>

      <nav className="sidebar-nav">

        <NavLink to="/admin">
          Dashboard
        </NavLink>

        <NavLink to="/admin/live-monitoring">
          Live Monitoring
        </NavLink>

        <NavLink to="/admin/traffic">
          Traffic Analytics
        </NavLink>

        <NavLink to="/admin/risk">
          Risk Monitoring
        </NavLink>

        <NavLink to="/admin/accessibility">
          Accessibility
        </NavLink>

        <NavLink to="/admin/alerts">
          Alert Management
        </NavLink>

        <NavLink to="/admin/reports">
          Reports
        </NavLink>

      </nav>

      <div className="sidebar-footer">
        <span>Admin Panel</span>
      </div>

    </aside>
  );
}

export default AdminSidebar;