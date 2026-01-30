function Balance({ income, expenses }) {
  const netExpense = expenses.reduce((total, e) => {
    return e.type === "debit"
      ? total + e.amount
      : total - e.amount;
  }, 0);

  const balance = income - netExpense;

  return (
   <div className="balance">
  <div className="income">
    <h3>Income</h3>
    <p>₹{income}</p>
  </div>

  <div className="expense">
    <h3>Net Expense</h3>
    <p>₹{netExpense}</p>
  </div>

  <div className="final">
    <h3>Balance</h3>
    <p>₹{income - netExpense}</p>
  </div>
</div>

  );
}

export default Balance;
