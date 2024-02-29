import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType =
    totalExpenses > budget ? "bg-danger text-white" : "alert-success";
  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining : <strong>¥ {budget - totalExpenses}</strong>
      </span>
    </div>
  );
};

export default Remaining;
