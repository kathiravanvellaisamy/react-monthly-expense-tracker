import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setCost("");
    setName("");
  };
  return (
    <div className="d-flex  align-items-center justify-content-center mb-3">
      <form onSubmit={handleSubmit} className="w-75">
        <div className="form-group mb-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label>Amount</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="mt-2 btn btn-warning">Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
