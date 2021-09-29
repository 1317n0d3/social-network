import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogPageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;

  const sendMessage = () => props.store.dispatch(addMessageActionCreator()),
    onMessageChange = (body) => props.store.dispatch(updateMessageTextActionCreator(body));

  return (<Dialogs updateMessageText={onMessageChange} sendMessage={sendMessage} dialogPage={state} />);
}

export default DialogsContainer;