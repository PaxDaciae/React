import './App.css';
import { useState } from 'react'
import Header from './Components/Header'
import ThrupletName from './Components/NumberType';
import InterpretNumbers from './Components/InterpretNumber';





function App() {

    // State pentru numar si increase/decrease.
  const [numberState, setNumberState] = useState( { number: 0 } )
  const number = numberState;

  function useNumber () {
    setNumberState(prevState => { return {number: document.getElementById('numberInput')}})
    console.log(numberState)    
  }

  return (
    <div className="App">
      <p>ThrupletName:</p>
      <ThrupletName number = { numberState }/>
      <p>Header:</p>
      <Header number = { number }/>
      <input id = 'numberInput' type = 'text' placeholder = 'Input number here'></input>
      <button type = 'button' onClick = { number }> Submit number </button>

  
      

    </div>
  );
}

export default App;
