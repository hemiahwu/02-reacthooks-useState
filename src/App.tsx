function App() {
  let count = 0;

  const handleCount = (num: number) => {
    count += num;
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
