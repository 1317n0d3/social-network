import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setPageActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/friendsPageReducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    page: state.friendsPage.page,
    count: state.friendsPage.count,
    totalCount: state.friendsPage.totalCount,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followActionCreator(id));
    },
    unfollow: (id) => {
      dispatch(unfollowActionCreator(id));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setPage: (page) => {
      dispatch(setPageActionCreator(page));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountActionCreator(totalCount));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
