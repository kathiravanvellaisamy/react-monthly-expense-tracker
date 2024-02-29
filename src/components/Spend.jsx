import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Spend = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Spend Money : <strong>¥ {totalExpenses}</strong>
      </span>
    </div>
  );
};

export default Spend;
