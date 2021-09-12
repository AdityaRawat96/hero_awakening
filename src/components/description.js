import React from "react";
import { Link } from "react-router-dom";
import "./description.css";

export default class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  getProfile = () => {
    return this.props.data.filter((profile) => profile._id === this.props.id);
  };

  getTraits = (profile) => {
    console.log("profile is " + JSON.stringify(profile));
    return profile.desc.body.map((prof, index) => {
      return <li key={index}>{prof.text}</li>;
    });
  };

  start = (profile) => {
    new Audio(require("./../assets/audio/" + profile.audioPath).default).play();
  };

  render() {
    let profile = this.getProfile()[0];
    return (
      <div className="description-card">
        <div className="profile-image-container">
          <img
            src={require("./../assets/images/profiles/" + profile.img).default}
            alt="profile-image"
          />
        </div>
        <h4>{profile.desc.title}</h4>
        <button onClick={() => this.start(profile)}>Play Audio</button>
        <Link to="/player" style={{ textDecoration: "none" }}>
          <button>Select BirthSign</button>
        </Link>
        <ul>{this.getTraits(profile)}</ul>
      </div>
    );
  }
}
