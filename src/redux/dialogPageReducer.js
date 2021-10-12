const ADD_MESSAGE = 'ADD-MESSAGE',
  UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
};

const dialogPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.text,
      }
    }
    case ADD_MESSAGE: {
      const newMessage = {
        message: state.newMessageText
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: '',
      }
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text});

export default dialogPageReducer;