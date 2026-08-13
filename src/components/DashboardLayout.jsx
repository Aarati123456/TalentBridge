import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;