import React from "react";
import { Link, NavLink, Outlet} from "react-router-dom";

export default function Layout(){

    return (
        <>
            <header>
                <p className="text-yellow-500 m-5 uppercase">Server side routing (using Navigation Hook)</p>
                <NavLink to="/" className={({isActive})=> `${isActive? "text-red-500":"text-white"} border border-white px-4 py-1 rounded-2xl m-4`}>Go to Home Page</NavLink>
                <NavLink to="/About" className={({isActive})=> `${isActive? "text-red-500":"text-white"} border border-white px-4 py-1 rounded-2xl m-4`}>Go to About Page</NavLink>
                <NavLink to="/Contact" className={({isActive})=> `${isActive? "text-red-500":"text-white"} border border-white px-4 py-1 rounded-2xl m-4`}>Go to Contact Page</NavLink>
                <NavLink to="/GitHub" className={({isActive})=> `${isActive? "text-red-500":"text-white"} border border-white px-4 py-1 rounded-2xl m-4`}>Go to GiHub Page</NavLink>
                <Outlet/>
            </header>    
        </>
    )
}
