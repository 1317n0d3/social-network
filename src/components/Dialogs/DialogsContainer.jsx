import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogPageReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      { store => {
          let state = store.getState().dialogPage;

          const sendMessage = () => store.dispatch(addMessageActionCreator()),
            onMessageChange = (body) => store.dispatch(updateMessageTextActionCreator(body));

          return (<Dialogs updateMessageText={onMessageChange} sendMessage={sendMessage} dialogPage={state} />);
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;