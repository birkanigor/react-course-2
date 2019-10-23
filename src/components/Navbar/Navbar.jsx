import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from './SideBar/Friend';

const Navbar =(props) =>{
  let friendElements = props.state.freinds.map( friend => ( <Friend friend={friend} />));

  return  (
    <div className={s.nav}>

      <nav >
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
      </nav>

      <div className={s.friends}>
        <div>Friends</div>
        {friendElements}
      </div>

    </div>
  )
}

export default Navbar;
