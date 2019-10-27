import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageActionCreator,updateNewMessageActionCreator} from './../../redux/dialogReducer'

const Dialogs = (props) =>{
  let dailogsElements = props.dialogsPage.dialogsData.map( dialog => ( <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/>));
  let messagesElements = props.dialogsPage.messagesData.map( mess => ( <Message messageText={mess.message}/>));

  let newMessageTextAreaElement = React.createRef();

  let addMessage = ()=>{
    props.dispatch(addMessageActionCreator()) 
  }

  let onMessageChange =() =>{    
    props.dispatch(updateNewMessageActionCreator(newMessageTextAreaElement.current.value)) 
  }

  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dailogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className = {s.newPost}>
          <textarea rows="4" cols="50" ref={newMessageTextAreaElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange} ></textarea>
        </div>
        <div>
          <button onClick={ addMessage }>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
