import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  followActionCreator,
  setPageActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreator,
  toggleIsFetching,
  unfollowActionCreator,
} from "../../redux/friendsPageReducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";

const FriendsContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(props.page),
    [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.count}&page=${props.page}`
      )
      .then((response) => {
        setPagesCount(Math.ceil(props.totalCount / props.count));
        props.setTotalCount(response.data.totalCount);
        props.setUsers(response.data.items);
        props.toggleIsFetching(false);
      });
  }, [currentPage]);

  return (
    <>
      {props.isFetching && <Preloader />}
      <Friends
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
        users={props.users}
        setPage={props.setPage}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    page: state.friendsPage.page,
    count: state.friendsPage.count,
    totalCount: state.friendsPage.totalCount,
    isFetching: state.friendsPage.isFetching,
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
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
