import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogs = props.dialogsData.map(d => <Dialog name={d.name} id={d.id} />),
    messages = props.messagesData.map(m => <Message message={m.message} />);

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
              <textarea name="" id="" cols="70" rows="1"></textarea>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dialogs;