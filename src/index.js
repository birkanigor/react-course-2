import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter,Route} from "react-router-dom";

let renderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={store.addPost.bind(store)}
           updatePostTextArea={store.updatePostTextArea.bind(store)}
           addMessage={store.addMessage.bind(store)}
           updateMessageTextArea = {store.updateMessageTextArea.bind(store)}
        />
    </BrowserRouter>,
    document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
