import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li
      key={props.id}
      className="list-group-item fs-4 d-flex justify-content-between"
    >
      <span> {props.name} </span>
      <div className=" d-flex justify-content-between gap-5">
        <span className="badge bg-primary p-2">{props.cost}</span>
        <button onClick={handleDelete} className="btn btn-dark">
          <TiDelete size={28} />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
