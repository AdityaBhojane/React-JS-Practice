import { useMemo, useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] =  useState(1)

  let sum = useMemo(() => {
    let a = 0;
    for (let i = 1; i <= value; i++) {
      a = a + i
    }
    return a
  }, [value])


  return (
    <>
      <input onChange={(e)=> setValue(e.target.value)} value={value} className='border rounded-2xl px-2' placeholder='Put some value here'/> 
      <p>Sum of - {value} form 1 is - {sum}</p>
      <button onClick={()=> setCount(count+1)} className='border rounded-xl p-2 m-2'>counter ({count  })</button>
    </>
  )
}

export default App
