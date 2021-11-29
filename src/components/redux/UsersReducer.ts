import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../../API/API'
import { PhotosType, userType } from '../../Types/types'
import { AppstateType, InferActionsTypes } from './reduxs'



let initialState = {

    users: [] as Array<userType>,
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 5,
    isFetching: true,
    processing: [] as Array<number> // array of users ids
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
// UPDATE update
const UsersReducer = (state = initialState, action: ACTs): initialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: update(state.users, action.userId, "id", { followed: true }) as any

            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: update(state.users, action.userId, "id", { followed: false }) as any
            }
        case 'SET_USERS' :
            return { ...state, users: action.users }
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'SET_TOTAL_COUNT':
            return { ...state, totalUserCount: action.totalCount }
        case 'TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'TOGGLE_IS_PROCESSING':

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
type ACTs = InferActionsTypes<typeof actions>

    export const actions = {
        acceptfollow: (userId: number) => ({ type: 'FOLLOW', userId } as const),

        acceptunfollow: (userId: number) => ({ type: 'UNFOLLOW', userId: userId }as const),

        setUsers: (users: Array<userType>) => ({ type: 'SET_USERS', users }as const),

        setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage }as const),

        setTotalUserCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount }as const),

        toggleisFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching }as const),

        toggleisProcessing: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_PROCESSING', isFetching, userId }as const)

    }



type GetStateType = () => AppstateType
type ThunkType = ThunkAction<Promise<void>, AppstateType, unknown, ACTs>



export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleisFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)


        dispatch(actions.toggleisFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUserCount(data.totalCount))


    }
}
const _follow_unfollow = async (dispatch: Dispatch<ACTs>, userId: number, apiMethod: any, actionCreator: (userId: number) =>
ACTs) => {
    dispatch(actions.toggleisProcessing(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleisProcessing(false, userId))



}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _follow_unfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.acceptfollow)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _follow_unfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.acceptunfollow)
    }
}









export default UsersReducer