import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import Preloader from "./../common/Preloader/Preloader";

const Profile = (props) => {
  if (!props.profile) return <Preloader />;

  return (
    <main>
      <div className={s.wallpaper}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="image: mountain"
        ></img>
      </div>
      <div>
        <img src={props.profile.photos.large} />
        profile info
      </div>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
