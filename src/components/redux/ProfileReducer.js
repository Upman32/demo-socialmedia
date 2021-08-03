import { profileAPI, usersAPI } from "../../API/API"


const ADD_POST = 'ADD_POST'


const SET_PROFILE_USER = 'SET_PROFILE_USER'

const SET_STATUS = 'SET_STATUS'




let initialState = {

    posts: [
        { id: 1, message: 'hohohohoho', likecounts: 453 },
        { id: 2, message: 'jaajajajajajja', likecounts: 332 },
        { id: 3, message: 'jaajajajajajja', likecounts: 151 },
        { id: 4, message: 'jaajajajajajja', likecounts: 263 },
        { id: 5, message: 'jaajajajajajja', likecounts: 53 }
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



export const getUserProfile = (userId) => async (dispatch) => {
    
      let response = await  usersAPI.getProfile(userId)
       
dispatch(SetUserProfile(response.data))
     
}
export const getStatus = (userId) => async (dispatch) => {
    
   let response = await profileAPI.getStatus(userId)
   
dispatch(SetStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    
   let response = await profileAPI.updateStatus(status)
    
        if (response.data.resultCode === 0)
{
    dispatch(SetStatus(status))
}

}

export default profileReducer