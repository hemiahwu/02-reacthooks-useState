# 02-React-Hooks-useState

## 第一章 课程代码

Git仓库地址: https://github.com/hemiahwu/02-reacthooks-useState

百度网盘链接: https://pan.baidu.com/s/1waHFb70Dh0ZtrB2cRhARfA?pwd=vtg7 提取码: vtg7



课程答疑微信: 

<img src="https://i.postimg.cc/YCWHJWTw/Wechat-IMG233.jpg" alt="WechatIMG233"  />

## 1. 为什么要使用 useState

### 1. 创建 React 项目

- 创建文件夹 02-react-hooks-useState

```bash
npm create vite@latest 02-react-hooks-useState
```

- react typescript
- npm install
- npm run dev

### 2. App.tsx

- 为什么使用 useState

```tsx
function App() {
  let count = 0;

  const handleCount = (num: number) => {
    count += num;
    console.log(count);
  };

  return (

  );
}
```

- 布局结构

```tsx
<>
  <button className="btn" onClick={() => handleCount(-1)}>
    -
  </button>
  <span>{count}</span>
  <button className="btn" onClick={() => handleCount(1)}>
    +
  </button>
</>
```

- 定义 count

```tsx
function App() {
  let count = 0;
}
```

- 定义方法

```tsx
function App() {
  const handleCount = (num: number) => {
    count += num;
    console.log(count);
  };
}
```

## 2. 使用 useState

### 1. App.tsx

- 引入 useState

```tsx
import { useState } from "react";
```

- 定义状态

```tsx
function App() {
  const [count, setCount] = useState<number>(0);
}
```

- 修改状态

```tsx
const handleCount = (num: number) => {
  setCount(count + num);

  console.log(count);
};
```

## 3. 使用 useState 的注意事项

### 1. App.tsx

- 不能再函数组件外使用

```tsx
// 不能在函数组件外使用
const [count, setCount] = useState<number>(0);
```

- useState 的返回值是数组

```tsx
// 返回值是数组
const arr = useState("hello world");
console.log(arr);
```

- 任意 state 发生变化, 组件都将重新渲染 点击+-测试



- 状态值 回调函数 回调只在初始化时执行一次

```tsx
// 回调只在初始化时执行一次
const [count, setCount] = useState<number>(() => {
  console.log("initial value");
  return 0;
});
```

- 抽离回调 将会每次状态变化都执行

```tsx
// 抽离回调 将会每次状态变化都执行
const initialValue = () => {
  console.log("initial value");
  return 0;
};

function App() {
  const [count, setCount] = useState<number>(initialValue());
```

- 箭头调用 将只执行一次

```tsx
// 箭头调用 将只执行一次
const [count, setCount] = useState<number>(() => initialValue());
```

## 4. 更新 State 的细节

- 常规使用

```tsx
setCount(count + num);
```

- 但假设执行两次 后面的将覆盖前面的

```tsx
setCount(count + num);
setCount(count + num);
```

- 回调写法 不会覆盖

```tsx
setCount((prevCount) => prevCount + num);
setCount((prevCount) => prevCount + num);
```

### 3. set 更改对象类型

- 定义对象状态

```tsx
interface State {
  count: number;
  name: string;
}

const [state, setState] = useState<State>({ count: 0, name: "个" });
const { count, name } = state;
```

- 调整结构

```tsx
return (
  <>
    ...
    <span>
      {count}
      {name}
    </span>
    ...
  </>
);
```

- 更新状态

```tsx
const handleCount = (num: number) => {
  setState((prevState: any) => {
    return { count: prevState.count + num };
  });
};

const handleCount = (num: number) => {
  setState((prevState: State) => {
    return { ...prevState, count: prevState.count + num };
  });
};
```

## 5. useState 练习

### 1. App.tsx 还原状态

```tsx
import { useState } from "react";

function App() {
  return <div className="container"></div>;
}

export default App;
```

### 2. 配置样式

- index.css

```css
:root {
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  --clr-primary-5: hsl(205, 78%, 60%);
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  --max-width: 1170px;
  --fixed-width: 450px;
  --clr-orange-1: hsl(12, 83%, 98%);
  --clr-orange-2: hsl(14, 91%, 95%);
  --clr-orange-3: hsl(12, 89%, 89%);
  --clr-orange-4: hsl(13, 87%, 82%);
  --clr-orange-5: hsl(13, 88%, 68%);
  --clr-orange-6: hsl(13, 88%, 55%);
  --clr-orange-7: hsl(13, 74%, 49%);
  --clr-orange-8: hsl(13, 74%, 33%);
  --clr-orange-9: hsl(13, 73%, 25%);
  --clr-orange-10: hsl(13, 73%, 16%);
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1rem;
  }

  body {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

.section,
.container {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

.container {
  text-align: center;
  margin-top: 5rem;
}

.btn {
  display: inline-block;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: var(--transition);
}

.btn:hover {
  background: var(--clr-primary-1);
  color: var(--clr-primary-5);
}

.item {
  background: var(--clr-white);
  display: flex;
  justify-content: space-between;
  max-width: var(--fixed-width);
  margin: 2rem auto;
  align-items: center;
  border-radius: var(--radius);
}

.item button,
.item a {
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  letter-spacing: var(--spacing);
  cursor: pointer;
}

.item {
  padding: 1rem 2rem;
}

.item h4 {
  margin-bottom: 0;
}

.item p {
  margin-bottom: 0;
}

.modal {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--clr-white);
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: var(--radius);
  text-transform: capitalize;
}

.modal p {
  margin-bottom: 0;
  color: var(--clr-red-dark);
}

.form {
  background: var(--clr-white);
  max-width: var(--fixed-width);
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 1rem 2rem;
  border-radius: var(--radius);
}

.form input {
  background: var(--clr-grey-10);
  border-color: transparent;
  border-radius: var(--radius);
  padding: 0.25rem 0.5rem;
}

.form-control {
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
}

.form button {
  display: inline-block;
  background: var(--clr-black);
  color: var(--clr-white);
  border-color: transparent;
  margin-top: 1rem;
  letter-spacing: var(--spacing);
  padding: 0.15rem 0.25rem;
  text-transform: capitalize;
  border-radius: var(--radius);
  cursor: pointer;
}

.nav-links {
  max-width: var(--fixed-width);
  margin: 0 auto;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.nav-links a {
  color: var(--clr-grey-5);
}

.users {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem auto;
}

.users li {
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-radius: var(--radius);
  text-align: left;
}

.users img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.users h4 {
  margin-bottom: 0.15rem;
}

.users a {
  color: var(--clr-grey-5);
  text-transform: capitalize;
}

.products {
  margin: 4rem 0;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 576px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.product {
  background: var(--clr-white);
  border-radius: var(--radius);
}

.product img {
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);

  width: 100%;
  height: 15rem;
  object-fit: cover;
}

.product h4 {
  margin-top: 1rem;
}

.product button {
  margin-bottom: 1rem;
  background: var(--clr-primary-5);
  border-radius: var(--radius);
  border-color: transparent;
  color: var(--clr-white);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  cursor: pointer;
}
```

## 6 useState 的数组应用

#### 1. 创建 components/1-useState-array.tsx

```js
export default function UseStateArray() {
  return <div>useState数组的应用</div>;
}
```

#### 2. App.tsx 引用

```js
// 引入
import Setup from "./components/1-useState-array";

function App() {
  return (
    <div className="container">
    	{* 使用 *}
      <Setup />
    </div>
  );
}

export default App;
```

#### 3. 1-useState-array.tsx

- 定义数据
- 类型匹配
- 配置状态

```js
import { useState } from "react";

// 2. 类型匹配
interface Data {
  id: number;
  name: string;
}

// 1. 定义数据
const data: Data[] = [
  { id: 1, name: "米斯特吴" },
  { id: 2, name: "米修在线" },
  { id: 3, name: "老吴" },
  { id: 4, name: "波哥" },
];

export default function UseStateArray() {
  // 3. 配置状态
  const [people, setPeople] = useState<Data[]>(data);

  return <div>useState数组的应用</div>;
}

```

#### 4. 1-useState-array.tsx

- 数据渲染 jsx

```tsx
return (
  // 遍历数组
  <>
    {people.map((person) => {
      const { id, name } = person;
      return (
        <div key={id} className="item">
          <h4>{name}</h4>
          <buttonn>删除</button>
        </div>
      );
    })}

    {/* 清除所有 */}
    <button className="btn">
      清除所有
    </button>
  </>
);
```

- 实现删除单个元素

```tsx
// 实现删除单个元素
const removeItem = (id:number) => {

}

let newPeople = people.filter((person:Data) => person.id !== id)
setPeople(newPeople)

return (
  <>
    ...
          {/* 添加删除事件 */}
					<buttonn onClick={() => removeItem(id)}>删除</button>
    ...

    {/* 实现清除所有 */}
    <button className="btn" onClick={() => setPeople([])}>
      清除所有
    </button>
  </>
)
```

## 7 useState 的对象应用

#### 1. 创建 components/2-useState-object.js

```js
import { useState } from "react";

// 类型匹配
interface Person {
  name: string;
  age: number;
  message: string;
}

export default function UseStateObject() {
  // 2. 定义对象
  const [person, setPerson] =
    useState <
    Person >
    {
      name: "老吴",
      age: 34,
      message: "前端开发",
    };

  // 5.事件
  const changeMessage = () => {
    // setPerson({ message: 'Hello World' })
    setPerson({ ...person, message: "Hello World" });
  };
  return (
    // 3. 展示数据
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      {/* 4.修改message */}
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
}
```

#### 2. 4-useState-object.js 多状态值

```js
import React, { useState } from 'react'

export default function UseStateObject() {
  ...

  // 另外一种写法
  const [name, setName] = useState('老吴')
  const [age, setAge] = useState(34)
  const [message, setMessage] = useState('前端开发')

  // 事件
  const changeMessage = () => {
    setMessage('Hello World')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>

      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  )
}
```

## 8 useState 实战-计数器

#### 1. 创建 tutorial/1-useState/4-useState-counter.tsx

```js
import React, { useState } from "react";

export default function UseStateCounter() {
  const [value, setValue] = useState(0);
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>计数器</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          重置
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
      </section>
    </>
  );
}
```

#### 2. 5-useState-counter.js 说明 useState 中的回调

```js
import React, { useState } from "react";

export default function UseStateCounter() {
  const [value, setValue] = useState(0);

  // 2.触发事件
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      ...
      {/* 1.useState 回调 */}
      <section style={{ margin: "4rem 0" }}>
        <h2>计数器2</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          延时计数
        </button>
      </section>
    </>
  );
}
```

## 9 useState 项目实战-birthday

- 案例取自网站: https://www.uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042
- 成果展示网站: https://www.thenewstep.cn/react/demo1/

#### 1. index.css

```css
:root {
  --clr-primary-1: hsl(162, 61%, 89%);
  --clr-primary-2: hsl(162, 60%, 78%);
  --clr-primary-3: hsl(162, 61%, 67%);
  --clr-primary-4: hsl(162, 61%, 57%);
  --clr-primary-5: hsl(162, 73%, 46%);
  --clr-primary-6: #1aa179;
  --clr-primary-7: #13795b;
  --clr-primary-8: #0d503c;
  --clr-primary-9: #06281e;
  --clr-grey-1: hsl(212, 33%, 89%);
  --clr-grey-2: hsl(210, 31%, 80%);
  --clr-grey-3: hsl(211, 27%, 70%);
  --clr-grey-4: hsl(209, 23%, 60%);
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 28%, 39%);
  --clr-grey-7: hsl(209, 34%, 30%);
  --clr-grey-8: hsl(211, 39%, 23%);
  --clr-grey-9: hsl(209, 61%, 16%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  --max-width: 1170px;
  --fixed-width: 450px;
  --clr-pink: #f28ab2;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: var(--clr-pink);
  color: var(--clr-grey-9);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1rem;
  }

  body {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

.section {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 90vw;
  margin: 5rem 0;
  max-width: var(--fixed-width);
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  box-shadow: var(--dark-shadow);
}

.container h3 {
  font-weight: normal;
  text-transform: none;
  margin-bottom: 2rem;
}

.person {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

.person img {
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--light-shadow);
}

.person h4 {
  margin-bottom: 0.35rem;
}

.person p {
  margin-bottom: 0;
}

.container button {
  color: var(--clr-white);
  display: block;
  width: 100%;
  border-color: transparent;
  background: var(--clr-pink);
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  letter-spacing: var(--spacing);
  border-radius: var(--radius);
  outline: 1px solid rgba(242, 138, 178, 0.8);
  cursor: pointer;
}
```

#### 2. App.js

```js
import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>以下{people.length} 位今天生日</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>清除</button>
      </section>
    </main>
  );
}

export default App;
```

#### 3.data.js

```js
export default [
  {
    id: 1,
    name: "小吴",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "小张",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "小李",
    age: 36,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "小王",
    age: 34,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "小赵",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];
```

#### 4. List.js

```js
import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} 岁</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
```
