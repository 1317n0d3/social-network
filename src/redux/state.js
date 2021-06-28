const state = {
  profilePage: {
    postsData: [
      {message: 'Hello', likeCount: 0},
      {message: 'My first post', likeCount: 10}
    ]
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
    ]
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

export const addPost = (postMessage) => {
  const newPost = {
    message: postMessage,
    likeCount: 0
  }

  state.profilePage.postsData.push(newPost);
};

export const addMessage = (message) => {
  const newMessage = {
    message: message
  }

  state.dialogPage.messagesData.push(newMessage);
};

export default state;