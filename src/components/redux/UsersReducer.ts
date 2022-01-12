import { Dispatch } from 'redux'
import { ResponseType, usersAPI } from '../../API/API'
import { userType } from '../../Types/types'
import { CommonThunkType, InferActionsTypes } from './reduxs'
import { update } from '../common/updater'

export let initialState = {
    users: [] as Array<userType>,
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    processing: [] as Array<number>, // array of users ids
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type initialStateType = typeof initialState
export type Filtertype = typeof initialState.filter

const usersReducer = (state = initialState, action: ACTs): initialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: update(state.users, action.userId, "id", { followed: true })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: update(state.users, action.userId, "id", { followed: false })
            }
        case 'SET_USERS':
            return { ...state, users: action.users }
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'SET_TOTAL_COUNT':
            return { ...state, totalUserCount: action.totalCount }
        case 'SET_TERM':
            return { ...state, filter: action.payload }
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
    acceptunfollow: (userId: number) => ({ type: 'UNFOLLOW', userId: userId } as const),
    setUsers: (users: Array<userType>) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setTerm: (filter: Filtertype) => ({ type: 'SET_TERM', payload: filter } as const),
    setTotalUserCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
    toggleisFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleisProcessing: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_PROCESSING', isFetching, userId } as const)
}
type ThunkType = CommonThunkType<ACTs>

export const getUsers = (currentPage: number, pageSize: number, filter: Filtertype): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleisFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setTerm(filter))
        let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(actions.toggleisFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUserCount(data.totalCount))
    }
}
const _follow_unfollow = async (
    dispatch: Dispatch<ACTs>,
    userId: number,
    apiMethod: (userId: number) => Promise<ResponseType>,
    actionCreator: (userId: number) => ACTs) => {
    dispatch(actions.toggleisProcessing(true, userId));
    let data = await apiMethod(userId)

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleisProcessing(false, userId))
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _follow_unfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.acceptfollow)
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _follow_unfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.acceptunfollow)
    }
}









export default usersReducer