import * as serviceWorker from './serviceWorker';
//import store from './redux/state';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
    );
};
/*console.group("Store :");
console.log(store)
console.log(store.getState());
console.log(store.dispatch);
console.groupEnd();*/
renderEntireTree(store.getState());

//store.subscribe(renderEntireTree);

store.subscribe(()=> {
  let state = store.getState();
  renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
