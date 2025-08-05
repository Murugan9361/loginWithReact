import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "200px", marginTop: "60px", padding: "20px", width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
