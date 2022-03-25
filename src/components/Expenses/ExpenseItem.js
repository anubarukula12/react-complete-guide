import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);
  // const clickHandler = () => {
  //   setTitle("TitleUpdated!");
  //   setAmount("AmountUpdated");
  //   console.log("Clicked!!!!!!" + title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
