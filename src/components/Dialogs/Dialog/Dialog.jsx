import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <NavLink to={"/dialogs/" + props.id}>
      <div className={s.userCard}>
        {props.name}
      </div>
    </NavLink>
  );
}

export default Dialog;