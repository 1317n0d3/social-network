import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
      <aside>
        <ul>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </aside>
  );
}

export default Sidebar;