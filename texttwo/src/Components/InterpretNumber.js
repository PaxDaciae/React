
function InterpretNumbers({ number }) {
    console.log("interpret Number number:", number)
    const tempNumber = [];
    const numberBreakdown = [];
    const workingNumber = [];

    const count = function(number) {
    for (let item in number) {
      workingNumber.push(item)
      lungime +=1;
    }
    return count = {
        allNumbers: workingNumber,
        lungime: lungime
        }
}
    const lungime = count.lungime;
    const modulo = ((lungime) % 3);
    const cleanDivide = ((lungime - modulo) / 3);
    /* (numar - (numar % 3) ) / 3 */
    console.log("allNumbers:", count.allNumbers)
    console.log("lungime:", count.lungime)
    console.log("modulo:", modulo)

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


// export default InterpretNumbers