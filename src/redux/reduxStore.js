import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sitebarReducer from './sidebarReducer';
import usersReducer from './usersReducer'
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    sideBar : sitebarReducer,
    usersPage : usersReducer,
    auth:authReducer
});

let store = createStore(reducers); // store creates dispatch automatically
window.store = store;
export default store;
