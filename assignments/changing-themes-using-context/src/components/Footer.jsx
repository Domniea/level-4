import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

function Footer() {

    const {colors} = useContext(ThemeContext)

    return (
        <div className='Footer'>
            <h3>Footer</h3>
        </div>
    )
}

export default Footer