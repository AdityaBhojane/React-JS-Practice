import { useState } from 'react'
import './App.css'

function App() {
  // hook
  let [count, setCount] = useState(5)

 function addCounter(){
      setCount(++count)
  }
 function removeCounter(){
  if(count > 0) setCount(--count)
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
