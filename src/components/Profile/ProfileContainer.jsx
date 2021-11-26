import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router";
import { profileAPI } from "../../api/api";

const ProfileContainer = (props) => {
  useEffect(() => {
    const userId = props.match.params.userId ? props.match.params.userId : 2;
    profileAPI.getUserProfile(userId)
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
