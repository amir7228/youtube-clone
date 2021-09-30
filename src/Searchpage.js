import React from "react";
import "./Searchpage.css";
import TuneIcon from "@mui/icons-material/Tune";
import Channelrow from "./Channelrow";
import Videorow from "./Videorow";

function Searchpage() {
  return (
    <div className="searchpage ">
      <div className="searchpage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <Channelrow
        img="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        subs="1.02M"
        verified
        noOfVideo={382}
        description="You can find awesome programming lessons here!,You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />
      <Videorow />
    </div>
  );
}

export default Searchpage;
