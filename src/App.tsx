import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleCount = (num: number) => {
    setCount(count + num);
    console.log(count);
  };
  return (
    <>
      <button className="btn" onClick={() => handleCount(-1)}>
        -
      </button>
      <span>{count}</span>
      <button className="btn" onClick={() => handleCount(1)}>
        +
      </button>
    </>
  );
}

export default App;
