import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  const addPost = () => props.store.dispatch(addPostActionCreator()),
    updateNewPostText = (text) => props.store.dispatch(updatePostTextActionCreator(text));

  return (<MyPosts updateNewPostText={updateNewPostText}
                  addPost={addPost}
                  postsData={state.profilePage.postsData}
                  newPostText={state.profilePage.newPostText} />);
}

export default MyPostsContainer;