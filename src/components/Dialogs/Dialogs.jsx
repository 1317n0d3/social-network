import React from 'react';
import s from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
// import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogPageReducer';

const Dialogs = (props) => {
  let state = props.dialogPage;

  const dialogs = state.dialogsData.map(d => <Dialog name={d.name} id={d.id} />),
    messages = state.messagesData.map(m => <Message message={m.message} />);

  const onSendMessage = () => props.sendMessage(),
    onMessageChange = (e) => props.updateMessageText(e.target.value);

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
              <textarea name="" id="" cols="70" rows="1" value={state.newMessageText} onChange={onMessageChange} />
              <button onClick={ onSendMessage }>Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dialogs;