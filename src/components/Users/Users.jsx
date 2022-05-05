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
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
      {
        /* pages.map((p) => {
          return (
            <span
              key={p}
              // className={currentPage === p ? "selected" : ""}
              style={currentPage === p ? { fontWeight: 900, fontSize: 60 } : {}}
              onClick={(e) => {
                setCurrentPage(p);
                setPage(p);
              }}
            >
              {p + " "}
            </span>
          );
        }) */
        <>
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
          <span
            key={pages.length}
            // className={currentPage === p ? "selected" : ""}
            style={
              currentPage === pages.length
                ? { fontWeight: 900, fontSize: 60 }
                : {}
            }
            onClick={(e) => {
              setCurrentPage(pages.length);
              setPage(pages.length);
            }}
          >
            {pages.length}
          </span>
        </>
      }
    </main>
  );
};

export default Users;
