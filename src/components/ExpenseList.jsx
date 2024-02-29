import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <>
      <div className="d-flex  align-items-center justify-content-center mb-3">
        <input
          type="search"
          className="form-control  w-75"
          name=""
          id=""
          placeholder="Type to Search an item..."
        />
      </div>
      <div className="mt-3  d-flex align-items-center justify-content-center mb-3 ">
        <ul className="list-group w-75">
          {expenses.map((expense, index) => (
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;
