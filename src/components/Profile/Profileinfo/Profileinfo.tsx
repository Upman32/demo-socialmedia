import Preloader from '../../common/preloader'
import c from './Profileinfo.module.css'
import React, { ChangeEvent, useState } from 'react'
import ProfileStatusHooks from './ProfileStatusHooks'
import userPhoto from '../../common/images/Worker.jpg'
import ProfileDescriptionFormReduxForm from './ProfDescForm'
import { ContactsType, ProfileType } from '../../../Types/types'

type PropsType = {
    profile: ProfileType | null,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    status: string,
    updateStatus: (status: string) => void,
    saveProfile: (profile: ProfileType) => Promise<any>
}
const Profileinfo: React.FC<PropsType> = ({ profile, isOwner, savePhoto, status, updateStatus, saveProfile }) => {
    let [editMode, seteditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }
    const mainPhotoselectedon = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(() => {
            seteditMode(false)
        })

    }

    return (

        <div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={c.mainPhoto} />
                {isOwner && <input type="file" onChange={mainPhotoselectedon} />}

                {editMode
                    ? <ProfileDescriptionFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileDescription goToEditMode={() => { seteditMode(true) }} profile={profile} isOwner={isOwner} />}
                <ProfileStatusHooks status={status} updateStatus={updateStatus} />
            </div>

        </div>
    )
}

type ProfileDescType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileDescription: React.FC<ProfileDescType> = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div> <button onClick={goToEditMode} >EDIT</button></div>}
        <div>
            <b>Fullname</b> {profile.fullName}
        </div>
        <div>
            <b> Looking for a job</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob && <div>
            <b>Skills</b> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b> About me </b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b> : {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
            })}
        </div>
    </div>
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
    return <div className={c.contact}><b>{contactTitle} </b>: {contactValue} </div>
}

export default Profileinfo