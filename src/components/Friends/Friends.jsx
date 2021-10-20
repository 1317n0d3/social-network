import React, { useEffect, useState } from "react";
import * as axios from "axios";

const Friends = (props) => {
  const [page, setPage] = useState(props.page),
    [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.count}&page=${props.page}`
      )
      .then((response) => {
        setPagesCount(Math.ceil(props.totalCount / props.count));
        props.setTotalCount(response.data.totalCount);
        props.setUsers(response.data.items);
      });
  }, [page]);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <main>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={props.page === p ? "selected" : ""}
            onClick={(e) => {
              setPage(p);
              props.setPage(p);
            }}
          >
            {p + " "}
          </span>
        );
      })}
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>{u.name}</span>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>Follow</button>
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Friends;
