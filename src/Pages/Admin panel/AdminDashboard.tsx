import React from 'react';
import AdminPanelSideBar from "../../Layout/AdminPanelSideBar";
import {Outlet} from "react-router-dom";
function AdminDashboard() {
    return (
        <>
        <AdminPanelSideBar/>
        <Outlet />
        </>
    );
}

export default AdminDashboard;