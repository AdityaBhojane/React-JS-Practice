import React, { useCallback, useState } from 'react'
import {memo} from "react"

export default function MoreCallbacks() {

    const [val,setVal] = useState(0)
   const add = useCallback(()=>{
    return setVal(val => val + 1) // this is how we can fix that 
    },[])
   const remove = useCallback(()=>{
    return setVal(val - 1) 
    },[val]) // re-render of child component happened due to this dependency

  return (
    <div>
        <p>count - {val}</p>
        <br/><br/>
        <RenderHeading add = {add} remove = {remove}/>
    </div>
  )

}
const RenderHeading = memo(({add,remove})=>{
  console.log("i am ruing")
  return<>
        <button onClick={add}>add</button>
        <br/>
        <br/>
        <button onClick={remove}>remove</button>
        <br /> <br />
  </>
})
