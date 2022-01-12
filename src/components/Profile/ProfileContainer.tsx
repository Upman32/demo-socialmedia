
import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../redux/ProfileReducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { AppstateType } from '../redux/reduxs';
import { ProfileType } from '../../Types/types';

let MapStatetoProps = (state: AppstateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loguserId: state.auth.userId,
    isAuth: state.auth.isAuth
}
)
type MapPropsType = ReturnType<typeof MapStatetoProps>
type DispatchPropsType = {
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (text: string) => void,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>,
}
type ParamsType = {
    userId: string
}
type MDtype = MapPropsType & DispatchPropsType & RouteComponentProps<ParamsType>
class ProfileContainer extends React.Component<MapPropsType & DispatchPropsType & RouteComponentProps<ParamsType>> {
    refreshinfoprof() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.loguserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId as number);
        this.props.getStatus(userId as number)
    }
    componentDidMount() {
        this.refreshinfoprof()
    }
    componentDidUpdate(prevProps: MDtype, prevState: MDtype) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
            this.refreshinfoprof()
    }
    render() {

        if (!this.props.isAuth) return <Redirect to={"/Login"} />

        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}


export default compose<React.ComponentType>(
    connect(MapStatetoProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter, withAuthRedirect
)(ProfileContainer)





