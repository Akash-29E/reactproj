import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold text-shadow-lg text-black bg-green-500 p-4 w-3/4 text-center rounded-2xl">Hello, Tailwind!</h1>
      <Card channel="News"/>
      <Card channel="Sports"/>
      <Card channel="Entertainment"/>

    </>
  )
}
export default App
