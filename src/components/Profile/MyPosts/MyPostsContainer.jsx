import React from 'react';
import {addPostActionCreator,updateNewPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
    {
        (store) => {
          let state = store.getState();
          let addPostText = () => {
            let action = addPostActionCreator();
            store.dispatch(action);
          }
        
          let updateNewPost =(newPostText) => {   
            let action = updateNewPostActionCreator(newPostText);
            store.dispatch(action);
          }
          return <MyPosts updateNewPostText = {updateNewPost} 
                          addPost = {addPostText} 

                          postsData = {state.profilePage.postsData}
                          newPostText = {state.profilePage.newPostText} />
        }              
    }
      
    </StoreContext.Consumer>
  )
} 

export default MyPostsContainer;
