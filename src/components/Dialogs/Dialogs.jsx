import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <main>
      <div className={s.containerDialogs}>
        <div className={s.sidebar}>
          <div className={s.users}>
            <ul>
              <NavLink to="/dialogs/1"><li className={s.userCard}>user 1</li></NavLink>
              <NavLink to="/dialogs/2"><li className={s.userCard}>user 2</li></NavLink>
              <NavLink to="/dialogs/3"><li className={s.userCard}>user 3</li></NavLink>
              <NavLink to="/dialogs/4"><li className={s.userCard}>user 4</li></NavLink>
              <NavLink to="/dialogs/5"><li className={s.userCard}>user 5</li></NavLink>
              <NavLink to="/dialogs/6"><li className={s.userCard}>user 6</li></NavLink>
            </ul>
          </div>
        </div>


        <div className={s.content}>
          <div className={s.contentHeader}>
            header
          </div>
          <div className={s.contentChat}>
            <div className={s.messages}>
              <div>hello world</div>
              <div>My first message</div>
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