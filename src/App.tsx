import { useState } from "react";

const initialValue = () => {
  console.log("initial value");
  return 0;
};

function App() {
  interface State {
    count: number;
    name: string;
  }
  const [state, setState] = useState<State>({ count: 0, name: "个" });
  const { count, name } = state;

  const handleCount = (num: number) => {
    // setCount(count + num);
    // setCount(count + num);
    // setCount((prevCount) => prevCount + num);
    // setCount((prevCount) => prevCount + num);

    setState((prevState: State) => {
      return { ...prevState, count: prevState.count + num };
    });
  };
  return (
    <>
      <button className="btn" onClick={() => handleCount(-1)}>
        -
      </button>
      <span>
        {count}
        {name}
      </span>
      <button className="btn" onClick={() => handleCount(1)}>
        +
      </button>
    </>
  );
}

export default App;
