
function PropsExample({newName,btnText,btnText2="don't click",arr,obj}){
    console.log(arr,obj)

    return (
        <>
            <h2>{newName}</h2>
            <button>{btnText}</button>
            <br /><br />
            <button>{btnText2}</button>
        </>
    )
}

export default PropsExample;




