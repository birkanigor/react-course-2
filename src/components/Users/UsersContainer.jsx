import React from 'react'
import {connect} from 'react-redux'
import { follow, unFollow , setUsers,setCurrentPage,setTotalUsersCount, setToggleIsFetching} from './../../redux/usersReducer';
import * as axios from "axios";
import Preloader from '../common/preloader/preloader.js'
import Users from "./Users";

class UsersAPIContainer extends React.Component{
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setToggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
            this.props.setToggleIsFetching(false)
        })
    }
    render() {
        return <>
            {this.props.isFetching?<Preloader/> : null}
                    <Users totalUsersCount = {this.props.totalUsersCount}
                              pageSize = {this.props.pageSize}
                              currentPage = {this.props.currentPage}
                              onPageChanged = {this.onPageChanged}
                              users = {this.props.users}
                              follow = {this.props.follow}
                              unFollow = {this.props.unFollow}
                    />
            </>
    }

}

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching
    }
}
/*
const mapDispatchToProps = (dispatch) =>{
    return {
        follow : (userId) =>{
            dispatch(followActionCreator(userId))
        },
        unFollow : (userId) =>{
            dispatch(unFollowActionCreator(userId))
        },
        setUsers : (users)=>{
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage:(pageNumber)=> {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
        setToggleIsFetching : (isFetching)=>{
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersAPIContainer)*/

export default connect(mapStateToProps,
                     { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching })(UsersAPIContainer)

