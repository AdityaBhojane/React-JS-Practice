const root = document.getElementById("root")

let Element = React.createElement("button",{id:"btn",className:"btn"},"Don'tClick Me")
let Elm = <h2>This is using Babel</h2>
let DOM = ReactDOM.createRoot(root).render(Element)
console.log(Element)



/**
 * in createElement method we have 3 properties 
 * 1st is type means tag name 
 * 2nd is properties means attributes of tag
 * 3rd children means Text or any other tag
 */