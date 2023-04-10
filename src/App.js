import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [numbers, setNumbers] = useState({number1: '', number2: ''});
  const [result, setResult] = useState(0);
 
  const inputChanged = (event) => {
    setNumbers({...numbers, [event.target.name]: event.target.value});
  }
  
  const inputSum = () => {
    
    setResult(Number(numbers.number1) + Number(numbers.number2));
  }

  const inputSub = () => {
    
    setResult(Number(numbers.number1) - Number(numbers.number2));
  }

  return (
    <div className="App">
      Result = {result}<br />
      <input name="number1" value={numbers.number1} onChange={inputChanged}/>
      <input name="number2" value={numbers.number2} onChange={inputChanged}/>
      <button onClick={inputSum}>+</button>
      <button onClick={inputSub}>-</button>
    </div>
  );
}

export default App;
