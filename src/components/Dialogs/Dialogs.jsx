import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <main>
      <div className={s.containerDialogs}>
        <div className={s.sidebar}>
          <div className={s.sidebarHeader}>
            user
          </div>
          <div className={s.sidebarMain}>
            <div className={s.search}>
              search
            </div>
            <div className="sidebarUsers">
              <ul>
                <li>user 1</li>
                <li>user 2</li>
                <li>user 3</li>
                <li>user 4</li>
                <li>user 5</li>
                <li>user 6</li>
                <li>user 7</li>
                <li>user 8</li>
                <li>user 9</li>
              </ul>
            </div>
          </div>
        </div>


        <div className={s.content}>
          <div className={s.contentHeader}>
            header
          </div>
          <div className={s.contentChat}>
            <div className={s.messages}>
              messages
            </div>
            <div className={s.sendMessage}>
              send
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dialogs;