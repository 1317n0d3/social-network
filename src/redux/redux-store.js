import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogPageReducer from "./dialogPageReducer";
// import friendsPageReducer from "./usersPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
