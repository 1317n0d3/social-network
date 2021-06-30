const ADD_POST = 'ADD-POST',
  UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profilePageReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        message: state.newPostText,
        likeCount: 0
      }

      state.postsData.push(newPost);
      state.newPostText = '';

      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text});

export default profilePageReducer;