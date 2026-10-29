import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = () => {
    if (counter < 20) {
      counter += 1
      setCounter(counter)
      console.log('value added', counter)
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      counter -= 1
      setCounter(counter)
      console.log('value removed', counter)
    }
  }
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

      
    </>
  )
}

export default App
