import React,{useState} from 'react'
import "./App.css"
const App = () => {
  const [input,setInput]=useState("")
  const [result,setResult]=useState("")
  const handler=(e)=>{
    setInput(e.target.value)
  }
  return (
    <div>
      <center>
      <input type="text" value={input} placeholder="name" onChange={handler}/><br/>
       <input type="button" value="submit" onClick={()=>{setResult(eval(input))}}/><br/>
       RESULT IS :{result}<br/>
       <button onClick={()=>{setInput(input+"1")}}>1</button>
       <button onClick={()=>{setInput(input+"2")}}>2</button>
       <button onClick={()=>{setInput(input+"3")}}>3</button><br/>
       <button onClick={()=>{setInput(input+"4")}}>4</button>
       <button onClick={()=>{setInput(input+"5")}}>5</button>
       <button onClick={()=>{setInput(input+"6")}}>6</button><br/>
       <button onClick={()=>{setInput(input+"7")}}>7</button>
       <button onClick={()=>{setInput(input+"8")}}>8</button>
       <button onClick={()=>{setInput(input+"9")}}>9</button><br/>
       <button onClick={()=>{setInput(input+"+")}}>+</button>
       <button onClick={()=>{setInput(input+"-")}}>-</button>
       <button onClick={()=>{setInput(input+"*")}}>*</button><br/>
       <button onClick={()=>{setInput(input+"/")}}>/</button>
       <button onClick={()=>{setInput(input+"%")}}>%</button>
       <button onClick={()=>{setInput(input+"^")}}>^</button><br/>
       </center>
    </div>
  )
}
export default App