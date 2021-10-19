import React, { useEffect } from "react";
import * as axios from "axios";

const Friends = (props) => {
  useEffect(() => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          debugger;
          props.setUsers(response.data.items);
        });
    }
  });

  return (
    <main>
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
