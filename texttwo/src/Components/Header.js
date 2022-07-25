import { useState } from 'react'


const Header = ({ number, findText }) => {
    return (
        <div>
            <h1> Header </h1>
            <p> Please use a maximum of 16 characters</p>
            <p> {number} </p>
            <p> {findText} </p>
        </div>
    )
}

export default Header

// number = {number}