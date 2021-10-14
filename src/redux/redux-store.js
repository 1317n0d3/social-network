import {combineReducers, createStore} from 'redux';
import dialogPageReducer from "./dialogPageReducer";
import friendsPageReducer from './friendsPageReducer';
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  sidebar: sidebarReducer,
  friendsPage: friendsPageReducer,
});

let store = createStore(reducers);

export default store;