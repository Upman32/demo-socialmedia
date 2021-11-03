import { usersAPI } from '../../API/API'
import { PhotosType, userType } from '../../Types/types'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_PROCESSING = 'TOGGLE_IS_PROCESSING'





let initialState = {

    users: [] as Array<userType>,
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 5,
    isFetching: true,
    processing: [] as Array<number>, // array of users ids
}

type initialStateType = typeof initialState

const update = (items: any, itemId: number, objPropName: string, newobjProps: object) => {
    items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newobjProps }
        }
        return u
    })
}

const UsersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: update(state.users, action.userID, "id", { followed: true }) as any

            }
        case UNFOLLOW:
            return {
                ...state,
                users: update(state.users, action.userId, "id", { followed: false }) as any
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalUserCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_PROCESSING:

            return {
                ...state,
                isFetching: action.isFetching 
                    ? [...state.processing, action.userId]
                    : state.processing.filter(id => id != action.userId) as any
            }

        default:
            return state
    }
}

export const acceptfollow = (userID: number): acceptfollowActionType => ({ type: FOLLOW, userID })
type acceptfollowActionType = {
    type: typeof FOLLOW
    userID: number
}
export const acceptunfollow = (userID: number): acceptunfollowActionType => ({ type: UNFOLLOW, userID })
type acceptunfollowActionType = {
    type: typeof UNFOLLOW
    userID: number
}
export const setUsers = (users: Array<userType>): setUsersActionType => ({ type: SET_USERS, users })
type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<userType>
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setTotalUserCount = (totalCount: number): setTotalUserCountActionType => ({ type: SET_TOTAL_COUNT, totalCount })
type setTotalUserCountActionType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}
export const toggleisFetching = (isFetching: boolean): toggleisFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
type toggleisFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleisProcessing = (isFetching: boolean, userId: number): toggleisProcessingActionType => ({ type: TOGGLE_IS_PROCESSING, isFetching, userId })
type toggleisProcessingActionType = {
    type: typeof TOGGLE_IS_PROCESSING
    isFetching: boolean,
    userId: number
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleisFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)


        dispatch(toggleisFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))


    }
}
const follow_unfollow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleisProcessing(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleisProcessing(false, userId))



}
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        follow_unfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptfollow)
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        follow_unfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), acceptunfollow)
    }
}









export default UsersReducer