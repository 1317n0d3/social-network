const ADD_POST = "ADD-POST",
  UPDATE_POST_TEXT = "UPDATE-POST-TEXT",
  SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postsData: [
    { message: "Hello", likeCount: 0 },
    { message: "My first post", likeCount: 10 },
  ],
  newPostText: "",
  profile: null,
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        message: state.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profilePageReducer;
