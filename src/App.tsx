import { useState } from "react";

interface Data {
  id: number;
  name: string;
}

const data: Data[] = [
  { id: 1, name: "米斯特吴" },
  { id: 2, name: "米修在线" },
  { id: 3, name: "老吴" },
  { id: 4, name: "波哥" },
];

function App() {
  const [people, setPeople] = useState<Data[]>(data);
  const removeItem = (id: number) => {
    let newPeople = people.filter((person: Data) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div className="container">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>删除</button>
          </div>
        );
      })}
      {/* 清除所有 */}
      <button className="btn" onClick={() => setPeople([])}>
        清除所有
      </button>
    </div>
  );
}

export default App;
