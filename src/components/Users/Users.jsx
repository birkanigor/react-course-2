import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user_1.svg'

class Users extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        pagesCount=pagesCount>10?10:pagesCount;
        let pages = [];
        for(let i=1; i<=pagesCount; i++){
            pages.push(i);
        }
        return <div>
            <div className={s.pager}>
                {pages.map ( p =>{
                    return <span className={s.pageNum + ' ' + (this.props.currentPage === p ? s.selectedPage : '') }
                    onClick={ ()=>{ this.onPageChanged(p) } }>{p}</span>
                })}
            </div>
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