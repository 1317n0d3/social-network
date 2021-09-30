import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updatePostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       { store => {
//           let state = store.getState();

//           const addPost = () => store.dispatch(addPostActionCreator()),
//             updateNewPostText = (text) => store.dispatch(updatePostTextActionCreator(text));

//           return (
//             <MyPosts updateNewPostText={updateNewPostText}
//               addPost={addPost}
//               postsData={state.profilePage.postsData}
//               newPostText={state.profilePage.newPostText} />
//           );
//         }
//       }
//     </StoreContext.Consumer>
//   );
// }

export default MyPostsContainer;