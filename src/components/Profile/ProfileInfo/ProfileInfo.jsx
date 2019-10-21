import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo =() =>{
  return  (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"></img>
      </div>
      <div className={s.avatar}>
        <img  src="https://i.imgur.com/l5HXBdT.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        Profile Description
      </div>
    </div>
  )
}

export default ProfileInfo;
