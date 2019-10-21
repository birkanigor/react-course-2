import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) =>{

  let dailogsElemens = props.dialogsData.map( dialog => ( <DialogItem name={dialog.name} id={dialog.id}/>));
  let messagesElements = props.messagesData.map( mess => ( <Message messageText={mess.message}/>));

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
