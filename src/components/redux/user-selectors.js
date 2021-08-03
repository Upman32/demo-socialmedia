import { createSelector } from "reselect"

export const getUserss= (state)=>{
    return state.usersPage.users
}
export const superpupers = createSelector(getUserss, (users) => {
    return  users.filter( u=> true)
  })
export const getPageSize= (state)=>{
    return state.usersPage.pageSize
}
export const getUserCount= (state)=>{
    return state.usersPage.totalUserCount
}
export const getCurrentPage= (state)=>{
    return state.usersPage.currentPage
}
export const getisFetching= (state)=>{
    return state.usersPage.isFetching
}
export const getisProcessing= (state)=>{
    return state.usersPage.processing
}
