import React from "react";

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: "Shopping", fee: 20000 },
    { id: 2, name: "Entertainment", fee: 10000 },
    { id: 3, name: "Rent", fee: 2000 },
    { id: 4, name: "Travel", fee: 5000 },
    { id: 5, name: "Electricity", fee: 800 },
  ];
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
              class="list-group-item fs-3 d-flex justify-content-between"
            >
              <span> {expense.name} </span>
              <span className="badge bg-danger p-2">{expense.fee}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;
