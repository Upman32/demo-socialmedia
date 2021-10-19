import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../../API/API"


const SET_USER_DATA = 'auth/SET_USER_DATA'

const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'





let initialState = {

userId: null,
email: null,
login: null,
    isAuth: false,
    captchaUrl: null 
}




const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            case GET_CAPTCHA_URL_SUCCESS:
           return  {
                ...state,
                ...action.data ,
           
           }
    default:
        return state
    }
}

export const setUserData =
 (userId, email, login, isAuth) => 
 ({type:SET_USER_DATA, data: {userId, email, login, isAuth}})


 export const getCaptchaUrlSuccess =
 (captchaUrl) => 
 ({type:GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}})




export const getauthUserData = (userId) => async (dispatch) => {
    let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
               dispatch(setUserData(id, email, login, true))
        }
  
}





export const login = (email, password, rememberme, captcha  ) => async (dispatch) => {
    
   
   let response = await authAPI.login(email, password, rememberme, captcha)
   
        if (response.data.resultCode === 0) {
            dispatch(getauthUserData())

         } else {
             if (response.data.resultCode === 10) {
                 dispatch(getCaptchaUrl())
             }
            let message = response.data.messages.length > 0 ? response.data.messages[0] :"someerror"
            dispatch(stopSubmit("login", {_error: message})) 
             
         }
  
}

export const getCaptchaUrl  = ( ) => async (dispatch) => {
    
   
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
        
             dispatch(getCaptchaUrlSuccess(captchaUrl))
          
   
 }

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getauthUserData())
            dispatch(setUserData(null, null, null, false))
        }
   })
}


export default AuthReducer