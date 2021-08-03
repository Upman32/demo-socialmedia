
import React from 'react';
import Profile from './Profile'

import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../redux/ProfileReducer';
import { Redirect, withRouter } from 'react-router';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';





let MapStatetoProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loguserId: state.auth.userId,
    isAuth: state.auth.isAuth

        }
    )
    
class ProfileContainer extends React.Component  {
    componentDidMount() {
        let userId= this.props.match.params.userId
if (!userId) {
    userId = this.props.loguserId
    if (!userId) {
        this.props.history.push("/login")
    }
}
this.props.getUserProfile(userId);

this.props.getStatus(userId)
        
}
    render()

    {
        
        if (!this.props.isAuth) return  <Redirect to={"/Login"}/>
    
        return (
        <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status}
         updateStatus={this.props.updateStatus}/>
    )
    }   
}


export default compose(
    connect( MapStatetoProps,  {getUserProfile, getStatus, updateStatus}),
withRouter, withAuthRedirect
    
)(ProfileContainer)





