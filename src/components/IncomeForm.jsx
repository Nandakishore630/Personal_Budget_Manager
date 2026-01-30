function IncomeForm({ setIncome }) {
  return (
    <input
      type="number"
      placeholder="Enter monthly income"
      onChange={(e) => setIncome(Number(e.target.value))}
    />
  );
}

export default IncomeForm;
