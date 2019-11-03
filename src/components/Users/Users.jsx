import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: "https://image.flaticon.com/icons/svg/145/145859.svg", followed: false, fullName: 'John Smith', status: 'I am new user', location: { country: 'England', city: 'London' } },
            { id: 2, photoUrl: "https://image.flaticon.com/icons/svg/163/163801.svg", followed: true, fullName: 'Ruth M. Blackwell', status: 'Feeling great', location: { country: 'USA', city: 'Los Angeles' } },
            { id: 3, photoUrl: "https://image.flaticon.com/icons/svg/163/163834.svg", followed: false, fullName: 'Adam Cohen', status: 'Hey there', location: { country: 'Israel', city: 'Tel Aviv' } }
        ]);
    }


    return <div>
        {
            props.users.map(u => 
                <div key={u.id} className={s.userCard}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div><b><u>{u.fullName}</u></b></div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>

                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;