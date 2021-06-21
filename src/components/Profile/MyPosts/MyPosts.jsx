import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const posts = props.postsData.map( p => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Send</button>
      </div>
      { posts }
    </div>
  );
}

export default MyPosts;