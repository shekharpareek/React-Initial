import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
   
  }
  
  const minusValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
   
  }
  

  return (
    <>
        <div>The total counter value : {counter}</div>
      <h1>React 1st App</h1>
        <h4>Counter value : <span>{counter}</span></h4><br></br>
        <button onClick={addValue}>+</button>
        <button onClick={minusValue}>-</button>
    </>
  )
}

export default App
