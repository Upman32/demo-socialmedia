import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Element, Form } from '../../common/Forms_Control/Form_Control';
import c from './Profileinfo.module.css'
import s from '../../common/Forms_Control/Form_Control.module.css'
import { ProfileType } from '../../../Types/types';


const Input = Element('input')
const Textarea = Element('textarea')

type Propstype = {
    profile: ProfileType
}
const ProfileDescriptionForm: React.FC<InjectedFormProps<ProfileType, Propstype> & Propstype> = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div> <button>save</button></div>
        {error && <div className={s.formsummaryerror}>
            {error}
        </div>}
        <div>
            <b>Fullname</b>                     {Form("Nickname", "fullName", [], Input)}
        </div>
        <div>
            <b> Looking for a job</b>           {Form("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            <b>Skills</b>                       {Form("My prof. skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b> About me </b>                   {Form("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={c.contacts}>
                    <b>{key}:{Form(key, "contacts." + key, [], Input)} </b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDescriptionFormReduxForm = reduxForm<ProfileType, Propstype>({ form: 'edit-profile' })(ProfileDescriptionForm)

export default ProfileDescriptionFormReduxForm