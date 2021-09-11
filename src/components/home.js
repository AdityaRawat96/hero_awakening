import React from "react";
import playUp from "./../assets/images/play-constellation.png";
import playDown from "./../assets/images/play-constellation-glow.png";
import settingsUp from "./../assets/images/settings-constellation.png";
import settingsDown from "./../assets/images/settings-constellation-glow.png";
import profileUp from "./../assets/images/profile-constellation.png";
import profileDown from "./../assets/images/profile-constellation-glow.png";

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
      <div>
        <div className="content">
          <div className="content-section content-top"></div>
          <div className="content-middle">
            <div className="content-section content-left"></div>
            <div className="content-section content-main">
              <span className="heading-span">Hero's Awakening</span>
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
            <div className="content-section content-right"></div>
          </div>
          <div className="content-section content-bottom"></div>
        </div>
      </div>
    );
  }
}
