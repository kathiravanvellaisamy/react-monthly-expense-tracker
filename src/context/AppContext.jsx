import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 400000,
  expenses: [
    {
      id: 2,
      name: "Shopping",
      cost: 2000,
    },
    {
      id: 3,
      name: "Travel",
      cost: 2700,
    },
    {
      id: 5,
      name: "Movie",
      cost: 2000,
    },
    {
      id: 6,
      name: "Rent",
      cost: 9000,
    },
    {
      id: 7,
      name: "Medical",
      cost: 3000,
    },
  ],
};

export const AppContext = createContext();

// provider
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
