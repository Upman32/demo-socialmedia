import { usersAPI } from '../../API/API'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'
const SET_TOTAL_COUNT ='SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_PROCESSING = 'TOGGLE_IS_PROCESSING'





let initialState = {

 users:[],
 pageSize: 5,
 totalUserCount: 0,
 currentPage: 5,
 isFetching: true,
 processing: []
}

const   update = (items, itemId, objPropName, newobjProps) => {
    items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newobjProps}
        }
        return u
    })
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
           return     {...state, 
                    users: update(state.users, action.userID, "id", {followed:true})
              
           }
        case UNFOLLOW:
            return {
                ...state,
                 users: update(state.users, action.userId, "id", {followed:false})
            }
            case SET_USERS:
                return {...state, users: action.users }
                case SET_CURRENT_PAGE:
                    return {...state, currentPage: action.currentPage}
                    case SET_TOTAL_COUNT:
                        return {...state, totalUserCount: action.totalCount}
                        case TOGGLE_IS_FETCHING:
                        return {...state, isFetching: action.isFetching}
                        case TOGGLE_IS_PROCESSING:
                            
                            return  {...state, 
                                isFetching: action.isFetching
                                    ? [...state.processing, action.userId ]
                                   : state.processing.filter(id => id != action.userId)}
            
        default:
return state
    }
}

export const acceptfollow = (userID) => ({ type: FOLLOW, userID})
export const acceptunfollow = (userID) =>  ({ type: UNFOLLOW, userID}) 
export const setUsers = (users) =>  ({ type: SET_USERS, users}) 
export const setCurrentPage = (currentPage) =>  ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalCount) =>  ({ type: SET_TOTAL_COUNT, totalCount}) 
export const toggleisFetching = (isFetching) =>  ({ type: TOGGLE_IS_FETCHING, isFetching }) 
export const toggleisProcessing = (isFetching, userId) =>  ({ type: TOGGLE_IS_PROCESSING, isFetching, userId }) 


export const getUsers = (currentPage, pageSize) =>
{return async (dispatch) => {
    dispatch(toggleisFetching (true))
    dispatch(setCurrentPage(currentPage))
  let data = await usersAPI.getUsers(currentPage, pageSize)
      
      
        dispatch( toggleisFetching (false))
        dispatch(setUsers(  data.items) )
        dispatch(  setTotalUserCount(data.totalCount))
  
  
  } 
}
const follow_unfollow = async (dispatch, userId, apimethod, AC  ) => {
    dispatch(toggleisProcessing(true, userId));
    let response = await usersAPI.follow(userId)
     
       if (response.data.resultCode == 0)  {
           dispatch(acceptfollow(userId));
      }
      dispatch(toggleisProcessing(false, userId))
     
   

}
export const follow = (userId) =>
{return async (dispatch) => {
let apimethod = usersAPI.follow.bind(usersAPI)
let AC = acceptfollow
follow_unfollow(dispatch, apimethod, AC, userId)
  }}
  export const unfollow = (userId) =>
{return async (dispatch) => {
    let apimethod = usersAPI.unfollow.bind(usersAPI)
    let AC = acceptunfollow
    follow_unfollow(dispatch, apimethod, AC, userId)
  }}









export default UsersReducer