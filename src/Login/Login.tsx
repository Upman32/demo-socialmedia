import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Element, Form } from '../components/common/Forms_Control/Form_Control'
import s from '../components/common/Forms_Control/Form_Control.module.css'
import { login } from '../components/redux/AuthReducer'
import { AppstateType } from '../components/redux/reduxs'
import { RequiredField } from '../Utils/Validators/Validate'

type LoginFormOwnProps = {
    captchaUrl: string | null
}
const Input = Element('input')
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({ handleSubmit, error, captchaUrl }) => {
        return (
            <form onSubmit={handleSubmit}>
                {Form("Email", "email", [RequiredField], Input)}
                {Form("Password", "password", [RequiredField], Input, { type: "password" })}
                {Form(null, "rememberme", [], Input, { type: "checkbox" }, "Remember me")}
                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && Form("Symbols form image", "captcha", [RequiredField], Input)}
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

type LoginFormValuesType = {
    captcha: string
    email: string
    password: string
    rememberme: boolean
}

export const Login: React.FC = () => {
    const captchaUrl = useSelector((state: AppstateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppstateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => { dispatch(login(formData.email, formData.password, formData.rememberme, formData.captcha)) }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
}
