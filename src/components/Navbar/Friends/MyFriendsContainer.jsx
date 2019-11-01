import { connect } from 'react-redux';
import Friends from './Friends'

const mapStateToProps = (state) =>{
    return {
      friends : state.sideBar.freinds
    }
  }

  const mapDispatchToProps = (dispatch) =>{
  }

const MyFriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default MyFriendsContainer;