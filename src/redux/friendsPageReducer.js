const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 0,
  isFetching: true,
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
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, page: action.page };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const followAC = (id) => ({
  type: FOLLOW,
  id,
});
export const unfollowAC = (id) => ({
  type: UNFOLLOW,
  id,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
export const setPageAC = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
export const setTotalCountAC = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default friendsPageReducer;
