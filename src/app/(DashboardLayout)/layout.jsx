import React from "react";
import SideBar from "./_components/SideBar";
import DashNavBar from "./_components/DashNavBar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <DashNavBar />
          {/* Page content here */}
          <div className="p-4">{children}</div>
        </div>
        {/* Sidebar */}
        <SideBar />
      </div>
    </>
  );
};

export default DashboardLayout;
