import { Avatar } from "@mui/material";
import React from "react";
import "./Video.css";

function Video({ img, channelImage, title, channel, views, timestamp }) {
  return (
    <div className="video">
      <img className="video__thumbnail" src={img} alt="" />
      <div className="video__info">
        <Avatar className="video__avatar" src={channelImage} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
