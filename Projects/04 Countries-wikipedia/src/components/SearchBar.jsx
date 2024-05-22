import { useState } from "react"

export default function SearchBar({setCountryFilter}){

    return (
        <>
            <div className="flex justify-around items-center m-5">
                <input className="border w-1/4 h-10 pl-2 ml-20" type="text" placeholder="Find your country" onChange={(e)=> setCountryFilter(e.target.value)}/>
                <p className="mr-44">Filter</p>
            </div>
        </>
    )
}