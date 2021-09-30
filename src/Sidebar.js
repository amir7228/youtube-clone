import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow active title="Home" Icon={HomeIcon} />
      <SidebarRow title="Explore" Icon={ExploreIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryOutlinedIcon} />
      <SidebarRow title="History" Icon={HistoryOutlinedIcon} />
      <SidebarRow title="Watch Later" Icon={AccessTimeOutlinedIcon} />
      <SidebarRow title="Like" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Songs babel " Icon={LibraryMusicOutlinedIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;
