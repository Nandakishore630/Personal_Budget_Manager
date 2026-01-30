function ExpenseList({ expenses, setExpenses, setEditingExpense }) {

  if (expenses.length === 0) {
    return <p>No transactions yet</p>;
  }

  const removeExpense = (id) => {
    const ok = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (!ok) return;

    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Category</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((e) => (
          <tr key={e.id}>
            <td>{new Date(e.date).toLocaleDateString()}</td>
            <td>{e.name}</td>
            <td>{e.category}</td>
            <td style={{ color: e.type === "debit" ? "red" : "green" }}>
              {e.type.toUpperCase()}
            </td>
            <td>₹{e.amount}</td>
            <td>
              <button
  className="edit"
  onClick={() => setEditingExpense(e)}
>
  ✏️ Edit
</button>

 
              <button onClick={() => removeExpense(e.id)} className="delete">🗑 Delete</button>
            </td>
            <td className={e.type === "debit" ? "debit" : "credit"}>
  {e.type.toUpperCase()}
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseList;
