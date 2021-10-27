import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router";

const ProfileContainer = (props) => {
  useEffect(() => {
    const userId = props.match.params.userId ? props.match.params.userId : 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
