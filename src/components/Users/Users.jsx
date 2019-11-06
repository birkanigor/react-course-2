import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user_1.svg'

class Users extends React.Component{

    constructor(props){
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(u =>
                    <div key={u.id} className={s.userCard}>
                    <span>
                        <div className={s.userAvatar}>
                            <img src={u.photos.small ?  u.photos.small : userPhoto } className={s.userPhoto} alt={"no img"} />
                        </div>
                        <div className={s.followUser}>
                            {u.followed ?
                                <button onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div >Name : <b><u>{u.name}</u></b></div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>Country : {(u.location && u.location.country) ?  u.location.country : 'USA'}</div>
                            <div>City : {(u.location && u.location.city) ?  u.location.city : 'NY'}</div>

                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    }
}
export default Users;