import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Element, Frex } from '../components/common/Forms_Control/Form_Control'
import { RequiredField, } from '../Utils/Validators/Validate'
import { connect } from "react-redux"
import { login } from '../components/redux/AuthReducer'
import { Redirect } from 'react-router'
import s from '../components/common/Forms_Control/Form_Control.module.css'
import { AppstateType } from '../components/redux/reduxs'

type LoginFormOwnProps = {
captchaUrl: string | null
}


const Input = Element('input')


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps>& LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {

    return (

        <form onSubmit={handleSubmit}>
            {Frex("Email", "email", [RequiredField], Input)}
            {Frex("Password", "password", [RequiredField], Input, { type: "password" })}
            {Frex(null, "rememberme", [], Input, { type: "checkbox" }, "remember me")}


            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && Frex("Symbols form image", "captcha", [RequiredField], Input)}

            {error && <div className={s.formsummaryerror}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

type mapStatetoPropsType = {
    captchaUrl:string | null
isAuth:boolean
}
type mapDispatchtoPropsType = {
    login:(email:string, password:string, rememberme:boolean, captcha: any) => void

}
type LoginFormValuesType = {
    captcha:string
    email:string
    password:string
    rememberme:boolean

}

const Login: React.FC<mapStatetoPropsType & mapDispatchtoPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => { props.login(formData.email, formData.password, formData.rememberme, formData.captcha) }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStatetoProps = (state: AppstateType): mapStatetoPropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStatetoProps, { login })(Login)