import React from "react"
import { Link } from "react-router-dom"


export default function Header(){
    return (
        <>
            <div className="flex justify-around items-center gap-5 m-5">
            <nav>
                <ul>
                    <li className="border border-white px-4 py-1 rounded-xl m-2"><Link to="/">Home</Link></li>
                    <li className="border border-white px-4 py-1 rounded-xl m-2"><Link to="/About">About</Link></li>
                    <li className="border border-white px-4 py-1 rounded-xl m-2"><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            </div>
        </>
    )
}