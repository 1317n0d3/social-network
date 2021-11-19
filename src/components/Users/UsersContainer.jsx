import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  follow,
  setPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/usersPageReducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import { UsersAPI } from "../../api/api";

const UsersContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(props.page),
    [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    props.toggleIsFetching(true);
    UsersAPI.getUsers(props.count, props.page).then((response) => {
      setPagesCount(Math.ceil(props.totalCount / props.count));
      props.setTotalCount(response.totalCount);
      props.setUsers(response.items);
      props.toggleIsFetching(false);
    });
  }, [currentPage]);

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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalCount,
  toggleIsFetching,
})(UsersContainer);
