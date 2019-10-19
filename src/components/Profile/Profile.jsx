import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css';


const Profile =() =>{
  return  (
    <div >
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"></img>
      </div>
      <div className={s.avatar}>
        <img src="https://i.imgur.com/l5HXBdT.jpg"></img>
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;
