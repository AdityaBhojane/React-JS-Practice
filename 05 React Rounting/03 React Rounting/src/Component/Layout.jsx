import React from "react";
import { Outlet,useNavigate } from "react-router-dom";

export default function Layout(){
    const navigate = useNavigate()
    return (
        <>
            <header>
                <p className="text-yellow-500 m-5 uppercase">Server side routing (using Navigation Hook)</p>
                <button onClick={()=>navigate("/")} className="border border-white px-4 py-1 rounded-2xl m-4">Go to Home Page</button>
                <button onClick={()=>navigate("/About")} className="border border-white px-4 py-1 rounded-2xl m-4">Go to About Page</button>
                <button onClick={()=>navigate("/Contact")} className="border border-white px-4 py-1 rounded-2xl m-4">Go to Contact Page</button>
                <Outlet/>
            </header>    
        </>
    )
}

/** When using the useNavigate hook, it must be executed within a component 
 * that is inside the BrowserRouter component. If used outside of BrowserRouter,
 *  it will result in an error.*/
