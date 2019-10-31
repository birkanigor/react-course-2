import React from 'react';
import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/dialogReducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () =>{

  return <StoreContext.Consumer>
    { (store) => {

                  let state = store.getState();

                  let addMessageText = ()=>{
                    let action = addMessageActionCreator()
                    store.dispatch(action) 
                  }
                
                  let updateNewMessage =(text) =>{    
                    let action = updateNewMessageActionCreator(text);
                    store.dispatch(action);
                  }

                  return  <Dialogs addMessage={addMessageText} 
                                    updateNewMessageText={updateNewMessage} 
                                    
                                    dialogsData={state.dialogsPage.dialogsData}
                                    messagesData = {state.dialogsPage.messagesData} 
                                    newMessageText = {state.dialogsPage.newMessageText} />
              }
          }
          </StoreContext.Consumer>     
}

export default DialogsContainer;
