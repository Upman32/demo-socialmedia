import { createSelector } from "reselect"
import { AppstateType } from "./reduxs"

export const getUserss= (state: AppstateType)=>{
    return state.usersPage.users}

export const superpupers = createSelector(getUserss, (users) => {
    return  users.filter(u => true)
  })
export const getPageSize= (state: AppstateType)=>{
    return state.usersPage.pageSize
}
export const getUserCount= (state: AppstateType)=>{
    return state.usersPage.totalUserCount
}
export const getCurrentPage= (state: AppstateType)=>{
    return state.usersPage.currentPage
}
export const getisFetching= (state: AppstateType)=>{
    return state.usersPage.isFetching
}
export const getisProcessing= (state: AppstateType)=>{
    return state.usersPage.processing
}
