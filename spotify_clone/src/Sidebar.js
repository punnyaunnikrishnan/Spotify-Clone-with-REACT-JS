import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption option="Home" />
      <SidebarOption option="Search" />
      <SidebarOption option="Your Library" />
    </div>
  );
}

export default Sidebar;
