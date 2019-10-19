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
        <Post message="Hi ! How are you ?" likesCount="5"/>
        <Post message="It's my first message" likesCount="15"/>
        <Post message="My name is Igor"  likesCount="25"/>
      </div>
    </div>
  )
}

export default MyPosts;
