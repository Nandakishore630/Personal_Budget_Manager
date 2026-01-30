import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { useAuth } from "./context/AuthContext";

function App() {
  // 🔐 AUTH
  const { user, logout } = useAuth();

  // 💰 EXISTING APP STATE (KEEP THIS)
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  // 💾 EXISTING LOCAL STORAGE LOGIC
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("budget"));
    if (data) {
      setIncome(data.income);
      setExpenses(data.expenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "budget",
      JSON.stringify({ income, expenses })
    );
  }, [income, expenses]);

  // 🔒 AUTH GATE (ONLY THIS PART IS NEW)
  if (!user) {
    return (
      <>
        <Signup />
        <Login />
      </>
    );
  }

  // ✅ ORIGINAL APP RENDERS UNCHANGED
  return (
    <>
      <button className="logout" onClick={logout}>Logout</button>


      <Dashboard
        income={income}
        setIncome={setIncome}
        expenses={expenses}
        setExpenses={setExpenses}
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />
    </>
  );
}

export default App;
