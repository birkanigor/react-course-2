import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  //console.log(props);
  //debugger;
  return (
      <div className={s.item}>
        <img src="https://i.imgur.com/l5HXBdT.jpg"></img>
        {props.message}
        <div className={s.like}>
          <span><img src="https://cdn.pixabay.com/photo/2016/02/02/05/54/like-1174811_960_720.png"></img>({props.likesCount} likes )</span>
        </div>
      </div>
  )
}

export default Post;
