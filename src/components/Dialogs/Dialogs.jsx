import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  return (
    <main>
      <div className={s.containerDialogs}>
        <div className={s.sidebar}>
          <div className={s.users}>
            <Dialog name="vasya" id="1" />
            <Dialog name="sasha" id="2" />
            <Dialog name="ivan" id="3" />
            <Dialog name="pavel" id="4" />
          </div>
        </div>


        <div className={s.content}>
          <div className={s.contentHeader}>
            header
          </div>
          <div className={s.contentChat}>
            <div className={s.messages}>
              <Message message="hello world" />
              <Message message="My first message" />
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