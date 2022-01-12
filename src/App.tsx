
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navbar/Nav';
import { initializeApp } from './components/redux/AppReducer';
import { getauthUserData } from './components/redux/AuthReducer';
import store, { AppstateType } from './components/redux/reduxs';
import { UsersPage } from './components/Users/UsersContainer';
import {Login} from './Login/Login';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type Propstype = ReturnType<typeof mapStatetoProps>
type Dispatchtype ={
  initializeApp: () => void
}


class App extends React.Component<Propstype & Dispatchtype> {
  catchAllUnhandledError = (promiseRejectionEvent: PromiseRejectionEvent) => {
    alert("Some error")
  }
  componentDidMount() {

    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>

          <Redirect from="/" to="/profile" />


          <Route path='/Profile/:userId?' render={() => {
            return <Suspense fallback={<div>Loading</div>}><ProfileContainer
            /> </Suspense>
          }} />
          <Route path='/Users' render={() => <UsersPage
          />}
          />
          <Route path='/Login' render={() => <Login
          />} />
        </div>

      </div>

    )
  }
}
const mapStatetoProps = (state: AppstateType) => ({
  initialized: state.app.initialized
})
let AppContainer = compose<React.ComponentType>
  (connect(mapStatetoProps, { initializeApp, getauthUserData }))(App)
const MainContainerApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>)

}

export default MainContainerApp







/*  <Route path='/Dialogues' render={ () => <Dialogues /> }/>
<Route path='/Profile'  render={ () => <Profile /> }/> */