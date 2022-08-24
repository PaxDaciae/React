import './App.css';
import { useState } from 'react'
import CardGen from './Components/CardGen';
// import SuitSelect from './Components/SuitSelect';
// import Hearts from '/Components/images';

function App() {
  console.log("FUNCTION APP STARTS")
  
  const [card, setCardState] = useState( {color: '', suit: '', number: 0} );  
 
  // This function returns a random number between 1 and "nr"
  function generateNumberArray() {
    console.log("FUNCTION GEN_NUMB_ARRAY")
    function generateNumber(nr) {
      const numberOut = (Math.floor(Math.random() * nr) + 1);
      return numberOut
}    
  // These const. contain the data needed to translate random numbers to Color, Suit, and Numbers of cards.
    const colorHardcodes = [
      {ID:1, color: 'Red'},
      {ID:2, color: 'Black'},
    ] 
    
    const suitHardcodes = [
      {color: 'Red', ID:1, suit: 'Diamonds'},
      {color: 'Red', ID:2, suit: 'Hearts'},
      {color: 'Black', ID:1, suit: 'Clubs'},
      {color: 'Black', ID:2, suit: 'Spades'}
    ]

    const numberHardcodes = [
      {ID: 1, number: 'A'},
      {ID: 2, number: '2'},
      {ID: 3, number: '3'},
      {ID: 4, number: '4'},
      {ID: 5, number: '5'},
      {ID: 6, number: '6'},
      {ID: 7, number: '7'},
      {ID: 8, number: '8'},
      {ID: 9, number: '9'},
      {ID: 10, number: '10'},
      {ID: 11, number: 'J'},
      {ID: 12, number: 'Q'},
      {ID: 13, number: 'K'},
      {ID: 14, number: 'Joker'}
    ]

    // temporaryArrays store the raw numbers for card generation. Final array will contain the intepreted qualities of those cards.
    const temporaryArray = {color: generateNumber(2), suit: generateNumber(2), value: generateNumber(14)}
    const finalArray = {color: '', suit: '', number: 0}

    // These functions will populate finalArray with interpreted values. Keep the each command replacing values in the array right after their respective function declaration.
    // This function transforms temporaryArray.color into a string describing the color
    const finalColor = function(temporaryArray) {
      const element = colorHardcodes.find(colorHardcodes => colorHardcodes.ID === temporaryArray.color)
      // console.log("finalColorelement:", element)
      return element.color
    }
    finalArray.color = finalColor(temporaryArray)
  
    // This function transforms temporaryArray.suit and finalArray.color into a string describing the suit
    const finalSuit = function(temporaryArray){
      const element = suitHardcodes.find(suitHardcodes => (suitHardcodes.color === finalArray.color && suitHardcodes.ID === temporaryArray.suit))
        //  console.log("finalSuitElement:", element)
      // console.log("Colors:", finalArray.color)
      // console.log(suitHardcodes.color === finalArray.color)

      // console.log("Suits:", temporaryArray.suit)
      // console.log(suitHardcodes.ID === temporaryArray.suit)
      return element.suit
    }
    finalArray.suit = finalSuit(temporaryArray)
    
    // This function transforms temporaryArray.value into a string describing the number on the card
    const finalNumber = function(temporaryArray){
      const element = numberHardcodes.find(numberHardcodes => (numberHardcodes.ID === temporaryArray.value))
      // console.log("FinalNumberElement:", element)
      return element.number
    }
    finalArray.number = finalNumber(temporaryArray)
    
    // console.log("LA SFARSITUL FUNCTIEI AVEM:", finalArray)
    return finalArray
  }

  // const finalArray = [generateNumberArray().color, generateNumberArray().suit, generateNumberArray().number]
  const almostFinalArray = generateNumberArray()
  const finalArray = [almostFinalArray.color, almostFinalArray.suit, almostFinalArray.number]
  // console.log("final", finalArray, typeof finalArray)

  // This function transfers the stored card details into the application's state.
  function assumeCard(finalArray){
    console.log("FUNCTION ASSUME_CARD")
    setCardState( () => {
      return {color: finalArray[0], suit: finalArray[1], number: finalArray[2]}
    })
  }

  return (
  <div className = "center-container">
    <div className = "vertical-space" />
    <div>
      <div className = "app-container">
        <div className = "card-output">
          {/* <img src={require('./Components/images/Hearts.png')} height={"200"} width={"200"}/> */}
          {/* <SuitSelect props={ finalArray[1] } /> */}
          <CardGen props={ finalArray }/>
          <p>{finalArray}</p>
        </div>
        <div>
       
        </div>
      
      </div>
     
      <div className = "center-container">
        <button className = "button" onClick = { assumeCard }>Generate Card</button>
      </div>
    </div>
  </div>
  );
}

export default App;
