//import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import { followActionCreator, unFollowActionCreator , setUsersActionCreator,setCurrentPageActionCreator,setTotalUsersCountActionCreator} from './../../redux/usersReducer';

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage
    }
}

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
            dispatch(setTotalUsersCountActionCreator(totalCount));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)
