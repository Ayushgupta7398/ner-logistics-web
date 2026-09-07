import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-layout">

      <AdminSidebar collapsed={collapsed} />

      <button
        className={`sidebar-edge-toggle ${collapsed ? "collapsed" : ""}`}
        onClick={() => setCollapsed(!collapsed)}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect y="3" width="16" height="2" rx="1" fill="currentColor" />
          <rect y="7" width="16" height="2" rx="1" fill="currentColor" />
          <rect y="11" width="16" height="2" rx="1" fill="currentColor" />

        </svg>
      </button>

      <main className={`admin-main ${collapsed ? "sidebar-collapsed" : ""}`}>
        <AdminHeader />
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;