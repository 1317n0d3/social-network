import {combineReducers, createStore} from 'redux';
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;