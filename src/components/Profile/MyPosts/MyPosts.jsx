import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const posts = props.postsData.map( p => <Post message={p.message} likeCount={p.likeCount} />),
    postRef = React.createRef();

  // const sendPost = () => props.addPost(postRef.current.value),
  //   onPostChange = () => props.updatePostText(postRef.current.value);

  const sendPost = () => props.dispatch({type: 'ADD-POST', postMessage: postRef.current.value}),
    onPostChange = () => props.dispatch({type: 'UPDATE-POST-TEXT', text: postRef.current.value});

  return (
    <div>
      My posts
      <div>
        <textarea ref={ postRef } value={props.newPostText} onChange={onPostChange} />
        <button onClick={ sendPost } >Send</button>
      </div>
      { posts }
    </div>
  );
}

export default MyPosts;