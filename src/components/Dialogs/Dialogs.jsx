import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) =>{

  let dailogsElements = props.state.dialogsData.map( dialog => ( <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/>));
  let messagesElements = props.state.messagesData.map( mess => ( <Message messageText={mess.message}/>));

  let newMessageTextAreaElement = React.createRef();
  let addMessage = ()=>{
    alert(newMessageTextAreaElement.current.value);
  }

  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dailogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className = {s.newPost}>
          <textarea rows="4" cols="50" ref={newMessageTextAreaElement}></textarea>
        </div>
        <div>
          <button onClick={ addMessage }>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
