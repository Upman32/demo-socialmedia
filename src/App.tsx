import "antd/dist/antd.css";
import React, { Suspense } from "react";
import { connect, Provider } from "react-redux";
import {
  BrowserRouter,
  NavLink as Link,
  Redirect,
  Route,
} from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/preloader";
import DialoguesContainer from "./components/Navbar/Dialogues/DialoguesContainer";
import { initializeApp } from "./components/redux/AppReducer";
import { getauthUserData } from "./components/redux/AuthReducer";
import store, { AppstateType } from "./components/redux/reduxs";
import { UsersPage } from "./components/Users/UsersContainer";
import { Login } from "./Login/Login";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import { Header } from "./components/Header/Header";
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);
const ChatPage = React.lazy(() => import("./Pages/Chat/Chatpage"));

type Propstype = ReturnType<typeof mapStatetoProps>;
type Dispatchtype = {
  initializeApp: () => void;
};

class App extends React.Component<Propstype & Dispatchtype> {
  catchAllUnhandledError = (promiseRejectionEvent: PromiseRejectionEvent) => {
    alert("Some error");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledError
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <Layout>
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu mode="inline" style={{ height: "100%" }}>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
                  <Menu.Item key="1">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/dialogues">Messages</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                  <Menu.Item key="3">
                    <Link to="/Users">Users</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/Chat">Chat</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <div className="app-wrapper-content">
                <Redirect from="/" to="/profile" />
                <Route
                  path="/Dialogues"
                  render={() => {
                    return (
                      <Suspense fallback={<div>Loading</div>}>
                        <DialoguesContainer />{" "}
                      </Suspense>
                    );
                  }}
                />

                <Route
                  path="/Profile/:userId?"
                  render={() => {
                    return (
                      <Suspense fallback={<div>Loading</div>}>
                        <ProfileContainer />{" "}
                      </Suspense>
                    );
                  }}
                />
                <Route path="/Users" render={() => <UsersPage />} />
                <Route path="/Login" render={() => <Login />} />
                <Route path="/Chat" render={() => 
                      <Suspense fallback={<div>Loading</div>}>
                      <ChatPage />
                      </Suspense>
                      
                      } />
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Demo social media</Footer>
      </Layout>
      /*   <div className='app-wrapper' >
        <HeaderContainer />
        <Nav />
 
      </div> */
    );
  }
}
const mapStatetoProps = (state: AppstateType) => ({
  initialized: state.app.initialized,
});
let AppContainer = compose<React.ComponentType>(
  connect(mapStatetoProps, { initializeApp, getauthUserData })
)(App);
const MainContainerApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainContainerApp;

/*  <Route path='/Dialogues' render={ () => <Dialogues /> }/>
<Route path='/Profile'  render={ () => <Profile /> }/> */
