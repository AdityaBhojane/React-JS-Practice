import { memo,useState,useCallback,useEffect } from 'react'
import './App.css'
import MoreCallbacks from './components/MoreCallbacks'
import UseRef from './components/useRef'


function App() {
  let [count, setCount] = useState(0)

  let increment = useCallback(()=> setCount((count) => count + 1),[])
  
  useEffect(()=> {
    document.title = count
  },[count])

  return (
    <>
      {/* <NewComponent/> */}
      {/* <button onClick={increment}>click {count}</button> */}
      {/* <MoreCallbacks/> */}
      <UseRef/>
    </>
  )

}

let NewComponent = memo(()=>{
  console.log("i am rendering")
  return(
    <>
      <h2> i am a new element </h2>
    </>
  )
})





// useCallback and useMemo both are 
// same but callback is more readable

// callback me hum ek function se kam kr denge 
// but useMemo me ek aur function return krna padega


// useMemo and memo ye do alag chize hai so mixup na kare
// useMemo ek Hook hai 
// memo ek HOC (higher order component)hai
export default App

/**
 * most used hooks are
 * 
 * useState
 * useEffect (fetch, axios - better and clear version of fetch)
 * useCallback
 * 
//  * kal
 * useRef
 * useContext
 *  
 *  */ 

/**
 * 
 * useState - ( destructuring - store value of array in variable )
 * useEffect - (callback + []) 
 * useCallback - (callback + [])
 * 
 * hoc memo - callback
 */