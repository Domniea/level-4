import React, {useState, useContext, createContext} from 'react'


const ThemeContext = createContext()

const [colors, setColors] = useState('light')

function toggle() {
    setColors(prevColor => prevColor === "dark" ? "light" : "dark")
}

function ThemeContextProvider(props) {
    return (
        <ThemeContext.Provider 
            value ={{
                colors,
                toggle
            }}
        >
        {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}