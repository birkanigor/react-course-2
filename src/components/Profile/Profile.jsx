import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css';


const Profile =(props) =>{
  return  (
    <div >
      <ProfileInfo/>
      <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} updatePostTextArea={props.updatePostTextArea} addPost={props.addPost} />
    </div>
  )
}

export default Profile;
