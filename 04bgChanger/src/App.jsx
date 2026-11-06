
import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-300" style={{ backgroundColor: color }}>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 w-full">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-amber-100 rounded-2xl">
          <button className="px-4 py-1 bg-red-500 text-white rounded-2xl" onClick={() => setColor("red")}>Red</button>
          <button className="px-4 py-1 bg-green-500 text-white rounded-2xl" onClick={() => setColor("green")}>Green</button>
          <button className="px-4 py-1 bg-blue-500 text-white rounded-2xl" onClick={() => setColor("blue")}>Blue</button>
          <button className="px-4 py-1 bg-yellow-500 text-white rounded-2xl" onClick={() => setColor("yellow")}>Yellow</button>
          <button className="px-4 py-1 bg-olive-500 text-white rounded-2xl" onClick={() => setColor("olive")}>Olive</button>
        </div>
      </div>
    </>
  )
}

export default App
