import IncomeForm from "../components/IncomeForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Balance from "../components/Balance";

function Dashboard({
  income,
  setIncome,
  expenses,
  setExpenses,
  editingExpense,
  setEditingExpense,
}) {
  return (
    <div className="container">
      <h1>Personal Budget Manager</h1>

      <IncomeForm setIncome={setIncome} />

      <Balance income={income} expenses={expenses} />

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />

      <ExpenseList
        expenses={expenses}
        setExpenses={setExpenses}
        setEditingExpense={setEditingExpense}
      />
    </div>
  );
}


export default Dashboard;
