import { stopSubmit } from "redux-form"
import { authAPI } from "../../API/API"


const SET_USER_DATA = 'auth/SET_USER_DATA'





let initialState = {

userId: null,
email: null,
login: null,
    isAuth: false
}




const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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


 
export const getauthUserData = (userId) => async (dispatch) => {
    let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
               dispatch(setUserData(id, email, login, true))
        }
  
}
export const login = (email, password, rememberme  ) => async (dispatch) => {
    
   
   let response = await authAPI.login(email, password, rememberme)
   
        if (response.data.resultCode === 0) {
            dispatch(getauthUserData())

         } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] :"someerror"
            dispatch(stopSubmit("login", {_error: message})) 
             
         }
  
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