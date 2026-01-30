import { useState } from "react";

function IncomeForm({ setIncome }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value <= 0) return;
    setIncome(Number(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter monthly income"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Set Income</button>
    </form>
  );
}

export default IncomeForm;
