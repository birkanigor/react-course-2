import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profilewrap}>
            <div className={s.background}>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"></img>
            </div>
            <div className={s.avatar}>
                <img src={ props.profile.photos.large}></img>
            </div>
            <div className={s.descriptionBlock}>
                <p><b>Profile Description</b> : {props.profile.aboutMe}</p>
                <p><b>Full Name</b> : {props.profile.fullName}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
