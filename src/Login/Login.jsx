import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Element, Frex  } from '../components/common/Forms_Control/Form_Control'
import { RequiredField, } from '../Utils/Validators'
import {connect} from "react-redux"
import {login} from '../components/redux/AuthReducer'
import { Redirect } from 'react-router'
import s from '../components/common/Forms_Control/Form_Control.module.css'




const Input = Element('input')


const LoginForm = ({handleSubmit, error}) => {

    return (

<form onSubmit={handleSubmit}>
{Frex("Email", "email", [RequiredField], Input )}
{Frex("Password", "password", [RequiredField], Input, {type: "password"}  )}   
{Frex(null, "rememberme", [], Input, {type: "checkbox"}, "remember me" )}
{error && <div className={s.formsummaryerror}>
{error}
</div>}
<div>
<button>Login</button>
</div>
</form>
)
}
const ReduxLoginForm = reduxForm({
    form:'login'
})(LoginForm)



const Login = (props) => {
const onSubmit = (formData) =>
{ props.login(formData.email, formData.password, formData.rememberme) }

    if (props.isAuth) {
    return <Redirect to={'/profile'}/>
}   
    return <div>        
<h1>LOGIN</h1>
<ReduxLoginForm onSubmit={onSubmit}/>
</div>
}

const mapStatetoProps = (state) => ({ isAuth: state.auth.isAuth })


export default connect(mapStatetoProps, {login}) (Login)