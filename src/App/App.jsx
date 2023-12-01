import React from "react";

import Profile from "../components/Profile/Profile";
import Statistics from "../components/Statistics/Statistics";
import FriendList from "../components/Friends/FriendList";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";

import friends from "../data/friends.json"
import user from "../data/user.json"
import data from "../data/data.json"
import transactions from "../data/transactions.json"
import css from "./App.module.css"


export const App = () => {
  return (
      <div className={css.container}>
        <Profile className= {css.profile_container}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} key={transactions.id} />
      </div>
  )
}
