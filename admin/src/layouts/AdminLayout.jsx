import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-layout">

      <AdminSidebar collapsed={collapsed} />

      <main className={`admin-main ${collapsed ? "sidebar-collapsed" : ""}`}>
        <AdminHeader onToggleSidebar={() => setCollapsed(!collapsed)} />
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;