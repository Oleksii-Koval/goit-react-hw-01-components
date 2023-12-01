import React from 'react';
import FriendListItem from './FriendListItem';
import css from "./Friends.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css.friends_list}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;