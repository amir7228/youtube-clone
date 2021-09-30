import { Avatar } from "@mui/material";
import React from "react";
import "./Channelrow.css";
import VerifiedIcon from "@mui/icons-material/Verified";
function Channelrow({ img, channel, subs, verified, noOfVideo, description }) {
  return (
    <div className="channelrow">
      <Avatar src={img} className="channelrow__logo" />
      <div className="channelrow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs}subscribes.{noOfVideo}videos
        </p>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default Channelrow;
