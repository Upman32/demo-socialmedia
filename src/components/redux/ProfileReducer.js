import React from 'react'
import { stopSubmit } from "redux-form"
import { profileAPI, usersAPI } from "../../API/API"


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
    ],
  
    profile:null    ,
    status: " "
}




const profileReducer = (state = initialState, action) => {
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
                         ...state, profile: {...state.profile, photos: action.photos}
                       
                        }   
        default:
return state
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: 'ADD_POST', newPostText
    }
}


export const SetUserProfile = (profile) => {
    return {
        type: 'SET_PROFILE_USER', profile
    }
}
export const SetStatus = (status) => {
    return {
        type: 'SET_STATUS', status
    }
}
export const savePhotoSuccess  = (photos) => {
    return {
        type: 'SET_PHOTO', photos
    }
}




export const getUserProfile = (userId) => async (dispatch) => {
    
      let response = await  usersAPI.getProfile(userId)
       
dispatch(SetUserProfile(response.data))
     
}
export const getStatus = (userId) => async (dispatch) => {
    
   let response = await profileAPI.getStatus(userId)
   
dispatch(SetStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    try {
   let response = await profileAPI.updateStatus(status)
    
        if (response.data.resultCode === 0)
{
    dispatch(SetStatus(status))
}
} catch(error) {
    
}
}
export const savePhoto = (file) => async (dispatch) => {
    
    let response = await profileAPI.savePhoto(file)
     
         if (response.data.resultCode === 0)
 {
     dispatch(savePhotoSuccess(response.data.data.photos))
 }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
     
         if (response.data.resultCode === 0)
 {
     dispatch(getUserProfile(userId))
 } else {
     dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
     return Promise.reject(response.data.messages[0])
 }
}

export default profileReducer