import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Layout from "./Component/Layout";
import User from "./Component/User";
import Github from "./Component/Github";
import GitHubLoader from "./GitHubLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>} /> 
    <Route path="About" element={<About/>} /> 
    <Route path="Contact" element={<Contact/>} /> 
    <Route path="user/:userId" element={<User/>}/>
    {/* <Route  path="GitHub" element={<GitHub/>}/> */}
    <Route 
     loader={GitHubLoader}
     path="GitHub"
     element={<Github/>}/>        // this loader attribute works only if we use createBrowserRouter otherwise it throws an error
  </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
