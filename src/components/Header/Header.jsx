import React from 'react';
import s from './Header.module.css';
import Search from './Search/Search';
import SessionManager from './SessionManager/SessionManager';

const Header = () => {
  return (
    <header>
      <Search />
      <SessionManager />
    </header>
  );
}

export default Header;