import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../../API/API"


const SET_USER_DATA = 'auth/SET_USER_DATA'

const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'





let initialState = {

    userId: null as number | null,
    email: null as  string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
}

export type initialStateType = typeof initialState


const AuthReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
           
        
        case GET_CAPTCHA_URL_SUCCESS:
            return {
               
                ...state,
                ...action.data,
                
            }
        
        default:
            return state
    }
}
type UserDataActionType = {
    userId: number | null,
    email: string | null
    login: string | null,
    isAuth: boolean
}
type SetUserDataActiontype = {
    type: typeof SET_USER_DATA,
    data: UserDataActionType
}

export const setUserData =
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActiontype =>
        ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })


    

    type getCaptchaUrlSuccessActiontype = {
        type: typeof GET_CAPTCHA_URL_SUCCESS,
        data: { captchaUrl: string}
    }
    
export const getCaptchaUrlSuccess =
    (captchaUrl: string):getCaptchaUrlSuccessActiontype =>
        ({ type: GET_CAPTCHA_URL_SUCCESS, data: { captchaUrl } })




export const getauthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUserData(id, email, login, true))
    }

}





export const login = (email:string, password:string, rememberme:boolean, captcha: any) => 
async (dispatch: any) => {


    let response = await authAPI.login(email, password, rememberme, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getauthUserData())

    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "someerror"
        dispatch(stopSubmit("login", { _error: message }))

    }

}

export const getCaptchaUrl = () => async (dispatch: any) => {


    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))


}

export const logout = () => async (dispatch: any) => {
 let response = await authAPI.logout()
      
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        
}


export default AuthReducer