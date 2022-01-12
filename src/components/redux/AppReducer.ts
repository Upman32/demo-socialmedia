import { getauthUserData } from "./AuthReducer"
import { InferActionsTypes } from "./reduxs"

let initialState = {
    initialized: false,
}

export type initialStatetype = typeof initialState
type ACT = InferActionsTypes<typeof actions>

const AppReducer = (state = initialState, action: ACT): initialStatetype => {
    switch (action.type) {
        case 'APP/SOCIAL/SET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

const actions = {
    setInitialized: () => ({ type: 'APP/SOCIAL/SET_INITIALIZED' } as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getauthUserData())
    Promise.all([promise]).then(() => {
        dispatch(actions.setInitialized())
    })
}


export default AppReducer