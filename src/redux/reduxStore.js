import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sitebarReducer from './sidebarReducer';

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    sideBar : sitebarReducer
});

let store = createStore(reducers); // store creates dispatch automatically

export default store;
