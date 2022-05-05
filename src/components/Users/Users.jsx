import React from "react";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import defaultAvatar from "./../../assets/images/avatar.png";

const Users = ({
  pagesCount,
  currentPage,
  setCurrentPage,
  setPage,
  users,
  unfollow,
  follow,
  followingProgress,
  toggleFollowingProgress,
  isAuth,
}) => {
  const pages = [1, pagesCount];

  // for (let i = currentPage - 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  // if(currentPage !== 1 && currentPage !== pagesCount) {

  // }

  if (!isAuth) return <Redirect to={"/login"} />;

  console.log(currentPage);

  return (
    <main>
      {users.map((u) => {
        return (
          <div key={u.id}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small || defaultAvatar}
                alt={u.name + " avatar"}
              />
              <span>{u.name}</span>
            </NavLink>
            {u.followed ? (
              <button
                disabled={followingProgress.some((id) => id === u.id)}
                onClick={() => {
                  unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingProgress.some((id) => id === u.id)}
                onClick={() => {
                  follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        );
      })}

      <span
        key={1}
        // className={currentPage === p ? "selected" : ""}
        style={currentPage === 1 ? { fontWeight: 900, fontSize: 60 } : {}}
        onClick={(e) => {
          setCurrentPage(1);
          setPage(1);
        }}
      >
        1
      </span>
      {currentPage !== 1 && currentPage !== pagesCount ? (
        <span
          key={currentPage}
          // className={currentPage === p ? "selected" : ""}
          style={{ fontWeight: 900, fontSize: 60 }}
          onClick={(e) => {
            setCurrentPage(currentPage);
            setPage(currentPage);
          }}
        >
          {currentPage}
        </span>
      ) : (
        <></>
      )}
      <span
        key={pagesCount}
        // className={currentPage === p ? "selected" : ""}
        style={
          currentPage === pagesCount ? { fontWeight: 900, fontSize: 60 } : {}
        }
        onClick={(e) => {
          setCurrentPage(pagesCount);
          setPage(pagesCount);
        }}
      >
        {pagesCount}
      </span>
    </main>
  );
};

export default Users;
