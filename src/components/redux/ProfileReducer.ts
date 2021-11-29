import React from 'react'
import { stopSubmit } from "redux-form"
import { ThunkAction } from 'redux-thunk'
import { profileAPI, usersAPI } from "../../API/API"
import { PhotosType, PostType, ProfileType } from '../../Types/types'
import { AppstateType } from './reduxs'


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
    newPostText:''
    
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: ACTs):initialStateType  => {
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
type ACTs = addPostActionCreatorType | SetUserProfileType
 | SetStatusType | savePhotoSuccessType 

type addPostActionCreatorType =
    { type: typeof ADD_POST,
        newPostText: string}
type SetUserProfileType =
    { type: typeof SET_PROFILE_USER,
    profile: ProfileType}
type SetStatusType =
    { type: typeof SET_STATUS,
        status: string}
type savePhotoSuccessType =
    { type: typeof SET_PHOTO
    photos: PhotosType }

export const addPostActionCreator = (newPostText: string):  addPostActionCreatorType => {
    return {
        type: 'ADD_POST', newPostText
    }
}


export const SetUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {
        type: 'SET_PROFILE_USER', profile
    }
}
export const SetStatus = (status: string): SetStatusType => {
    return {
        type: 'SET_STATUS', status
    }
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => {
    return {
        type: 'SET_PHOTO', photos
    }
}



type ThunkType = ThunkAction<Promise<void>, AppstateType, unknown, ACTs>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {

    let data = await profileAPI.getProfile(userId)

    dispatch(SetUserProfile(data))

}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {

    let data = await profileAPI.getStatus(userId)

    dispatch(SetStatus(data))

}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)

        if (data.resultCode === 0) {
            dispatch(SetStatus(status))
        }
    } catch (error) {

    }
}
export const savePhoto = (file: string | Blob): ThunkType => async (dispatch) => {

    let data = await profileAPI.savePhoto(file)

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer