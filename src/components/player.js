import React from "react";
import ReactPlayer from "react-player";

export default class Player extends React.Component {
  render() {
    return (
      <ReactPlayer
        url="videos/Inner Strength video.mp4"
        controls
        playing
      ></ReactPlayer>
    );
  }
}
