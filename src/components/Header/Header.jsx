import React from "react";
import s from "./Header.module.css";
import Search from "./Search/Search";
import SessionManager from "./SessionManager/SessionManager";

const Header = (props) => {
  return (
    <header>
      <Search />
      <SessionManager {...props} />
    </header>
  );
};

export default Header;
