const state = {
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
};


let rerenderEntireTree = () => {
  console.log('state has been changed');
};

export const updatePostText = (text) => {
  state.profilePage.newPostText = text;

  rerenderEntireTree(state);
}

export const addPost = (postMessage) => {
  const newPost = {
    message: postMessage,
    likeCount: 0
  }

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';

  rerenderEntireTree(state);
};

export const updateMessageText = (text) => {
  state.dialogPage.newMessageText = text;

  rerenderEntireTree(state);
}

export const addMessage = (message) => {
  const newMessage = {
    message: message
  }

  state.dialogPage.messagesData.push(newMessage);
  state.dialogPage.newMessageText = '';
  
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;

  rerenderEntireTree(state);
};

export default state;