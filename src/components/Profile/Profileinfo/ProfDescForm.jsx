import React from 'react';
import { reduxForm } from 'redux-form';
import { Element, Frex } from '../../common/Forms_Control/Form_Control';
import c from './Profileinfo.module.css'
import s from '../../common/Forms_Control/Form_Control.module.css'


const Input = Element('input')
const Textarea = Element('textarea')


const ProfileDescriptionForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
    <div> <button>save</button></div>
    {error && <div className={s.formsummaryerror}>
{error}
</div>}
  <div>
      <b>Fullname</b>                       {Frex("Nickname", "fullName", [], Input)}
  </div>
  <div>
      <b> Looking for a job</b>            {Frex("","lookingForAJob", [], Input, {type: "checkbox"} )}
  </div>
  <div>
      <b>Skills</b>                       {Frex("My prof. skills","lookingForAJobDescription", [], Textarea)}
  </div>
  <div>
      <b> About me </b>{Frex("About me","aboutMe", [], Textarea)}
  </div>
  <div>
      <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={c.contacts}>
              <b>{key}:{Frex(key, "contacts." +key , [], Input)} </b>
           </div>
      })}
  </div>
</form>
}

const ProfileDescriptionFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDescriptionForm)

export default ProfileDescriptionFormReduxForm