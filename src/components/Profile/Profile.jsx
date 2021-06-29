import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
      <main>
        <div className={s.wallpaper}>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="image: mountain"></img>
        </div>
        <div>
          ava
          profile info
        </div>
        <MyPosts postsData={props.profilePage.postsData}
                  newPostText={props.profilePage.newPostText}
                  addPost={props.addPost}
                  updatePostText={props.updatePostText} />
      </main>
  );
}

export default Profile;