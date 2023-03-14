import React, { useState } from 'react'

export default function Input(props) {
    const [colors, setColors] = useState(
        {
            color: props.color,
            id: props.id,
            name: props.name
        }
    )
    
    function handleChange() {
        setColors(prevState => {
          const {name, value} = event.target
          return {
            ...prevState,
            [name]: value
          }
        })
    }

    console.log(colors)

    return (
        <div>
            <h1>{`color${colors.id + 1}`}</h1>
            <h3>{colors.color}</h3>
            <input 
                type='color'
                value={colors.color}
                name='color'
                onChange={handleChange}
            />
        </div>
    )
} 