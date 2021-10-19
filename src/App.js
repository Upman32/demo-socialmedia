
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Navbar/Music/Music';
import Nav from './components/Navbar/Nav';
import Settings from './components/Navbar/Settings/Settings';
import { initializeApp } from './components/redux/AppReducer';
import { getauthUserData } from './components/redux/AuthReducer';
import store from './components/redux/reduxs';
import Game from './components/TicTacToe/TicTacToe';
import UsersContainer from './components/Users/UsersContainer';
import Login from './Login/Login';


const DialoguesContainer = React.lazy(() => import('./components/Navbar/Dialogues/DialoguesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component {
  catchAllUnhandledError = (promiseRejectionEvent) => {
    alert("Some error")
    //console.error(promiseRejectionEvent)
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

          <Route path='/Dialogues' render={() => {
            return <Suspense fallback={<div>Loading</div>}>
              <DialoguesContainer


              /> </Suspense>
          }} />

          <Route path='/Profile/:userId?' render={() => {
            return <Suspense fallback={<div>Loading</div>}><ProfileContainer
            /> </Suspense>
          }} />

          <Route path='/Users' render={() => <UsersContainer
          />}

          />
          <Route path='/Login' render={() => <Login
          />}

          />



          <Route path='/Game' render={() => <Game />} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />

        </div>

      </div>

    )
  }
}

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose
  (connect(mapStatetoProps, { initializeApp, getauthUserData }))(App)


const MainContainerApp = (props) => {
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