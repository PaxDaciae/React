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

   return (
   <div className = {isBackgroundRed? 'backgroundColor-red' : 'backgroundColor-black'}> 
      <p>
         <br />
         {color}
         {/* {props} */}
      </p>
      <p>
      <SuitSelect props={ suit } />
      </p>
      <p>
      {number}
      </p>
   </div>
   )
 }

  export default CardGen