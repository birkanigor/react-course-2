import React from 'react';
import Post from './Posts/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>add</button>        
      </div>
      <div className={s.posts}>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default MyPosts;
