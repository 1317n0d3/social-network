import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import Preloader from "./../common/Preloader/Preloader";

const Profile = (props) => {
  if (!props.profile) return <Preloader />;

  return (
    <main>
      <div>
        <img src={props.profile.photos.large} />
        profile info
      </div>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
