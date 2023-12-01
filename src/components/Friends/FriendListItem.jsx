import React from 'react';
import css from "./Friends.module.css";

function FriendListItem({ id, avatar, name, isOnline }) {
const statusClassName = isOnline === true? css.online : css.offline

  return (
    <li className={css.list_item} key={id}>
      <span className={statusClassName}>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
