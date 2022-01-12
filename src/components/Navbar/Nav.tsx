import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'
import React from 'react'

const Nav:React.FC = () => {

  return <nav className={classes.Nav}>

    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/dialogues" activeClassName={classes.activeLink}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/Game" activeClassName={classes.activeLink}>Game</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/Users" activeClassName={classes.activeLink}>Users</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/Settings" activeClassName={classes.activeLink}>Settings</NavLink>
    </div>

  </nav>
}
export default Nav