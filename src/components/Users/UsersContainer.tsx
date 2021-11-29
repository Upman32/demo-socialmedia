
import {connect} from 'react-redux'
import { follow, unfollow, getUsers} from '../redux/UsersReducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/preloader'
import { compose } from 'redux'
import { getPageSize,getisProcessing,getisFetching, getCurrentPage ,getUserCount, superpupers} from '../redux/user-selectors'
import { userType } from '../../Types/types'
import { AppstateType } from '../redux/reduxs'




type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUserCount:number
  users: Array<userType>
  processing: Array<number>

}

type MapDispatchPropsType = {

  getUsers: (currentPage: number, pageSize: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  processing: Array<number>
}


type PropsType = MapDispatchPropsType & MapStatePropsType


class UsersContainer extends React.Component<PropsType> {

 
    

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)}

  onPostChanged = (pageNumber: number) => {
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
                  processing={this.props.processing}
                  /> 
  </>
      }
  }
  

let mapStateToProps = (state: AppstateType): MapStatePropsType => {
  return {
users:  superpupers(state),
pageSize: getPageSize(state),
totalUserCount: getUserCount(state),
currentPage: getCurrentPage(state),
isFetching: getisFetching(state),
processing: getisProcessing(state)
 }

}


export default compose(
//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
connect(mapStateToProps, 
   {follow, unfollow, getUsers }))(UsersContainer);

