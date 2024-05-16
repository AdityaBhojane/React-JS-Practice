import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CountriesList from './components/CountriesList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SearchBar/>
      <div className="max-w-[80vw] mx-auto my-[50px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CountriesList/>
      </div>
    </>
  )
}

export default App
