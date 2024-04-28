
function PropsExample({newName,btnText,btnText2="don't click"}){
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




