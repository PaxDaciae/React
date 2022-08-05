import { useState } from 'react'


const Header = ({ number, findText }) => {
    return (
        <div>
            <p> {number} </p>
            <p> {findText} </p>
        </div>
    )
}

export default Header

// number = {number}