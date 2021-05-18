import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
      <main>
        <div className={s.wallpaper}>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="image: mountain"></img>
        </div>
        <div>
          ava
          profile info
        </div>
        <div>
          My posts
          <div>
            Your News
            Send
          </div>
          <div>
            Post1
          </div>
          <div>
            Post2
          </div>
        </div>
      </main>
  );
}

export default Profile;