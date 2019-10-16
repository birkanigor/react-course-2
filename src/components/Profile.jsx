import React from 'react';
import s from './Profile.module.css';

const Profile =() =>{
  return  (
    <div className={s.content}>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
      </div>
      <div>
        <img src="http://beyondplm.com/wp-content/uploads/2015/06/deep-linking-plm.jpg"></img>
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          My posts - 1
        </div>
        <div className={s.item}>
          My posts - 1
        </div>
      </div>
    </div>
  )
}

export default Profile;
