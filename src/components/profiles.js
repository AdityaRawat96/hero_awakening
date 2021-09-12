import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Description from "./description";
import ProfileCard from "./profileCard";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileData: [], id: "" };
    this.loadProfile();
  }

  loadProfile = () => {
    axios.get("http://localhost:8000/getProfile").then((response, err) => {
      if (!err) {
        console.log("response " + JSON.stringify(response));
        this.setState({
          profileData: response.data.data,
          id: response.data.data[0]._id,
        });
        this.showDesc("");
      }
    });
  };

  showDesc = (id) => {
    if (id === "") id = this.state.id;
    let description = <Description data={this.state.profileData} id={id} />;
    this.setState({
      ...this.state.profileData,
      id: id,
      description: description,
    });
  };

  render() {
    console.log("data " + this.state.profileData);
    let profileCards = this.state.profileData.map((profile) => {
      return (
        <div>
        <ProfileCard
        name={profile.name}
        thumbnail={profile.thumbnail}
        id={profile._id}
        showDesc={(id) => this.showDesc(id)}
        />
        </div>
      );
    });
    return (
      <div className="content-section content-main-profile">
      <div className="profile-container">
      {profileCards}
      </div>
      <div className="profile-description">
      <Link to="/home" className="backButton">
      <img src={require("./../assets/images/backbutton-opacity70.png").default} />
      </Link>
      {this.state.description}
      </div>
      </div>
    );
  }
}
