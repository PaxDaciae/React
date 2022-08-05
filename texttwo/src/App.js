import './App.css';
import { useState } from 'react'
import Header from './Components/Header'
import ThrupletName from './Components/NumberType';
import InterpretNumbers from './Components/InterpretNumber';

function App() {

  const [numberState, setNumberState] = useState( {number: 0} )
  const number = numberState.number;

  function useNumber () {
    
    setNumberState(prevState => { return {...prevState, number: parseInt(document.getElementById('numberInput').value)}})

    
  }

  return (
    <div className="App">
      <h1> Please use a maximum of 16 characters </h1>

      <input id = 'numberInput' type = 'text' placeholder = 'Input number here' defaultValue = {0} ></input>
      <button type = 'button' onClick = { useNumber }> Submit number </button>
      <Header />
      {/* <h2> Lungime: <ThrupletName number = { number }/> </h2> */}
      {/* <ThrupletName number = {number}/> */}
      <h2 style ={{ color: 'yellow', width: 800 }}> <InterpretNumbers number = { number }/> </h2> 
     
    </div>
  );
}

export default App;
