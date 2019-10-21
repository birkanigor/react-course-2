import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
  let path = "/dialogs/" + props.id;

  return(
    <div className={s.dialog + ' ' + s.active}>
      <NavLink  to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message=(props) =>{
  return (
    <div className={s.message}>{props.messageText}</div>
  )
}

const Dialogs = (props) =>{

  let dialogsData = [
    {id : 1 , name : "Adam"},
    {id : 2 , name : "David"},
    {id : 3 , name : "Steve"},
    {id : 4 , name : "Kevin"},
    {id : 5 , name : "Kate"},
    {id : 6 , name : "John"}
  ];

  let messagesData = [
    {id : 1 , message : "Hi"},
    {id : 2 , message : "How are you ?!"},
    {id : 3 , message : "This is test message"}
  ]

  let dailogsElemens = dialogsData.map( dialog => ( <DialogItem name={dialog.name} id={dialog.id}/>));

  let messagesElements = messagesData.map( mess => ( <Message messageText={mess.message}/>));

  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dailogsElemens}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
