/** @format */

import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle("update");
    console.log("Clicked !!!! " + title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{amount} Dh</div>
      <button onClick={clickHandler}>Change text</button>
    </div>
  );
};

export default ExpenseItem;
