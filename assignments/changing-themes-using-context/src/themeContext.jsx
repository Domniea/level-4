import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


const ThemeContext = createContext()


function ThemeContextProvider(props) {
    
    const [colors, setColors] = useState('light')
    
    function toggle() {
        setColors(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    function handleChange(event) {
        setColors(event.target.value)
   
    }
    
    return (
        <ThemeContext.Provider 
            value ={{
                colors,
                toggle,
                handleChange
            }}
        >
        {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}