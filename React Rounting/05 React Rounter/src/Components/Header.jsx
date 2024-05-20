import React from "react"
import { Link } from "react-router-dom"


export default function Header(){
    return (
        <>
            <div className="flex justify-around items-center gap-5">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            </div>
        </>
    )
}