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
  updatePostText(text) {
    this._state.profilePage.newPostText = text;

    this._callSubscriber(this._state);
  },
  addPost(postMessage) {
    const newPost = {
      message: postMessage,
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
  addMessage(message) {
    const newMessage = {
      message: message
    }

    this._state.dialogPage.messagesData.push(newMessage);
    this._state.dialogPage.newMessageText = '';
    
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;

    this._callSubscriber(this._state);
  }
}

export default store;