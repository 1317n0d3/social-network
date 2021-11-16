import React from "react";
import { NavLink } from "react-router-dom";
import defaultAvatar from "./../../assets/images/avatar.png";
import * as axios from "axios";

const Users = ({
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
              <img
                src={u.photos.small || defaultAvatar}
                alt={u.name + " avatar"}
              />
              <span>{u.name}</span>
            </NavLink>
            {u.followed ? (
              <button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "d0362587-e54d-4d20-afac-25d227b52e1e",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        unfollow(u.id);
                      }
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "d0362587-e54d-4d20-afac-25d227b52e1e",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        follow(u.id);
                      }
                    });
                }}
              >
                Follow
              </button>
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

export default Users;
