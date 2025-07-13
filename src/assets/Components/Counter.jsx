import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrements() {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "200px"}}>
      <h1 style={{ color: "green" }}>Counter App</h1>
      <h2 style={{ color: "red", marginTop: "50px" }}>Count - {count}</h2>
      <div style={{ marginTop: "50px" }}>
        <button onClick={handleIncrements}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
