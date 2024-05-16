import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [charAllow,setCharAllow] = useState(false)
  const [password,setPassword] = useState('')

  // simple password generator
  const passwordGen = useCallback(()=>{
    let pass = ''
    let str = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()_?"
    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    } 
    setPassword(pass)
    // console.log(pass)
  }, [length, number, charAllow,setPassword])
  // understand why setPassword is used here

  useEffect(()=>{
    passwordGen()
  },[length,number,charAllow,passwordGen])

  const passRef = useRef(null)

  const CopyPass = useCallback(()=>{
      // window object available here but not in NextJS
      passRef.current?.select()
      passRef.current?.setSelectionRange(0,20)
      window.navigator.clipboard.writeText(password)
  },[password])
  // ADVANCE PASSWORD GENERATOR
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex items-center m-[50px] gap-5">
            <input ref={passRef} type="text" className="bg-[#ccc] w-[40vw] p-2 h-[2vw] rounded-lg text-black outline-none" readOnly value={password}/>
            <button onClick={CopyPass} className='bg-blue-500'>Copy</button>
        </div>
        <div className=" flex justify-evenly items-center gap-5">

          <div className='flex items-center gap-2'>
          <input type="range" value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="#">length {length}</label>
          </div>

          <div className='flex items-center gap-2'>
          <input type="checkbox" id='number' defaultValue={number} onChange={()=>setNumber((pre)=> !pre)}/>
          {/* understand how it working true false */}
          <label htmlFor="number">Number</label>
          </div>

          <div className='flex items-center gap-2'>
          <input type="checkbox" id='sym' defaultValue={charAllow} onChange={()=>setCharAllow((pre)=> !pre)}/>
          <label htmlFor="sym">Symbols</label>
          </div>

        </div>
    </>
  )
}

export default App
