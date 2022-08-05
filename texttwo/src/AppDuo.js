import './App.css';
import { useState } from 'react'
import Header from './Components/Header'
import ThrupletName from './Components/NumberType';
import InterpretNumbers from './Components/InterpretNumber';





function App() {

    // State pentru numar si increase/decrease.
  const [numberState, setNumberState] = useState( 0 )
  const number = numberState;
  
    // Array pentru numere si numele numerelor.
  // const [textState, setTextState] = useState([
  //   { id: 0, name:'Zero' },
  //   { id: 1, name:'Unu' },
  //   { id: 2, name:'Doi' },
  //   { id: 3, name:'Trei' },
  //   { id: 4, name:'Patru' },
  //   { id: 5, name:'Cinci' },
  //   { id: 6, name:'Sase' },
  //   { id: 7, name:'Sapte' },
  //   { id: 8, name:'Opt' },
  //   { id: 9, name:'Noua' },
  //   { id: 10, name:'Zece' },
  // ])


  function increase() {
    setNumberState( numberState + 1)
  }
  function decrease() {
    setNumberState( numberState - 1)
  }

    // Partea functionala pentru transcrierea friecarui nr in cuvinte.

    // function numberToText() {
    //   const selectedNumber = (textState.find(textState => textState.id === numberState)).name
    //   const numberComponents = [...selectedNumber]
    //   return numberComponents.join("")
    //   // console.log(numberState)
    //   // return console.log("nr este:", selectedNumber)
    // }

  let toArray = num => Number(num);
  const intArray = Array.from(String(number), toArray)
  console.log("array:", intArray)

  return (
    <div className="App">
      <p>ThrupletName:</p>
      <ThrupletName number = { intArray }/>
      <p>Header:</p>
      <Header number = { number }/>
      {/* <p>InterpretNumbers:</p>
      <InterpretNumbers number = { intArray } /> */}
      
      <button type = 'button' onClick = { increase }></button>
      <button type = 'button' onClick = { decrease }></button>
      {/* <button type = 'button' onClick = { numberToText }>Find Text</button> */}
      {/* <p>{numberToText()}</p> */}
      

    </div>
  );
}

export default App;
