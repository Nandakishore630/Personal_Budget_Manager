function ExpenseList({ expenses, setExpenses }) {
  const removeExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <ul>
      {expenses.map((e) => (
        <li key={e.id}>
          {e.name} - ₹{e.amount} ({e.category})
          <button onClick={() => removeExpense(e.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
