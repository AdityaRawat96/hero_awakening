import React from "react";
import playUp from "./../assets/images/play-constellation.png";
import playDown from "./../assets/images/play-constellation-glow.png";
import settingsUp from "./../assets/images/settings-constellation.png";
import settingsDown from "./../assets/images/settings-constellation-glow.png";
import profileUp from "./../assets/images/profile-constellation.png";
import profileDown from "./../assets/images/profile-constellation-glow.png";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: true,
      settingsState: true,
      profileState: true,
    };
  }
  render() {
    return (
      <div className="content-section content-main">
        <span className="heading-span">Hero's Awakening</span>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div
            className="menu-item"
            onMouseOver={() =>
              this.setState({
                ...this.state,
                playState: false,
              })
            }
            onMouseOut={() =>
              this.setState({
                ...this.state,
                playState: true,
              })
            }
          >
            <span className="menu-icon">
              {this.state.playState && <img src={playUp} alt="img" />}
              {!this.state.playState && <img src={playDown} alt="img" />}
            </span>
            <span className="menu-title">Play</span>
          </div>
        </Link>
        <div
          className="menu-item"
          onMouseOver={() =>
            this.setState({
              ...this.state,
              settingsState: false,
            })
          }
          onMouseOut={() =>
            this.setState({
              ...this.state,
              settingsState: true,
            })
          }
        >
          <span className="menu-icon">
            {this.state.settingsState && (
              <img src={settingsUp} alt="img" />
            )}
            {!this.state.settingsState && (
              <img src={settingsDown} alt="img" />
            )}
          </span>
          <span className="menu-title">Settings</span>
        </div>
        <div
          className="menu-item"
          onMouseOver={() =>
            this.setState({
              ...this.state,
              profileState: false,
            })
          }
          onMouseOut={() =>
            this.setState({
              ...this.state,
              profileState: true,
            })
          }
        >
          <span className="menu-icon">
            {this.state.profileState && <img src={profileUp} alt="img" />}
            {!this.state.profileState && (
              <img src={profileDown} alt="img" />
            )}
          </span>
          <span className="menu-title">Profile</span>
        </div>
      </div>
    );
  }
}
