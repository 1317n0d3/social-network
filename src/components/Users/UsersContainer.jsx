import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  follow,
  setPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersPageReducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

const UsersContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(props.page),
    [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    props.getUsers(props.count, props.page)
    setPagesCount(Math.ceil(props.totalCount / props.count));
  }, [currentPage, props.totalCount, props]);

  return (
    <>
      {props.isFetching && <Preloader />}
      <Users
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
        users={props.users}
        setPage={props.setPage}
        follow={props.follow}
        unfollow={props.unfollow}
        followingProgress={props.followingProgress}
        toggleFollowingProgress={props.toggleFollowingProgress}
      />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    page: state.usersPage.page,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
