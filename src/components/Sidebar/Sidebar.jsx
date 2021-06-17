import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {
  return (
      <aside>
        <ul className={s.links}>
          <NavLink to='/profile'><li>Profile</li></NavLink>
          <NavLink to='/dialogs'><li>Messages</li></NavLink>
          <NavLink to='/news'><li>News</li></NavLink>
          <NavLink to='/music'><li>Music</li></NavLink>
          <NavLink to='/settings'><li>Settings</li></NavLink>
        </ul>
      </aside>
  );
}

export default Sidebar;