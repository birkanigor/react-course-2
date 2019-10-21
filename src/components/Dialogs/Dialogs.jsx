import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
  let path = "/dialogs/" + props.id;

  return(
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message=(props) =>{
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) =>{
  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Adam" id="1"/>
        <DialogItem name="David" id="2"/>
        <DialogItem name="Steve" id="3"/>
        <DialogItem name="Kevin" id="4"/>
        <DialogItem name="Kate" id="5"/>
        <DialogItem name="John" id="6"/>
      </div>

      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="How are you ?!"/>
        <Message message="Tis is test message"/>

      </div>
    </div>
  )
}

export default Dialogs;
