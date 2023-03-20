import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext'

function Body(props) {

    const {colors, toggle, handleChange} = useContext(ThemeContext)
    // console.log(colors)
    return (
        <div className='Body'>
            <h1>Click button to change theme!</h1>
            {/* <button
                onClick={toggle}
                // className={`${colors}-theme`}
            >Change Theme</button> */}
            <select
                name='themeSelect'
                id='selector'
                onChange={handleChange}
            >
                <option value='light'>Light Theme</option>
                <option value='dark'>Dark Theme</option>
                <option value='new'>90's Theme</option>
            </select>

        </div>
    )
}

export default Body