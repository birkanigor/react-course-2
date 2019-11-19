import React from "react"
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user_1.svg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    pagesCount=pagesCount>10?10:pagesCount;
    let pages = [];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    const generateKey = (pre) => {
        let key = `${ pre }_${ new Date().getTime() }_${Math.random()}`
        return key
    }

    let UnFollowUser = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {withCredentials:true,
                headers : {
                    "API-KEY":"d49e5f8f-fae7-410e-b87e-fce6c9614e59"
                } }).then(response =>{
            if(response.data.resultCode == 0){
                props.unFollow(userId)
            }
        })
    }

    return <div>
        <div className={s.pager}>
            {pages.map ( p =>{
                return <span className={s.pageNum + ' ' + (props.currentPage === p ? s.selectedPage : '') } key={generateKey(props.currentPage)}
                             onClick={ ()=>{ props.onPageChanged(p) } }>{p}</span>
            } )}
        </div>
        {
            props.users.map(u =>
                <div key={u.id} className={s.userCard}>
                    <span>
                        <div className={s.userAvatar}>
                            <NavLink to={'./profile/' + u.id}>
                                <img src={u.photos.small ?  u.photos.small : userPhoto } className={s.userPhoto} alt={"no img"} />
                            </NavLink>
                        </div>
                        <div className={s.followUser}>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials:true,
                                            headers : {
                                                "API-KEY":"d49e5f8f-fae7-410e-b87e-fce6c9614e59"
                                            } }).then(response =>{
                                        if(response.data.resultCode == 0){
                                            props.unFollow(u.id)
                                        }
                                    })
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                            {withCredentials:true,
                                            headers :{
                                                "API-KEY":"d49e5f8f-fae7-410e-b87e-fce6c9614e59"
                                            }}).then(response =>{
                                            if(response.data.resultCode == 0){
                                                props.follow(u.id)
                                            }
                                        })

                                }}>Follow</button>}
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

export default  Users