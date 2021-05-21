import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
      <aside>
        <ul>
          <li><a href='/profile'>Profile</a></li>
          <li><a href='/dialogs'>Messages</a></li>
          <li><a href='/news'>News</a></li>
          <li><a href='/music'>Music</a></li>
          <li><a href='/settings'>Settings</a></li>
        </ul>
      </aside>
  );
}

export default Sidebar;