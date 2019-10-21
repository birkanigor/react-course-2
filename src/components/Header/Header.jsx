import React from 'react';
import s from './Header.module.css';
const Header =() =>{
  return  (
      <header className={s.header}>
        <img src="https://haxe.org/img/branding/haxe-logo-glyph.png"></img>
        <h2>The BIG Project</h2>
      </header>
  )
}

export default Header;
