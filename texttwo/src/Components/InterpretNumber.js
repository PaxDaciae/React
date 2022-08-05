



function InterpretNumbers( value ) {
     
    const number = value.number;

        /* Functia desface numarul in complete de 3 pe puteri, cu multiplii pana la 100 per putere. */

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
        if (modulo !== 0) {
            let finalValue = `10^${nbrObjLength * 3}`;
            numberBreakdown[finalValue] = outsideDivide;
        }
        
        // console.log("numberBreakdown", numberBreakdown)
        return numberBreakdown
        
    }
   
    // number = Array.from(String(number), Number)
    const numberNames = [
        { id: 0, nume:'zero' },
        { id: 1, nume:'unu' },
        { id: 2, nume:'doi' },
        { id: 3, nume:'trei' },
        { id: 4, nume:'patru' },
        { id: 5, nume:'cinci' },
        { id: 6, nume:'sase' },
        { id: 7, nume:'sapte' },
        { id: 8, nume:'opt' },
        { id: 9, nume:'noua' },
        // { id: 10, name:'Zece' },
      ]
      
    const numbers = breakDownNumbers(number);

    const sufixesLower = [ 
        {unitati : ''},
        {zeci: ['zece', 'zeci']},
        {sute: ['suta', 'sute']}
    ]

    /*
        ++++++++=======================+++++++++++++==================+++++++++++++
    const sufuxesHigher = [
        {id: 3, mii: ['mie', 'mii']},
        {id: 6, milioane: ['milion', 'milioane']},
        {id: 9, miliarde: ['miliard', 'miliarde']},
        {id: 12, bilioane: ['bilion', 'bilioane']},
        {id: 15, triliarde: ['trilion', 'triliarde']}
    ]
    ++++++++=======================+++++++++++++==================+++++++++++++
    */

    const sufixesHigher = [
        {id: 0, nume: ['', '']},
        {id: 3, nume: ['mie', 'mii']},
        {id: 6, nume: ['milion', 'milioane']},
        {id: 9, nume: ['miliard', 'miliarde']},
        {id: 12, nume: ['bilion', 'bilioane']},
        {id: 15, nume: ['trilion', 'triliarde']}
    ]
 
        /* Functia asta intoarce numele unei cifre */
    function nameNumber (number) {
        if (typeof number == 'number') {
            const selectedNumber = (numberNames.find(numberNames => numberNames.id === number));
            // console.log("este numar, cu vlaoarea", selectedNumber, selectedNumber.nume)
            return selectedNumber.nume
        } else {
            console.log("Eroare la nameNumber")
            return}
    }

   
        /* Functia asta intoarce lungimea unui element dintr-un obiect */
    const objElemLength = (elem) => {
        let length = 0;
        for (var props in elem) {
            if (elem.hasOwnProperty(props))
            length ++;
        }
    return length;
    }
     
        
        // Functia asta proceseaza obiectul per trinoame initial ca sa produca denumirea cifrelor intr-un trinom //
    function returnNumbers(numbers) {
        let workingNames = [];
        let output = {};
        function fillInNames(numbers, item, length) {
            if (length === 3) {
                // console.log("lungimea este:",3)
                // console.log(numbers[item])
                workingNames[item] = (`${nameNumber(parseInt(numbers[item][length-3]))} ${sufixesLower[2].sute[1]} ${nameNumber(parseInt(numbers[item][length-2]))} ${sufixesLower[1].zeci[1]} si ${nameNumber(parseInt(numbers[item][length-1]))}`)

            } else if (length === 2) {
                // console.log("lungimea este:",2)
                workingNames[item] = (`${nameNumber(parseInt(numbers[item][length-2]))} ${sufixesLower[1].zeci[1]} si ${nameNumber(parseInt(numbers[item][length-1]))}`)

            } else if (length === 1) {
                // console.log("lungimea este:",1)
                workingNames[item] = (`${nameNumber(parseInt(numbers[item][length-1]))}`)

            }
            return workingNames
        }

        for (let i = 0; i < Object.keys(numbers).length; i++) {
                   
            var item = Object.keys(numbers)[i]      
            const length = objElemLength(numbers[item])
            output = fillInNames(numbers, item, length)

                
        }

        return output
            // workingNames = fillInNames(numbers, item, length)
            // console.log("wnames", workingNames)
           
    } 

        /* Pana aici e ok */

    let outcome = returnNumbers(numbers)

        // Functia asta intoarce sufixul pentru fiecare trinom in functie de ^x din key-ul obiectului initial //

    function addSufix(object) {
        let factorial = 0;
        const namedPower = {};
        for (let i = Object.keys(object).length-1; i >= 0; i--) {
            var item = Object.keys(object)[i]      
            factorial = parseInt(item.match(/[0-9]/g).splice(2))
            const sufix = (sufixesHigher.find(sufixesHigher => sufixesHigher.id === factorial))
            namedPower[` 10^${i*3}`] = sufix.nume;
        }
        return namedPower
    }

    const sufixes = addSufix(outcome)

    
    function completeNames(object, array) {
        const finalName = []
        const reverse = (object) => {
            const numere = [];
            for (let item in object) {
                numere.unshift(object[item])
            }
            return numere
        }
        let numere = reverse(object);
        let lungime = numere.length
        const sufixes = Object.values(array);

        for (let i = 0; i < lungime; i ++) {
            const reply = (`${numere[i]} ${sufixes[i][1]}`)
            finalName.push(reply)
            // finalName.push(' ')
        }
        return finalName.join(', ')
    }
    
    // console.log("outcomeis", typeof outcome, outcome.reverse(), "sufix", sufixes)
    // console.log(addSufix(outcome))

    return completeNames(outcome, sufixes)
}


export default InterpretNumbers