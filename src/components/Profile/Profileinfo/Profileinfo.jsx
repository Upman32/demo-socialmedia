import Preloader from '../../common/preloader'
import c from './Profileinfo.module.css'
import React, { useState } from 'react'
import ProfileStatusHooks from './ProfileStatusHooks'
import userPhoto from '../../../images/Worker.jpg'
import ProfileDescriptionFormReduxForm from './ProfDescForm'

const Profileinfo = ({ profile, isOwner, savePhoto, status, updateStatus, saveProfile }) => {
    let [editMode, seteditMode] = useState(false)


    if (!profile) {
        return <Preloader />
    }
    const mainPhotoselectedon = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
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
const ProfileDescription = ({ profile, isOwner, goToEditMode }) => {
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
            <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={c.contact}><b>{contactTitle} </b>: {contactValue} </div>
}

export default Profileinfo