import React from "react";

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
      <div className="card">
        <button onClick={() => this.start(profile)}>Play Audio</button>
        <img
          src={require("./../assets/images/profiles/" + profile.img).default}
          alt="img"
        />
        <br />
        <h4>{profile.title}</h4>
        <ul>{this.getTraits(profile)}</ul>
      </div>
    );
  }
}
