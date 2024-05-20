import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Layout from "./Component/Layout"
function App() {


  return (
    <>
    <BrowserRouter>
      <Layout/>
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/About" element={<About/>} /> 
            <Route path="/Contact" element={<Contact/>} /> 
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
