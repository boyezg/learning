import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState();
  console.log(count);
  console.log(age);

  const decrement = () => {

  }

  return (
    <>
      <h1>React Javascript</h1>
      <h1>Count:  {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <div>
        <label>Age</label>
      <input value={age} onChange={(e) => setAge(e.target.value)}/>
      </div>
    </>
  )
}

export default App
