import React from "react"
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user_1.svg";


let Users = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    pagesCount=pagesCount>10?10:pagesCount;
    let pages = [];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    return <div>
        <div className={s.pager}>
            {pages.map ( p =>{
                return <span className={s.pageNum + ' ' + (props.currentPage === p ? s.selectedPage : '') }
                             onClick={ ()=>{ props.onPageChanged(p) } }>{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id} className={s.userCard}>
                    <span>
                        <div className={s.userAvatar}>
                            <img src={u.photos.small ?  u.photos.small : userPhoto } className={s.userPhoto} alt={"no img"} />
                        </div>
                        <div className={s.followUser}>
                            {u.followed ?
                                <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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