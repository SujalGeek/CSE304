import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

  return (
    <div className='container'>
      <div className='heading-1'>Welcome to Charusat</div>
      <div className='content'>The date is: {currDate}</div>
      <div className='content'>The time is: {currTime}</div>
    </div>
  )
}

export default App
