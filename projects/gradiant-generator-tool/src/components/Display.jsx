import React, { useState } from 'react'

export default function Display(props) {
    const [colors, setColors] = useState(
        {
            color1: props.color1,
            colors2: props.color2,
            color3: props.color3
        }
    )

    return (    
             <div className="display">
                <div 
                    className="display--background"
                    style={{background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2}, ${colors.color3})`} }
                    // showinput ? 
                    // {background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2}, ${colors.color3})`} :
                    // {background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2})`}
                    // }
                >
                </div>
                {/* <textarea
                readOnly
                value={`${colors.css2}\r\n${colors.cssMoz}\r\n${colors.cssWeb}`} 
                /> */}
        </div>
    )
} 