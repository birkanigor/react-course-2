import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header =(props) =>{

  return  (
      <header className={s.header}>
        <img src="https://haxe.org/img/branding/haxe-logo-glyph.png"></img>
          <h2>Friends NET
              <div className={s.loginBlock}>
                  {props.isAuth ? props.login : <NavLink to={'/login'} className={s.loginNavLink}>Login</NavLink>}
              </div>
          </h2>
      </header>
  )
}

export default Header;
