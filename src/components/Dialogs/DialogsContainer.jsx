import React from 'react';
import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/dialogReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) =>{

  let state = props.store.getState();

  let addMessageText = ()=>{
    let action = addMessageActionCreator()
    props.store.dispatch(action) 
  }

  let updateNewMessage =(text) =>{    
    let action = updateNewMessageActionCreator(text);
    props.store.dispatch(action);
  }

  return(
    <Dialogs addMessage={addMessageText} 
             updateNewMessageText={updateNewMessage} 
             
             dialogsData={state.dialogsPage.dialogsData}
             messagesData = {state.dialogsPage.messagesData} 
             newMessageText = {state.dialogsPage.newMessageText} />
  )
}

export default DialogsContainer;
