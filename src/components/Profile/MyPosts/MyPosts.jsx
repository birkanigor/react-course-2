import React from 'react';
import Post from './Posts/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

let postsData=[
  {id : 1 , message : "Hi ! How are you ?" ,  likesCount:5},
  {id : 2 , message : "It's my first message" ,  likesCount:15},
  {id : 3 , message : "My name is Igor" ,  likesCount:25},
]

let postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea rows="4" cols="50"></textarea>
        </div>
        <div>
          <button>Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
