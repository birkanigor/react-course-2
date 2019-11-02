import React from 'react';
import Friend from './Friend';
import s from './Friends.module.css'

const Friends =(props) =>{
    let friendElements = props.friends.map( friend => ( <Friend friend={friend} key={friend.id} />));
    return(
        <div className={s.friends}>
            <div>Friends : </div>
            {friendElements}
        </div>
    )
}

export default Friends;