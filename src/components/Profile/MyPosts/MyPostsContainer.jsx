import React from 'react';
import {addPostActionCreator,updateNewPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) =>{
  return {
    postsData:state.profilePage.postsData,
    newPostText:state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addPost : ()=>{
      let action = addPostActionCreator();
      dispatch(action)
    },

    updateNewPostText : (newPostText) => {
      let action = updateNewPostActionCreator(newPostText);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
