import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {
  return (
      <aside>
        <ul>
          <li><NavLink to='/profile'>Profile</NavLink></li>
          <li><NavLink to='/dialogs'>Messages</NavLink></li>
          <li><NavLink to='/news'>News</NavLink></li>
          <li><NavLink to='/music'>Music</NavLink></li>
          <li><NavLink to='/settings'>Settings</NavLink></li>
        </ul>
      </aside>
  );
}

export default Sidebar;