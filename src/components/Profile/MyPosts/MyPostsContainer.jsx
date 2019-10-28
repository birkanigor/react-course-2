import React from 'react';
import {addPostActionCreator,updateNewPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPostText = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  }

  let updateNewPost =(newPostText) => {   
    let action = updateNewPostActionCreator(newPostText);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText = {updateNewPost} 
             addPost = {addPostText} 

             postsData = {state.profilePage.postsData}
             newPostText = {state.profilePage.newPostText} />
  )
} 

export default MyPostsContainer;
