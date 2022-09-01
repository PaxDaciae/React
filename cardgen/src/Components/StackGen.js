import { useState } from "react";
import CardGen from "./CardGen";


function StackGen( {props} ) {

    const [isHovering, setIsHovering] = useState(false)
    // onMouseEnter = {style:} onMouseLeave = {}
    
    function handleMouseEnter(e) {
        console.log("ENTER", e.target)
        setIsHovering(true)
    }

    console.log("PROPS", props, "PROPS_ID", props.id)
    return (
       
        <div className = "stack-flex-holder">
            {props.map((props) => (
                <div key = {props.id} className = {`flex-component ${isHovering? "":"isHovering"}`} onMouseEnter = { handleMouseEnter }>
                    <div>
                    <CardGen props = { [props.color, props.suit, props.number] } />
                    </div>
                </div>
 
            ))}
        </div>
    )

  }

 
   export default StackGen

   /*
   
   const StackGen = ( {props} ) => {
    const listCards = props.map((card) =>
    <li>{`${card.id} --- ${card.number} de ${card.suit}`  }</li>)
    return (
    <div >
        <ul>{listCards}</ul>
    </div>
    )
  }
*/