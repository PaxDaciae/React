import { useState } from "react";
import CardGen from "./CardGen";


function StackGen( {props} ) {

    const secondArray = [...props]

    const [cardStack, setCardStack] = useState ([])
    const [isSelected, setIsSelected] = useState()

    // function setStackState() {
    //      setIsSelected(() => [...secondArray])
    //     }
    

    console.log("STKGEN+PROSP", props, "SECARRY", isSelected)

    // setIsSelected(() => ([...isSelected, props]))
    function buttonClick(e){

        // setIsSelected(() => ([...isSelected, ]))
        
        const text = `${e.currentTarget.className}`
        console.log("TXT", text)
        console.log(text.search("isNotSelected"))
        console.log(text.search("isSelected"))
        console.log(text.search("button-flex"))

        // console.log
        console.log("cardClicked", `ID: ${e.currentTarget}`,`THIS_ID ${e.currentTarget.innerHTML}`)
    }

    console.log("PROPS", props, "PROPS_ID", props.id)
    return (
       

        // Here we create the flexbox container for the card stack and iterate each item in state, through the CardGen component, to render them in the Flexbox.

        <div className = "stack-flex-holder">
            
            {props.map((props) => (
                <button  key = {props.id} className = {`button-flex ${isSelected? "isSelected":"isNotSelected"}`} onClick = {buttonClick}>
                    <div className = { 'flex-component'}>
                        <p>{props.id}</p>
                        <CardGen props = { [props.color, props.suit, props.number] } />
                    </div> 
                </button>
            ))}
            
        </div>
    )

  }

 
   export default StackGen