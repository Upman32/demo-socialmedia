import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'
import React from 'react'

const Nav: React.FC = () => {

  return <nav className={classes.Nav}>

    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/dialogues" activeClassName={classes.activeLink}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/Users" activeClassName={classes.activeLink}>Users</NavLink>
    </div>
  </nav>
}
export default Nav