const root = document.getElementById("root")

let Element = React.createElement("button",{id:"btn"},"Don'tClick Me")
let DOM = ReactDOM.createRoot(root).render(Element)

/**
 * in createElement method we have 3 properties 
 * 1st is type means tag name 
 * 2nd is properties means attributes of tag
 * 3rd children means Text or any other tag
 */