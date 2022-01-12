
import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Header.module.css'

export type MapPropstype = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropstype = {
    logout: () => void
}
const Header: React.FC<MapPropstype & DispatchPropstype> = (props) => {
    return <header className={c.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_Gondor.svg/1280px-Flag_of_Gondor.svg.png' />
        <div className={c.loginBlock}>
            {props.isAuth ? <div className={c.LB}>{props.login} - <button onClick={props.logout} >Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header