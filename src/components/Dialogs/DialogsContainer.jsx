import React from 'react';
import {addMessageActionCreator,updateNewMessageActionCreator} from '../../redux/dialogReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { stat } from 'fs';



let mapStateToProps = (state) =>{

  return {
    dialogsPage: state.dialogsPage,
    newMessageText : state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewMessageText : (text) => {
      let action = updateNewMessageActionCreator(text);
      dispatch(action);

    },
    addMessage : () => {
      let action = addMessageActionCreator()
      dispatch(action)      
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
