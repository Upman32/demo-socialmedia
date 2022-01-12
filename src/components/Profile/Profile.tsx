
import React from 'react';
import { ProfileType } from '../../Types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Profileinfo from './Profileinfo/Profileinfo'

type PropsType = {
  profile: ProfileType | null,
  isOwner: boolean,
  savePhoto: (file: File) => void,
  status: string,
  updateStatus: (status: string) => void,
  saveProfile: (profile: ProfileType) => Promise<any>
}
const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <Profileinfo isOwner={props.isOwner} profile={props.profile} status={props.status}
        updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
