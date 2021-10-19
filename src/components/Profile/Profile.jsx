
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Profileinfo from './Profileinfo/Profileinfo'


const Profile = (props) => {

  return (
    <div>
      <Profileinfo isOwner={props.isOwner} profile={props.profile} status={props.status}
        updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
