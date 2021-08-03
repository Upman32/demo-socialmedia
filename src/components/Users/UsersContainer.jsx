
import {connect} from 'react-redux'
import { follow, unfollow,  setCurrentPage, toggleisProcessing, getUsers} from '../redux/UsersReducer'
import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/preloader'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { getPageSize,getisProcessing,getisFetching, getCurrentPage ,getUserCount, getUserss} from '../redux/user-selectors'






class UsersContainer extends React.Component {

 
    

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    /* this.props.toggleisFetching (true)
   usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      
      .then(data => {
        this.props.toggleisFetching (false)
          this.props.setUsers(  data.items) 
          this.props.setTotalUserCount(data.totalCount)
  
  
  }) */}
  
  onPostChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
     
  
  }
          
          
      
      render() {
  
  
  
  
   return <> 
   {this.props.isFetching ? <Preloader />  : null}
   <Users totalUserCount={this.props.totalUserCount}
                 pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPostChanged={this.onPostChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  isFetching={this.props.isFetching}
                
                  processing={this.props.processing}/> 
  </>
      }
  }
  

/* let mapsStateToProps = (state) =>{
  return {
users: state.usersPage.users,
pageSize: state.usersPage.pageSize,
totalUserCount: state.usersPage.totalUserCount,
currentPage: state.usersPage.currentPage,
isFetching: state.usersPage.isFetching,
processing: state.usersPage.processing
 }
} */
let mapsStateToProps = (state) =>{
  return {
/* users: getUserss(state), */
users: getUserss(state),
pageSize: getPageSize(state),
totalUserCount: getUserCount(state),
currentPage: getCurrentPage(state),
isFetching: getisFetching(state),
processing: getisProcessing(state)
 }

}
/* let mapDispatchToProps = ( dispatch) =>{
  return {
   follow: (userID) => {
     dispatch(followAC(userID))   },
     unfollow: (userID) => {
      dispatch(unfollowAC(userID))   },
      setUsers: (users) => {
        dispatch(setusersAC(users))   },
        setCurrentPage: (pageNumber) => {
          dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount) => {
          dispatch(setTotalUserCountAC(totalCount))
        },
        toggleisFetching: (isFetching) => {
          dispatch(toggleisFetchingAC(isFetching))
        }
}
}
 */


export default compose (connect(mapsStateToProps, 
  {follow, unfollow, setCurrentPage,
   toggleisProcessing, getUsers  })
  )(UsersContainer);

