import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState(0);
 
  const inputChanged = (event) => {
    setNumber1({...number1, [event.target.name]: event.target.value});
    setNumber2({...number2,[event.target.name]: event.target.value});
    setResult({...result, [event.target.name]: event.target.value});
  }
  
  const inputSum = () => {
    
    setResult (Number(number1) + Number(number2));
  }

  const inputSub = () => {
    
    setResult(Number(number1) - Number(number2));
  }

  return (
    <div className="App">
      Result = {result}<br />
      <input name="number1" value={number1} onChange={inputChanged}/>
      <input name="number2" value={number2} onChange={inputChanged}/>
      <button onClick={inputSum}>+</button>
      <button onClick={inputSub}>-</button>
    </div>
  );
}

export default App;
