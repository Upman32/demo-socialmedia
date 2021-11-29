import { ThunkAction } from "redux-thunk"
import { getauthUserData } from "./AuthReducer"
import { AppstateType } from "./reduxs"


const SET_INITIALIZED = 'SET_INITIALIZED'



type initialStatetype = {
    initialized: boolean
}

let initialState: initialStatetype = {
initialized: false,

}




const AppReducer = (state = initialState, action: setInitializedActiontype): initialStatetype => {
    switch (action.type) {
        case SET_INITIALIZED:
           return  {
                ...state,
                initialized: true ,
          
    }
    default:
        return state
    }
}

type setInitializedActiontype =
{
    type: typeof SET_INITIALIZED
}

export const setInitialized =
 (): setInitializedActiontype => 
 ({type:SET_INITIALIZED})




export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch( getauthUserData())
  Promise.all([promise]).then(() =>{ dispatch( setInitialized())
})
}


export default AppReducer