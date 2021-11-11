import { combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import friendsPageReducer from "./usersPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
