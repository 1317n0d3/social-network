import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="icon: logo"></img>
        <input type="text" placeholder="search"></input>
      </div>
      <div>
        ava
        notifications
        log out
      </div>
    </header>
  );
}

export default Header;