import { useState } from 'react'
import './App.css'

function App() {
  // hook
  const [count, setCount] = useState(5)

 function addCounter(){
      setCount(preCount => preCount + 1)
      setCount(preCount => preCount + 1)
  }
 function removeCounter(){
  if(count > 0) setCount(count - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Current Count - {count}</h2>
      <button onClick={addCounter}>Add</button>
      <br />
      <br />
      <button onClick={removeCounter}>Remove</button>
    </>
  )
}

export default App
