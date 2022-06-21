/** @format */

import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancle }) => {
  //console.log("Evaluate UI");

  const [entredTitle, setEnteredTitle] = useState("");
  const [entredAmount, setEnteredAmount] = useState("");
  const [entredDate, setEnteredDate] = useState("");

  /*const [userInput, setUserInput] = useState({
    entredTitle: "",
    entredAmount: "",
    entredDate: "",
  });*/

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  /* 
    setUserInput({
      ...userInput,
      entredTitle: event.target.value,
    });

    setUserInput((prevState) => {
      return { ...prevState, entredTitle: event.target.value };
    });
  }; */
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entredTitle,
      amount: entredAmount,
      date: new Date(entredDate),
    };
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    console.log(expenseData);

    onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={entredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={entredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={entredDate}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancle}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
