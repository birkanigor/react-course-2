import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sitebarReducer from './sidebarReducer';
import usersReducer from './usersReducer'

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    sideBar : sitebarReducer,
    usersPage : usersReducer
});

let store = createStore(reducers); // store creates dispatch automatically

export default store;
