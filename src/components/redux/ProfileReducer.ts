import { FormAction, stopSubmit } from "redux-form"
import { profileAPI } from "../../API/API"
import { PhotosType, PostType, ProfileType } from '../../Types/types'
import { CommonThunkType, InferActionsTypes } from './reduxs'

const ADD_POST = 'ADD_POST'
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'

let initialState = {
    posts: [
        { id: 1, message: 'Nice photo!', likecounts: 453 },
        { id: 2, message: '!report', likecounts: 332 },
        { id: 3, message: 'Dmitrievks best town in the world', likecounts: 151 },
        { id: 4, message: 'Controgan', likecounts: 263 },
        { id: 5, message: 'Haha!', likecounts: 53 }
    ] as Array<PostType>,

    profile: null as ProfileType | null,
    status: "",

}

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likecounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state, profile: { ...state.profile, photos: action.photos } as ProfileType

            }
        default:
            return state
    }
}
export const actions = {
    addPostActionCreator: (newPostText: string) => {
        return ({
            type: 'ADD_POST', newPostText
        } as const)
    },
    SetUserProfile: (profile: ProfileType) => {
        return ({
            type: 'SET_PROFILE_USER', profile
        } as const)
    },
    SetStatus: (status: string) => {
        return ({
            type: 'SET_STATUS', status
        } as const)
    },
    savePhotoSuccess: (photos: PhotosType) => {
        return ({
            type: 'SET_PHOTO', photos
        } as const)
    }
}

type ThunkType = CommonThunkType<ActionsType | FormAction>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {

    let data = await profileAPI.getProfile(userId)

    dispatch(actions.SetUserProfile(data))

}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {

    let data = await profileAPI.getStatus(userId)

    dispatch(actions.SetStatus(data))

}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)

        if (data.resultCode === 0) {
            dispatch(actions.SetStatus(status))
        }
    } catch (error) {

    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {

    let data = await profileAPI.savePhoto(file)

    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer