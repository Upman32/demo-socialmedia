import { NavLink } from 'react-router-dom'
import c from './Header.module.css'

const Header = (props) => {
    return <header className={c.header}>
        <img src='https://thicc.mywaifulist.moe/waifus/357/970e775e3ad5b3f5873550891e69252465dcde5b246bb474f2503bb3ece602b0_thumb.jpeg' />
        <div className={c.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
             : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            
    </header>
}
export default Header