import { useState } from 'react'

    /*
    numar.lungime
    
    in functie de lungime stabilim:
    *unitati* - x.
    *zeci* - x0.
    *sute* - x00.
    *mii* - x.000.
    *sute de mii* -x00.000
    *milioane* - x.000.000
    *miliarde* - x.000.000.000
    *bilioane* - x.000.000.000.000

        Structura:
    Un x *bilioane*, y (sute, zeci, unitati) *miliarde*, q (sute, zeci, unitati) *milioane*, m (sute, zeci, unitati) *mii*, S (unitati) sute, Z (unitati) *zeci* si U *unitati*.

    xxx.yyy.qqq.mmm.SZU

    ['bilion', 'miliard', 'milion', 'sute de mii', 'mie', 'sute', 'zeci', '']

    */ 


// Array pentru structura numerelor (in progress)


function ThrupletName({ number }) {

  let outcome = '';
  const workingNumber = Array.from(String(number), Number);

  const lungime = workingNumber.length

  if (lungime == 0) {return} else {outcome = lungime};

  // console.log(outcome)
  return outcome

}



export default ThrupletName


