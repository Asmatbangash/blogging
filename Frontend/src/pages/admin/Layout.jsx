import React from "react";
import { Navbar, Sidebar } from "../../components/Comp_index";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar
        className="navbar bg-white flex justify-between px-6"
        href={"/"}
      />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
