import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CountriesList from './components/CountriesList'



function App() {
  const [countryFilter, setCountryFilter] = useState('')
  return (
    <>
      <Header/>
      <SearchBar setCountryFilter={setCountryFilter} />
      <div className="max-w-[60vw] mx-auto my-[50px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CountriesList countryFilter={countryFilter}/>
      </div>
    </>
  )
}

export default App
