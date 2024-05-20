import React from "react";
import { Outlet,Link } from "react-router-dom";

export default function Layout(){

    return (
        <>
            <header>
                <p className="text-yellow-500 m-5 uppercase">Server side routing</p>
                <button 
                onClick={()=>{
                    window.location.href = "/"
                }} className="border border-white px-4 py-1 rounded-2xl m-4">Go to Home Page</button>
                <button onClick={()=>{
                    window.location.href = "/About"
                }} className="border border-white px-4 py-1 rounded-2xl m-4">Go to About Page</button>
                <button onClick={()=>{
                    window.location.href = "/Contact"
                }} className="border border-white px-4 py-1 rounded-2xl m-4">Go to Contact Page</button>
                <Outlet/>
            </header>

            <header className="mb-10">
                <p className="text-yellow-500 m-5 uppercase">client side routing</p>
                <Link to="/" className="border border-white px-4 py-1 rounded-2xl m-4">Go to Home Page</Link>
                <Link to="/about" className="border border-white px-4 py-1 rounded-2xl m-4">Go to About Page</Link>
                <Link to="/contact" className="border border-white px-4 py-1 rounded-2xl m-4">Go to Contact Page</Link>
            </header>
        </>
    )
}
