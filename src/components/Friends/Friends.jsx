import React from "react";
import { NavLink } from "react-router-dom";

const Friends = ({
  pagesCount,
  page,
  setCurrentPage,
  setPage,
  users,
  unfollow,
  follow,
}) => {
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <main>
      {users.map((u) => {
        return (
          <div key={u.id}>
            <NavLink to={"/profile/" + u.id}>
              <span>{u.name}</span>
            </NavLink>
            {u.followed ? (
              <button onClick={() => unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => follow(u.id)}>Follow</button>
            )}
          </div>
        );
      })}
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={page === p ? "selected" : ""}
            onClick={(e) => {
              setCurrentPage(p);
              setPage(p);
            }}
          >
            {p + " "}
          </span>
        );
      })}
    </main>
  );
};

export default Friends;
