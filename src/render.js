import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost,updatePostTextArea, addMessage,updateMessageTextArea} from './redux/state';
import {BrowserRouter,Route} from "react-router-dom";

export let renderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updatePostTextArea={updatePostTextArea}
           addMessage={addMessage}
           updateMessageTextArea = {updateMessageTextArea}
        />
    </BrowserRouter>,
    document.getElementById('root')
    );
}
