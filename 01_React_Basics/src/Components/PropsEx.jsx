import { useState } from "react"



function PropsExample({newName,btnText,btnText2="don't click",arr,obj}){

    // console.log(arr,obj)

    function add(){
        // const h4 = document.querySelector(".h4")
        // return h4.innerHTML = "using JS"
        setName("using React")
    }
    // this is fast and easy way
    // const [anotherName, setName] = useState("using JS")

    const [anotherName, setName] = useState("using JS")

    // console.log(useState)






    return (
        <>
            <h2>{newName}</h2>
            <button onClick={add}>{btnText}</button>
            <br /><br />
            <button>{btnText2}</button>
            <h3>{obj.name}</h3>
            <h4 className="h4">{anotherName}</h4>
        </>
    )
}

export default PropsExample;




