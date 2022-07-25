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
    // const numberComponents = [...selectedNumber]
    return selectedNumber.name
}

function breakDownNumbers(number) {
    // number = number.toString()
    // console.log(number)
    const numberBreakdown = {};
    
    
    // let toArray = num => Number(num);
    // const workingNumber = Array.from(String(number), toArray)
    let workingNumber = number.toString().split('')
    // console.log("array este:", workingNumber)
    // console.log(number.toString().split(''))

        // la numere foarte lungi ~19 caractere, inlocuieste ultimele cu 0 

        
    let lungime = workingNumber.length
    let modulo = (lungime % 3);

    // console.log(modulo)

    const outsideDivide = workingNumber.slice(0, modulo)
    const insideDivide = workingNumber.slice(modulo)
    // console.log("workingNumber", workingNumber, "lungime", lungime, "outsideDivide", outsideDivide, "insideDivide", insideDivide)
    
    var qCounter = -3
    for (let i = insideDivide.length-3; i >= 0 ; i -= 3) {
        // console.log("leng:", insideDivide.length, "i:", i)
        qCounter = qCounter +3 ;
        // console.log("cealalta optiune:", [insideDivide[i], insideDivide[i+1], insideDivide[i+2]])
        numberBreakdown[ `10^${qCounter}` ] = [insideDivide[i], insideDivide[i+1], insideDivide[i+2]]
        // console.log("I este", i)
        // console.log([insideDivide[i], insideDivide[i+1], insideDivide[i+2]])

        
    }

    let nbrObjLength = Object.keys(numberBreakdown).length
    let finalValue = `10^${nbrObjLength * 3}`;
    numberBreakdown[finalValue] = outsideDivide;

    return numberBreakdown


    // const count = function(number) {
    
    // return count = {
    //     allNumbers: workingNumber,
    //     lungime: lungime
    //     }
// }
//     const lungime = count.lungime;
//     const modulo = ((lungime) % 3);
//     const cleanDivide = ((lungime - modulo) / 3);
//     /* (numar - (numar % 3) ) / 3 */
//     console.log("allNumbers:", count.allNumbers)
//     console.log("lungime:", count.lungime)
//     console.log("modulo:", modulo)

    // console.log(numberBreakdown.push([number.slice(0, modulo)]))

    /*
    for (let q = 0; q = cleanDivide + 1; q++) {
        for (let i = 0; i < modulo ; i++) {
            tempNumber.push(workingNumber[i])
        }
        for 
    }
    */
    
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
    
    // for (let i = objLength; i = 0; i --) {
    //     console.log(numbers.)
    // }

    // return objLength
    // console.log(Object.keys(numbers))
    // console.log("lenght:", objLength(numbers))
    // var name = nameNumber(number)
    for (let item in numbers) {
        // console.log ("itemul", item, "este:", numbers[item])
        // console.log (`${numbers[item][0]} sute ${numbers[item][1]}zeci si ${numbers[item][2]}`)
        let length = numbers[item].length
        workingNames[item] = (`${nameNumber(parseInt(numbers[item][length-3]))} ${sufixesLower[2].sute[1]} ${nameNumber(parseInt(numbers[item][length-2]))} ${sufixesLower[1].zeci[1]} si ${nameNumber(parseInt(numbers[item][length-1]))}`)
        /*
        if (length == 3) {
            if (numbers[item][2] != 0) {
                workingNames[item] = (`${nameNumber(numbers[item][2])}`)
            } 
            if (numbers[item][1] = 1 && numbers[item][2] != 0)



            if (numbers[item][0] != 0 && numbers[item][1] != 0 && numbers[item][2] != 0) {
                workingNames[item] = (`${numbers[item][length-3]} ${sufixesLower[2].sute[1]} ${numbers[item][length-2]} ${sufixesLower[1].zeci[1]} si ${numbers[item][length-1]}`)
            }
            
        } else if (length == 2) {
            workingNames[item] = (`${numbers[item][length-2]} ${sufixesLower[1].zeci[1]} si ${numbers[item][length-1]}`)
        } else if (length == 1) {
            workingNames[item] = (`${numbers[item][length-1]}`)
        } else if (length == 0) {
            return
        }
        */
        console.log (workingNames[item])


        // if (length > 2) {console.log('yes')} else {console.log(no)}
        // workingNames[item] = (`${numbers[item][length-3]} ${sufixesLower[2].sute[1]} ${numbers[item][length-2]} ${sufixesLower[1].zeci[1]} si ${numbers[item][length-1]}`)


            /*
        if (length = 3) {
            workingNames[item] = (`${numbers[item][length-3]} ${sufixesLower[2].sute[1]} ${numbers[item][length-2]} ${sufixesLower[1].zeci[1]} si ${numbers[item][length-1]}`)
            console.log (workingNames[item])

        }
        if (length = 2) {
            workingNames[item] = (`${numbers[item][length-2]} ${sufixesLower[1].zeci[1]} si ${numbers[item][length-1]}`)
            console.log (workingNames[item])

        }
        if (length = 1) {
            workingNames[item] = (`${numbers[item][length-1]}`)
            console.log (workingNames[item])

        }
        // console.log (workingNames[item])
        // return workingNames[item]
        */
    }

}


// export default InterpretNumbers