import React from "react";
import { Navbar, Sidebar } from "../../components/Comp_index";
import DashbaordOverview from "./DashbaordOverview";

function Layout() {
  return (
    <div>
      <Navbar className="navbar bg-white flex justify-between px-6" />
      <div className="flex">
        <Sidebar />
        <DashbaordOverview />
      </div>
    </div>
  );
}

export default Layout;
