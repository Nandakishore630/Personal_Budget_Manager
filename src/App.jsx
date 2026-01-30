import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("App loaded");
  }, []);

  return <h1>Budget Manager</h1>;
}

export default App;
