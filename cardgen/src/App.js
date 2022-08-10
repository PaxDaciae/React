import './App.css';
import { useState } from 'react'
import NumberGen from './Components/NumberGen';


function App() {

  
  const [number, setNumber] = useState( {number: 0} );
  const cardNumber = number.number;
  
  function writeOut () {
    function randNumb() {
      const number = (Math.floor(Math.random() * 100) + 1);
      return number
   }
   randNumb()
  }
  
 
  return (
  <div>
    <p> no meanie </p>
    <div className = "app-container">
      <div className = "card-output">
        <div className = "card-container">
            <p> {cardNumber} </p>
            <p className = "output"> {writeOut} </p>
            <h1>
            {/* {4* <NumberGen value={ 5 }/> } */}
            </h1>
        </div>
    
      </div>
    
      {/* <hr class = "card-divider"></hr> */}
      <br />
      <button onClick = { writeOut }>Generate Card</button>
      {/* <button onClick = { consoleLog("distanta") }>console</button> */}

    </div>
      
    
     
  
  </div>
  );
}

export default App;
