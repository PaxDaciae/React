const numberNames = [
    { id: 0, name:'zero' },
    { id: 1, name:'unu' },
    { id: 2, name:'doi' },
    { id: 3, name:'trei' },
    { id: 4, name:'patru' },
    { id: 5, name:'cinci' },
    { id: 6, name:'sase' },
    { id: 7, name:'sapte' },
    { id: 8, name:'opt' },
    { id: 9, name:'noua' },
    // { id: 10, name:'Zece' },
  ]
  
function nameNumber (number) {
    const selectedNumber = (numberNames.find(numberNames => numberNames.id === number))
    return selectedNumber.name
}

function breakDownNumbers(number) {

    const numberBreakdown = {};
    let workingNumber = number.toString().split('')
    let lungime = workingNumber.length
    let modulo = (lungime % 3);
    const outsideDivide = workingNumber.slice(0, modulo)
    const insideDivide = workingNumber.slice(modulo)
    
    var qCounter = -3
    for (let i = insideDivide.length-3; i >= 0 ; i -= 3) {
        qCounter = qCounter +3 ;
        numberBreakdown[ `10^${qCounter}` ] = [insideDivide[i], insideDivide[i+1], insideDivide[i+2]]
        
    }

    let nbrObjLength = Object.keys(numberBreakdown).length
    let finalValue = `10^${nbrObjLength * 3}`;
    numberBreakdown[finalValue] = outsideDivide;

    return numberBreakdown
    
}

function InterpretNumbers(number) {
    const numbers = breakDownNumbers(number);
    const workingNames = {};    

    const sufixesLower = [ 
        {unitati : ''},
        {zeci: ['zece', 'zeci']},
        {sute: ['suta', 'sute']}
    ]
        
    const sufuxesHigher = [
        {mii: ['mie', 'mii']},
        {milioane: ['milion', 'milioane']},
        {miliarde: ['miliard', 'miliarde']},
        {bilioane: ['bilion', 'bilioane']},
        {triliarde: ['trilion', 'triliarde']}
    ]

    const objLength = (obj) => {
        let length = 0;
        for (var props in obj) {
            if (obj.hasOwnProperty(props))
            length ++;
        }
    return length;
    }
    
    for (let item in numbers) {
  
        let length = numbers[item].length
        workingNames[item] = (`${nameNumber(parseInt(numbers[item][length-3]))} ${sufixesLower[2].sute[1]} ${nameNumber(parseInt(numbers[item][length-2]))} ${sufixesLower[1].zeci[1]} si ${nameNumber(parseInt(numbers[item][length-1]))}`)
 
        return workingNames[item]

    }

}


export default InterpretNumbers