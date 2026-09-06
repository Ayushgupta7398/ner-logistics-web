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
        {collapsed ? "›" : "‹"}
      </button>

      <main className={`admin-main ${collapsed ? "sidebar-collapsed" : ""}`}>
        <AdminHeader />
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;