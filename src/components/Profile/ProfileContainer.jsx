import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profilePageReducer";

const ProfileContainer = (props) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);

  return <Profile {...props} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
