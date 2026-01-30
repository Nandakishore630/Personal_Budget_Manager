function ExpenseForm({ expenses, setExpenses }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      name: e.target.name.value,
      amount: Number(e.target.amount.value),
      category: e.target.category.value,
      date: new Date().toISOString(),
    };

    setExpenses([...expenses, expense]);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Expense name" required />
      <input name="amount" type="number" placeholder="Amount" required />
      <select name="category">
        <option>Food</option>
        <option>Transport</option>
        <option>Rent</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
