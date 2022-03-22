
import { Avatar, Button, Col, Layout, Menu, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    UserOutlined,
  } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserLogin, selectIsAuth } from '../redux/auth-selectors';
import { logout } from '../redux/AuthReducer';

export type MapPropstype = {}

export const Header: React.FC<MapPropstype> = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const dispatch = useDispatch()
    const logoutCallBack = () => {
        dispatch(logout())
    }
const { Header } = Layout;

    return <Header className="header">
    <Row>
<Col span={18}>
<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="1">
        <Link to="/Users">Users</Link>
      </Menu.Item>
    </Menu>
</Col>
{isAuth 
?<><Col span={1}><Avatar alt={login || ''} style={{backgroundColor:'#87d068'}} icon={<UserOutlined/>}/></Col> 
   <Col span={5}>  <Button onClick={logoutCallBack} >Log out</Button></Col> </>
                :<Col>   <Button><Link to={'/login'}>Login</Link> </Button></Col> }
    </Row>   
  </Header>
 /*    <header className={c.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_Gondor.svg/1280px-Flag_of_Gondor.svg.png' />
        <div className={c.loginBlock}>
            {props.isAuth ? <div className={c.LB}>{props.login} - <button onClick={props.logout} >Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header> */
}