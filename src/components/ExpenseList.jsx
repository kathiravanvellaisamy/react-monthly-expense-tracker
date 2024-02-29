import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

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
        <form action=""></form>
        <ul class="list-group w-75">
          {expenses.map((expense, index) => (
            <li
              key={expense.id}
              class="list-group-item fs-4 d-flex justify-content-between"
            >
              <span> {expense.name} </span>
              <span className="badge bg-primary p-2">{expense.cost}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;
