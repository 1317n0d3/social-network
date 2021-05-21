import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Send</button>
      </div>
      <Post message="Hello" likeCount="0"/>
      <Post message="My first post" likeCount="10"/>
    </div>
  );
}

export default MyPosts;