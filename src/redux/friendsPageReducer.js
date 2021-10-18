const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const friendsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    default:
      return state;
  }
};

export const followActionCreator = (id) => ({
  type: FOLLOW,
  id,
});
export const unfollowActionCreator = (id) => ({
  type: UNFOLLOW,
  id,
});
export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

export default friendsPageReducer;
