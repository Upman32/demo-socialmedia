import { AppstateType } from "./reduxs"

export const selectIsAuth = (state: AppstateType) => {
    return state.auth.isAuth
}
export const selectCurrentUserLogin = (state: AppstateType) => {
    return state.auth.login
}