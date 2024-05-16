import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

function StateEffectCallbackHook() {
  // Define a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  useEffect(()=>{
    // this function run if change occur in count which is 
    // put as 2nd parameter in array after this func
    document.title = `current count ${count}`
  },[count])

  // callback function
  let updateCount = useCallback(() => {
    console.log(count) // memoization old original value
    return setCount((count)=> count + 1)
  },[])
  // let updateCount = useCallback(() => setCount(count + 1),[count])
  // count added to prevent unnecessary re-renders 

  return (
    <div>
      {/* Display the current count */}
      <p className='m-4'>Count (using useState): {count}</p>
      {/* Button to increment the count */}
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}

export default StateEffectCallbackHook;


// useState  - use to update values / add dynamic data
// useEffect - use to handle side effect of components
// useCallback - use for better optimization it prevent re-render 
