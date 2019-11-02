import React from 'react';
import Post from './Posts/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)
  let newPostTextAreaElement = React.createRef();

  let onAddPost = ()=>{
    props.addPost();
  }

  let onPostChange =() =>{   
    let text = newPostTextAreaElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea rows="4" cols="50"  onChange = { onPostChange } ref={newPostTextAreaElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick = { onAddPost } >Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
