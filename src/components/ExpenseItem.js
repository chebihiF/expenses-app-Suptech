/** @format */

import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 3, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "3000.59";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expenseAmount} Dh</div>
    </div>
  );
};

export default ExpenseItem;
