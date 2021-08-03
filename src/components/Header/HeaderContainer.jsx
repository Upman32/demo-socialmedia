
import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {logout} from '../redux/AuthReducer'
import { render } from '@testing-library/react'
import { authAPI } from '../../API/API'

class HeaderContainer extends React.Component  {

    render() {
return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});



export default connect(mapStateToProps, {logout}) (HeaderContainer)