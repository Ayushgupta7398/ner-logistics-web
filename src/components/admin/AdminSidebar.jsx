import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      {/* sidebar brand */}

      <div className="sidebar-logo">
        <h2>NER PLATFORM</h2>
        <span>Logistics Intelligence</span>
      </div>


      {/* admin navigation*/}

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

        <NavLink to="/admin/settings">
          Settings
        </NavLink>

      </nav>


      {/* sidebar footer*/}

      <div className="sidebar-footer">
        <span>◉</span>
        <span>User Mode</span>
      </div>

    </aside>
  );
}

export default AdminSidebar;