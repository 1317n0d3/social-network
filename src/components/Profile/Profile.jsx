import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
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
        <MyPostsContainer store={props.store} />
      </main>
  );
}

export default Profile;