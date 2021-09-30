import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/337px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={`/search/${search}`}>
          <SearchIcon className="header__inputbutton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsNoneIcon />
        <Avatar className="header__avatar" />
      </div>
    </div>
  );
}

export default Header;
