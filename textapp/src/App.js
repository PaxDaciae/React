import './App.css';
import Header from './Components/Header'
import { useState } from 'react'

function App() {

  const [inputText, setInputText] = useState({ lastText: '', text: '' })
  const text = inputText.text;
  const lastText = inputText.lastText;

  const [strings, setStrings] = useState({ string: '' })
 
  // The functions here are used to manipulate text input.
  // This one adds the string in input field to the text
  function addText () {

    var input = document.getElementById('text-input').value
    setInputText(prevState => { return {lastText: input, text: prevState.text + " " + input }})    
    document.getElementById('text-input').value = null;
  
  }

  // This function removes the last character our of the text field & last input field.

  function backSpace(string) {
    let stringTransform = [...text];
    let lastStringTransform = [...lastText]
    stringTransform.pop()
    lastStringTransform.pop()
    setInputText(prevState => { 
      return {text:[...stringTransform].join(''), lastText:[...lastStringTransform].join('')}
    })

  }

  // This function removes the last string from the text field.

  function removeLast ({ string }) {
    let stringTransform = [...text];
    let lastStringTransform = [...lastText];
    const target = lastStringTransform.length
    // trb sa taiel de la text.length-target-1 pana la text.lenght
    let newText = stringTransform.splice(-target, target);
    console.log(target)
    console.log(newText)
    setInputText(prevState => {return {text:[...stringTransform].join(''), lastText: ''}})

  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h1>It is working!</h1>
        <input type = "text" className ="input-text-block" id="text-input" placeholder = "Input text here"></input>
        <br />
        <button type = "button" className = 'btn' onClick = { addText } >Add Text</button>
        <button type = "button" className = 'btn' onClick = { backSpace }>Back Space Text</button>
        <button type = "button" className = 'btn' onClick = { removeLast }>Remove Last Text</button>

        <div>
        <p> Last Text: {`${ inputText.lastText }`}</p>
        <p>{`Text: ${ inputText.text }`}</p>
        </div>
       
        
      </header>
    </div>
  );
}

export default App;


// addText()

 // const text = inputText.text;
  // const lastText = inputText.lastText;

// const text = inputText.text;
    // const lastText = inputText.lastText;
    // console.log(text, lastText)
    // console.log("is added", document.getElementById('text-input').value )
    // setTimeout( document.getElementById('text-input').value = '', 50)
    // console.log("is deleted", document.getElementById('text-input').value )

        // if (document.getElementById('text-input').value = '') {
    //   window.alert("please write something")
    //   return;
    // }


      // (prevState + document.getElementById('text-input').value).toString())  
    // console.log(prevState.toArray())

    // slashText()
        // setInputText(prevState => { console.log(prevState.text)})
      // return { text: [prevState.text].slice(3,5), lastText: '' }} )
    // console.log(document.getElementById('text-input').length)
    // let phraseLength = document.getElementById('text-input').length;
    // console.log(phraseLength)
    // setInputText(prevState => prevState.slice(0, phraseLength-1).toString())