import React from "react";
import "./profileCard.css";

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="card"
        onClick={() => {
          this.props.showDesc(this.props.id);
        }}
      >
        <img
          id="thumbnailImage"
          src={
            require("./../assets/images/profiles/" + this.props.thumbnail)
              .default
          }
          alt="img"
        />
        <span>{this.props.name}</span>
      </div>
    );
  }
}
