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

  const UserCard = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <main>
      <UserCard>
        <ProfileImage src={props.profile.photos.large} />
        <span>{props.profile.fullName}</span>
      </UserCard>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
