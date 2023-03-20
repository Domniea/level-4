import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


const ThemeContext = createContext()


function ThemeContextProvider(props) {
    
    const [colors, setColors] = useState('light')
    
    function toggle() {
        setColors(prevColor => prevColor === "dark" ? "light" : "dark")
    }
    
    return (
        <ThemeContext.Provider 
            value ={{
                colors: colors,
                toggle: toggle
            }}
        >
        {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}