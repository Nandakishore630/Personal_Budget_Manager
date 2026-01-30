function Balance({ income, expenses }) {
  const totalExpense = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const balance = income - totalExpense;

  return (
    <h2>Balance: ₹{balance}</h2>
  );
}

export default Balance;
