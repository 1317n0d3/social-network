import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  followAC,
  setPageAC,
  setTotalCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC,
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
      dispatch(followAC(id));
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setPage: (page) => {
      dispatch(setPageAC(page));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
