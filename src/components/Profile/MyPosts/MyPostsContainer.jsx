import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profilePageReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      { store => {
          let state = store.getState();

          const addPost = () => store.dispatch(addPostActionCreator()),
            updateNewPostText = (text) => store.dispatch(updatePostTextActionCreator(text));

          return (
            <MyPosts updateNewPostText={updateNewPostText}
              addPost={addPost}
              postsData={state.profilePage.postsData}
              newPostText={state.profilePage.newPostText} />
          );
        }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;