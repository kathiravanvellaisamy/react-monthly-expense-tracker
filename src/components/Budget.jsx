import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-info">
      <span>
        Budget : <strong>¥ {budget}</strong>
      </span>
    </div>
  );
};

export default Budget;
