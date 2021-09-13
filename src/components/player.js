import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./player.css";

export default class Player extends React.Component {
  closePlayer = () => {
    return null;
  };
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          url="videos/Inner Strength video.mp4"
          config={{
            file: {
              tracks: [
                {
                  kind: "subtitles",
                  src: "subs/sample.vtt",
                  srcLang: "en",
                  default: true,
                  mode: "showing",
                },
              ],
            },
          }}
          controls
          playing
        />
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <button className="close-button">Close</button>
        </Link>
      </div>
    );
  }
}
