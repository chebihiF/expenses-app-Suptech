/** @format */

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expensesContent }) => {
  if (expensesContent.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;

  return (
    <ul className="expenses-list">
      {expensesContent.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
