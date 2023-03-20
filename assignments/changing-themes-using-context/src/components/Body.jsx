import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext'

function Body(props) {

    const {colors, toggle} = useContext(ThemeContext)
    // console.log(colors)
    return (
        <div className='Body'>
            <h1>Click button to change theme!</h1>
            <button
                onClick={toggle}
                // className={`${colors}-theme`}
            >Change Theme</button>
        </div>
    )
}

export default Body