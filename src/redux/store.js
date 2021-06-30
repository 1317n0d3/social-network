import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
  _state: {
    profilePage: {
      postsData: [
        {message: 'Hello', likeCount: 0},
        {message: 'My first post', likeCount: 10}
      ],
      newPostText: ''
    },
    dialogPage: {
      dialogsData: [
        {name: 'nikolay', id: 1},
        {name: 'sasha', id: 2},
        {name: 'ivan', id: 3},
        {name: 'pavel', id: 4},
      ],
      messagesData: [
        {message: 'hello world'},
        {message: 'My first message'}
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [
        {name: 'nikolay', id: 1},
        {name: 'sasha', id: 2},
        {name: 'ivan', id: 3},
        {name: 'pavel', id: 4},
        {name: 'oleg', id: 5}
      ]
    }
  },
  _callSubscriber() {
    console.log('state has been changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;

    this._callSubscriber(this._state);
  },
  dispatch(action) {
    dialogPageReducer(this._state.dialogPage, action);
    profilePageReducer(this._state.profilePage, action);
    sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;