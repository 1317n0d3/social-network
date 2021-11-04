import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "./../common/Preloader/Preloader";
import styled from "styled-components";

const Profile = (props) => {
  if (!props.profile) return <Preloader />;

  const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
  `;

  return (
    <main>
      <div>
        <ProfileImage src={props.profile.photos.large} />
      </div>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
