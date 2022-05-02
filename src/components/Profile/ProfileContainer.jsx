import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router";

const ProfileContainer = ({ getUserProfile, match, profile, isAuth }) => {
  useEffect(() => {
    getUserProfile(match.params.userId ? match.params.userId : 2);
  }, [getUserProfile, match.params.userId]);

  return <Profile profile={profile} isAuth={isAuth} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(ProfileContainer)
);
