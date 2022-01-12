import { stopSubmit } from "redux-form"
import { authAPI, ResultCodeEnum, securityAPI } from "../../API/API"
import {  CommonThunkType, InferActionsTypes } from "./reduxs"


let initialState = {

    userId: null as number | null,
    email: null as  string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
}

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType | ReturnType<typeof stopSubmit>>
const AuthReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
           
        
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.data
            }
        
        default:
            return state
    }
}
export const actions = {
    setUserData :(userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
        ({ type: 'auth/SET_USER_DATA', data: { userId, email, login, isAuth } } as const),
        getCaptchaUrlSuccess:(captchaUrl: string) =>
        ({ type: 'auth/GET_CAPTCHA_URL_SUCCESS', data: { captchaUrl } } as const),

} 

    


export const getauthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()
    if (meData.resultCode === ResultCodeEnum.Success) {
        let { id, login, email } = meData.data;
        dispatch(actions.setUserData(id, email, login, true))
    }

}


export const login = (email:string, password:string, rememberme:boolean, captcha: any): ThunkType  => 
async (dispatch) => {


    let loginData = await authAPI.login(email, password, rememberme, captcha)

    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getauthUserData())

    } else {
        if (loginData.resultCode === ResultCodeEnum.CaptchaisRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "someerror"
        dispatch(stopSubmit("login", { _error: message }))

    }

}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {


    let data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url

    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))


}

export const logout = (): ThunkType => async (dispatch) => {
 let response = await authAPI.logout()
      
            if (response.data.resultCode === 0) {
                dispatch(actions.setUserData(null, null, null, false))
            }
        
}


export default AuthReducer