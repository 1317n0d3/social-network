import React from "react";

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
      {users.map((u) => {
        return (
          <div key={u.id}>
            <span>{u.name}</span>
            {u.followed ? (
              <button onClick={() => unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => follow(u.id)}>Follow</button>
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Friends;
