const ADD_MESSAGE = 'ADD-MESSAGE',
  UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogPageReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    case ADD_MESSAGE:
      const newMessage = {
        message: state.newMessageText
      }

      state.messagesData.push(newMessage);
      state.newMessageText = '';

      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text});

export default dialogPageReducer;