import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
  TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 0,
  isFetching: true,
  followingProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
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
    case TOGGLE_FOLLOWING_PROGRESS: {
      return { ...state, followingProgress: action.isFetching ?
        [...state.followingProgress, action.id] :
        state.followingProgress.filter(id => id !== action.id)
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (id) => ({
  type: FOLLOW,
  id,
});
export const unfollowSuccess = (id) => ({
  type: UNFOLLOW,
  id,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
export const setTotalCount = (totalCount = 10) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, id) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  id,
});

export const getUsers = (count, page) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(count, page)
    .then((response) => {
      dispatch(setTotalCount(response.totalCount));
      dispatch(setUsers(response.items));
      dispatch(toggleIsFetching(false));
    });
}

export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  usersAPI.unfollowUser(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId))
    });
}

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  usersAPI.followUser(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId))
    });
}

export default usersPageReducer;
