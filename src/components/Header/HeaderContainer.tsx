import React from 'react'
import Header, { DispatchPropstype, MapPropstype } from './Header'
import { connect } from 'react-redux'
import { logout } from '../redux/AuthReducer'
import { AppstateType } from '../redux/reduxs'

class HeaderContainer extends React.Component<MapPropstype & DispatchPropstype> {
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: AppstateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});



export default connect<MapPropstype, DispatchPropstype, {}, AppstateType>(mapStateToProps, { logout })(HeaderContainer)