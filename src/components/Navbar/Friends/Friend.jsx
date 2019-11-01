import React from 'react';
import s from './Friends.module.css';

const Friend = (props) => {
  return(
    <div className={s.item}>
      <img src={props.friend.avatar}></img>
      {props.friend.name}
    </div>
  )
}

export default Friend;
