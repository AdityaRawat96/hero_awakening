import React from "react";
import "./profileCard.css";

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
      className="profile-card"
      onClick={() => {
        this.props.showDesc(this.props.id);
      }}
      >
      <span className="profile-title">{this.props.name}</span>
      <img
      className="profile-thumbnail"
      id="thumbnailImage"
      src={ require("./../assets/images/profiles/" + this.props.thumbnail).default }
      alt="profile-image"
      />
      <div className="profile-border"></div>
      </div>
    );
  }
}
