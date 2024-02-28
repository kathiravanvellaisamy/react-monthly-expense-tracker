import React from "react";

const AddExpense = () => {
  return (
    <div className="d-flex  align-items-center justify-content-center mb-3">
      <form action="" className="w-75">
        <div className="form-group mb-2">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group mb-2">
          <label>Amount</label>
          <input type="number" className="form-control" />
        </div>
        <button className="mt-2 btn btn-warning">Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
