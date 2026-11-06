import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [specialAllow, setSpecialAllow] = useState(false)
  const [password, setPassword] = useState('')

//useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (specialAllow) str += "!@#$%^&*()_+[]{}|;:,.<>?"
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [length, numAllow, specialAllow, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, specialAllow, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-gray-500 bg-gray-800 py-3">
        <h1 className="text-4xl text-center text-white py-4">Password Generator</h1>
        <div className="mt-4 text-center py-4 my-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
        </div>
        <div className="mb-4 bg-white flex shadow rounded-lg overflow-hidden py-1">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3"
            placeholder="Your generated password"
            ref={passwordRef}
          />
          <button
            className=" outline-none px-3 py-0.2 m-0 shrink-0 bg-green-400 text-white rounded-lg"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>
        <div className="flex text-white gap-x-2.5 text-sm wrap">
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-fit cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id="numAllow"
              checked={numAllow}
              onChange={() => setNumAllow(!numAllow)}
            />
            <label htmlFor="numAllow">Include Numbers</label>
            <input
              type="checkbox"
              id="specialAllow"
              checked={specialAllow}
              onChange={() => setSpecialAllow(!specialAllow)}
            />
            <label htmlFor="specialAllow">Include Special Characters</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
