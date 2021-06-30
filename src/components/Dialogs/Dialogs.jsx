import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {
  const dialogs = props.dialogPage.dialogsData.map(d => <Dialog name={d.name} id={d.id} />),
    messages = props.dialogPage.messagesData.map(m => <Message message={m.message} />),
    messageRef = React.createRef();

  // const sendMessage = () => props.addMessage(messageRef.current.value),
  //   onMessageChange = () => props.updateMessageText(messageRef.current.value);

  const sendMessage = () => props.dispatch(addMessageActionCreator()),
    onMessageChange = () => props.dispatch(updateMessageTextActionCreator(messageRef.current.value));

  return (
    <main>
      <div className={s.containerDialogs}>
        <div className={s.sidebar}>
          { dialogs }
        </div>
        <div className={s.content}>
          <div className={s.contentHeader}>
            header
          </div>
          <div className={s.contentChat}>
            <div className={s.messages}>
              { messages }
            </div>
            <div className={s.sendMessage}>
              <textarea name="" id="" cols="70" rows="1" ref={ messageRef } value={props.dialogPage.newMessageText} onChange={onMessageChange} />
              <button onClick={ sendMessage }>Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dialogs;