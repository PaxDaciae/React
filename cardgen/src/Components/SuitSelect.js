// import { useState } from 'react'

const SuitSelect = ( {props} ) =>{

    function returnSuit(props){
        console.log("props este ",props)
        const path = (`./images/${props}.png`)
        return path
    }


    const path = returnSuit(props)

    return (
    <div>
            <img src={require(`${path}`)} height={"50"} width={"50"} alt=""/>
    </div>
    )

}
export default SuitSelect

/* 
 function  = React.createClass({
    render: function(suit) {
        return <img src = {'./Components/images' + suit + '.PNG'}></img>
    }
*/