import React from "react";
import "./SidebarRow.css";

function SidebarRow({ active, Icon, title }) {
  return (
    <div className={`sidebarRow ${active && "active"}`}>
      <Icon className="icon" />
      <div className="text">{title}</div>
    </div>
  );
}

export default SidebarRow;
