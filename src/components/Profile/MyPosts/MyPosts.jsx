import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const posts = props.postsData.map( p => <Post message={p.message} likeCount={p.likeCount} />),
    postRef = React.createRef();

  const sendPost = () => {
    alert(postRef.current.value);
  };

  return (
    <div>
      My posts
      <div>
        <textarea ref={ postRef }></textarea>
        <button onClick={ sendPost } >Send</button>
      </div>
      { posts }
    </div>
  );
}

export default MyPosts;