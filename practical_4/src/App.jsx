import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleIncrement = () => {
    setCount((prev) =>  prev + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  }

  const handleIncrement5 = () => {
    setCount((prev) => prev + 5);
  }

  const handleFirstname = (e) => {
    let value = e.target.value;
    console.log(value);
    setFirstname(value);
  }

  const handleLastname = (e) => {
    let value = e.target.value;
    console.log(value)
    setLastname(value);
  }

  return (
    <>
      <div>
      <h1>Count: {count}</h1>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement5}>Increment by 5</button>
      </div>
      <div>
        <h1>Welcome to charusat</h1>
      </div>
      <div><input name="firstname" onChange={handleFirstname}/></div>
      <div><input name="lastname" onChange={handleLastname}/></div>
      <div>Firstname: {firstname}</div>
      <div>Lastname: {lastname}</div>

    </>
  )
}

export default App
