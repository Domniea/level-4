import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext'

function Navbar() {

    const {colors} = useContext(ThemeContext)

    return (
        <div className='Navbar'>
            <h3>Main</h3>
            <h3>Home</h3>
            <h3>Options</h3>
            
        </div>
    )
}

export default Navbar