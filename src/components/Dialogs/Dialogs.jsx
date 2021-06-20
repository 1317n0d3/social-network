import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {


  // DATA
  let dialogsData = [
    {name: 'vasya', id: 1},
    {name: 'sasha', id: 2},
    {name: 'ivan', id: 3},
    {name: 'pavel', id: 4},
  ];
  let messagesData = [
    {message: 'hello world'},
    {message: 'My first message'}
  ];

  // Elements
  const dialogs = dialogsData.map(d => <Dialog name={d.name} id={d.id} />),
    messages = messagesData.map(m => <Message message={m.message} />);

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