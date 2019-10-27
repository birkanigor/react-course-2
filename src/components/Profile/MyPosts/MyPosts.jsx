import React from 'react';
import Post from './Posts/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator,updateNewPostActionCreator} from './../../../redux/profileReducer';

const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  let newPostTextAreaElement = React.createRef();

  let addPost = ()=>{
    props.dispatch(addPostActionCreator());
  }

  let onPostChange =() =>{   
    props.dispatch(updateNewPostActionCreator(newPostTextAreaElement.current.value));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea rows="4" cols="50"  onChange={onPostChange} ref={newPostTextAreaElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost } >Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
