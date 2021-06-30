import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const posts = props.postsData.map( p => <Post message={p.message} likeCount={p.likeCount} />);

  const sendPost = () => props.dispatch(addPostActionCreator()),
    onPostChange = (e) => props.dispatch(updatePostTextActionCreator(e.target.value));

  return (
    <div>
      My posts
      <div>
        <textarea value={props.newPostText} onChange={onPostChange} />
        <button onClick={ sendPost } >Send</button>
      </div>
      { posts }
    </div>
  );
}

export default MyPosts;