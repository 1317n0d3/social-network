import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const posts = props.postsData.map( p => <Post message={p.message} likeCount={p.likeCount} />);
  
  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        <button onClick={ onAddPost } >Send</button>
      </div>
      { posts }
    </div>
  );
}

export default MyPosts;