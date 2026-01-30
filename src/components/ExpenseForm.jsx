import { useEffect, useState } from "react";

function ExpenseForm({
  expenses,
  setExpenses,
  editingExpense,
  setEditingExpense,
}) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "Food",
    type: "debit",
  });

  // Prefill form when editing
  useEffect(() => {
    if (editingExpense) {
      setForm({
        name: editingExpense.name,
        amount: editingExpense.amount,
        category: editingExpense.category,
        type: editingExpense.type,
      });
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || form.amount <= 0) return;

    if (editingExpense) {
      // UPDATE
      setExpenses(
        expenses.map((e) =>
          e.id === editingExpense.id
            ? { ...editingExpense, ...form }
            : e
        )
      );
      setEditingExpense(null);
    } else {
      // ADD
      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          ...form,
          amount: Number(form.amount),
          date: new Date().toISOString(),
        },
      ]);
    }

    setForm({ name: "", amount: "", category: "Food", type: "debit" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        placeholder="Amount"
      />

      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Rent</option>
        <option>Entertainment</option>
        <option>Shopping</option>
        <option>Vacation</option>
        <option>Other</option>
      </select>

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="debit">Debit</option>
        <option value="credit">Credit</option>
      </select>

      <button>{editingExpense ? "Update" : "Add"} Transaction</button>
    </form>
  );
}

export default ExpenseForm;
