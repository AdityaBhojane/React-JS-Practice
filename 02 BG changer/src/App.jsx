import { useState } from 'react'

function App() {
  const [bodyColor, setBodyColor] = useState('bg-[#484848]')

  return (
    <>
    <div className={`max-w-screen h-screen ${bodyColor}`}>
        <div className="w-[90vw] h-[5vw] absolute bottom-5 text-center">
            <button onClick={() =>  setBodyColor("bg-[crimson]")} className='px-10 py-2 bg-[crimson] rounded-full text-white mx-2 border'>Crimson</button>
            <button onClick={() => setBodyColor("bg-[Purple]")} className='px-10 py-2 bg-[Purple] rounded-full text-white mx-2 border'>Purple</button>
            <button onClick={() => setBodyColor("bg-[Silver]")} className='px-10 py-2 bg-[Silver] rounded-full text-white mx-2 border'>Silver</button>
            {/* MORE WAYS TO DO THIS THING */}
            <div style={{backgroundColor:bodyColor}} className="w-10 h-10 absolute top-10 left-10 border" ></div>
            <button style={{backgroundColor:"red"}} onClick={() => setBodyColor("red")} className='px-10 py-2  rounded-full text-white mx-2 border'>Red</button>
        </div>
    </div>
    </>
  )
}

export default App
