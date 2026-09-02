import {Navkink} from "react-router-dom";
function AdminSidebar() {
    return(
        <aside>
            <h2>NER Admin</h2>
            <nav>
                <Navkink to = "/admin">Dashboard</Navkink>
                <Navkink to = "/admin/LiveMonitoring">Live Monitoring</Navkink>
                <Navkink to ="/admin/TrafficAnalytics">Traffic Analytics</Navkink>
                <Navkink to = "/admin/RiskMonitoring">Risk Monitoring</Navkink>
                <Navkink to = "/admin/Accessibility">Accessibility</Navkink>
                <Navkink to = "/admin/AlertManagement">Alert Management</Navkink>
                <Navkink to = "/admin/Reports">Reports</Navkink>

            </nav>

        </aside>

    );
}

export default AdminSidebar;