import React from "react";
import css from "./Transaction.module.css";

function TransactionHistory({ items }) {
  return (
    <div>
      <table className={css.table_container}>
        <thead>
          <tr>
            <th className={css.titles}>Type</th>
            <th className={css.titles}>Amount</th>
            <th className={css.titles}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.table_item}>{type}</td>
              <td className={css.table_item}>{amount}</td>
              <td className={css.table_item}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory;