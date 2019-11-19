import React from 'react'
import {connect} from 'react-redux'
import { follow, unFollow , setUsers,setCurrentPage,setTotalUsersCount, setToggleIsFetching} from './../../redux/usersReducer';
import * as axios from "axios";
import Preloader from '../common/preloader/preloader.js'
import Users from "./Users";
import {usersAPI} from "../../api/api";

class UsersAPIContainer extends React.Component{
    componentDidMount() {
        this.props.setToggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage , this.props.pageSize).then(data =>{
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setToggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)

        usersAPI.getUsers(pageNumber , this.props.pageSize).then(data =>{
            this.props.setUsers(data.items);
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

export default connect(mapStateToProps,
                     { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching })(UsersAPIContainer)

