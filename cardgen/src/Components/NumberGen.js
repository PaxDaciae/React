 const NumberGen = ( {value} ) => {
    const number = (Math.floor(Math.random() * parseInt(value)) + 1);
    return number
 }

  export default NumberGen