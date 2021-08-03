
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader';
import HeaderContainer from './components/Header/HeaderContainer';
// import DialoguesContainer from './components/Navbar/Dialogues/DialoguesContainer';
import Music from './components/Navbar/Music/Music';
import Nav from './components/Navbar/Nav';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
 // import ProfileContainer from './components/Profile/ProfileContainer';
import { initializeApp } from './components/redux/AppReducer';
import { getauthUserData } from './components/redux/AuthReducer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './Login/Login';

import store from './components/redux/reduxs';
import Game from './components/TicTacToe/TicTacToe';
const  DialoguesContainer = React.lazy(() => import ('./components/Navbar/Dialogues/DialoguesContainer') );
const  ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer') )

 
class App extends React.Component {
  componentDidMount() 
{ 
 
    this.props.initializeApp()
}
  render() {
   
   
    if (!this.props.initialized) {
      return <Preloader/>
    }
        
      
    return(
      
    <BrowserRouter>
      <div className='app-wrapper' >
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/Dialogues'  render={ () => { return <Suspense fallback ={<div>Loading</div>}>
           <DialoguesContainer
           
           
         /> </Suspense>} }/>
           
          <Route path='/Profile/:userId?'  render={ () => { return <Suspense fallback ={<div>Loading</div>}><ProfileContainer
            /> </Suspense>} }/>

              <Route path='/Users'  render={ () =><UsersContainer
             /> }
            
             />
                 <Route path='/Login'  render={ () =><Login
             /> }
            
             />
          <Route path='/News'  render={ () =><Game/> } />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
     
      </div>
    </BrowserRouter>
/*  <Route path='/Dialogues' render={ () => <Dialogues /> }/>
 <Route path='/Profile'  render={ () => <Profile /> }/> */
  )
}}

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose
(connect(mapStatetoProps,   {initializeApp, getauthUserData})) (App)


const MainContainerApp = (props) => {
 return  <React.StrictMode>
    <Provider store={store}>
    <AppContainer />
    </Provider>
  </React.StrictMode>
}

export default MainContainerApp