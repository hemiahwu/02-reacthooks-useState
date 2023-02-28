import { useState } from "react";

// 抽离回调 将会每次状态变化都执行
const initialValue = () => {
  console.log("initial value");
  return 0;
};

function App() {
  // 回调只在初始化时执行一次
  const [count, setCount] = useState<number>(() => initialValue());

  // 返回值是数组
  const arr = useState("hello world");
  console.log(arr);

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
