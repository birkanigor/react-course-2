import React from 'react';
import s from './../Navbar.module.css';

const Friend = (props) => {
  debugger;
  return(
    <div className={s.item}>
      <img src={props.friend.avatar}></img>
      {props.friend.name}
    </div>
  )
}

export default Friend;
