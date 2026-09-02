import {Outlet} from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

function AdminLayout() {
    return(
        <div>
            <AdminSidebar/>
            <main>
                <Outlet/>
            </main>
        </div>

    );
}

export default AdminLayout;