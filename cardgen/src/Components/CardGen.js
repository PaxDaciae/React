import SuitSelect from './SuitSelect';


 const CardGen = ( {props} ) => {
   const color = props[0]
   const suit = props[1]
   const number = props[2]
   // console.log("CARD_GEN_SUIT:", suit, props[0])

   

   function isBackgroundColorRed(color){
      if (color === 'Red') return true;
      else return false;
   }

   const isBackgroundRed = isBackgroundColorRed(color)

   function pickColor() {
      return (isBackgroundRed? "backgroundColor-red" : "backgroundColor-black")
   }

   return (
      <div>
         <div className = {`card-output ${pickColor()}`}> 
         
            <div className = {"card-interior"}>
               <SuitSelect props={ suit } />
            
               <h1>
                  {number}
               </h1>
            </div>
         </div>
      </div>
   
   )
 }

  export default CardGen