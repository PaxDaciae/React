 const CardGen = ( {props} ) => {
   const color = props[0]
   const suit = props[1]
   const number = props[2]
   console.log(color)

   

   function isBackgroundColorRed(color){
      if (color === 'Red') return true;
      else return false;
   }

   const isBackgroundRed = isBackgroundColorRed(color)
   console.log(isBackgroundRed)

   //  style = {{backgroundColor: `${color}`}}

   return <div className = {isBackgroundRed? 'backgroundColor-red' : 'backgroundColor-black'}> 
      <p>
         <br />
         {color}
         {/* {props} */}
      </p>
      <p>
      {suit}
      </p>
      <p>
      {number}
      </p>
   </div>
 }

  export default CardGen