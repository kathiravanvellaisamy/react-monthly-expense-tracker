import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";
import Spend from "./components/Spend";

function App() {
  return (
    <>
      <div className="container mt-3 border bg-white rounded">
        <h1 className="mt-3 text-secondary">
          React Expenses Tracker [Currency in Yen (¥)]
        </h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spend />
          </div>
        </div>
        <h3 className="mt-3 text-primary">Expenses</h3>
        <ExpenseList />
        <h3 className="mt-3 text-success">Add new Expense</h3>
        <AddExpense />
      </div>
    </>
  );
}

export default App;
