import IncomeForm from "../components/IncomeForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Balance from "../components/Balance";

function Dashboard({ income, setIncome, expenses, setExpenses }) {
  return (
    <div>
      <h1>Personal Budget Manager</h1>

      <IncomeForm setIncome={setIncome} />
      <Balance income={income} expenses={expenses} />
      <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
