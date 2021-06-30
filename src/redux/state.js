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
  updatePostText(text) {
    this._state.profilePage.newPostText = text;

    this._callSubscriber(this._state);
  },
  addPost() {
    const newPost = {
      message: this._state.profilePage.newPostText,
      likeCount: 0
    }

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';

    this._callSubscriber(this._state);
  },
  updateMessageText(text) {
    this._state.dialogPage.newMessageText = text;

    this._callSubscriber(this._state);
  },
  addMessage() {
    const newMessage = {
      message: this._state.dialogPage.newMessageText
    }

    this._state.dialogPage.messagesData.push(newMessage);
    this._state.dialogPage.newMessageText = '';
    
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;

    this._callSubscriber(this._state);
  },
  dispatch(action) {
    switch (action.type) {
      case 'ADD-POST':
        this.addPost();
        break;
      case 'UPDATE-POST-TEXT':
        this.updatePostText(action.text);
        break;
      case 'UPDATE-MESSAGE-TEXT':
        this.updateMessageText(action.text);
        break;
      case 'ADD-MESSAGE':
        this.addMessage();
        break;
      default:
        break;
    }
  }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updatePostTextActionCreator = (text) => ({type: 'UPDATE-POST-TEXT', text: text});

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateMessageTextActionCreator = (text) => ({type: 'UPDATE-MESSAGE-TEXT', text: text});

export default store;