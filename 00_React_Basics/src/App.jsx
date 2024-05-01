import './App.css'
import PropsExample from './Components/PropsEx'

function App() {

  let arr = [1,2,3]
  let obj = {name:"aditya"}

  return (
    <>
     <h1>Components</h1>
     <PropsExample newName = "MS Dhoni" btnText="visit here" arr = {arr} obj={obj}/>
    </>
  )
}
export default App



