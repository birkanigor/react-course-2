import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let postsData=[
  {id : 1 , message : "Hi ! How are you ?" ,  likesCount:5},
  {id : 2 , message : "It's my first message" ,  likesCount:15},
  {id : 3 , message : "My name is Igor Birkan" ,  likesCount:25},
  {id : 4 , message : "Test message" ,  likesCount:0}
]

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
