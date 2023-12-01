import React from 'react';
import css from './Profile.module.css';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <div className={css.user_info}>
          <h2>{username}</h2>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={css.stats_list}>
        <li className={css.stats_list_item}>
          <span className={css.user_info_text}>Followers: </span>
          <span className={css.user_info_text}>{followers}</span>
        </li>
        <li className={css.stats_list_item}>
          <span className={css.user_info_text}>Views: </span>
          <span className={css.user_info_text}>{views}</span>
        </li>
        <li className={css.stats_list_item}>
          <span className={css.user_info_text}>Likes: </span>
          <span className={css.user_info_text}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
