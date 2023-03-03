 import React, { useEffect } from "react";
 import { useState } from "react";


 export default function Display(props) {
   const [colors, setColors] = useState(
      {
         color1: props.color1,
         color2: props.color2,
         gradient: props.gradient
      }
   )

    return (
        <div className="Display">
           <div 
               className="display--background"
               style={{background: `linear-gradient(${colors.color1}, ${colors.color2})`}}
            ></div>
           <div className="display--CSS">CSS goes here</div>
        </div>
    )
 }

//  style={{background: `linear-gradient(${props.color1}, ${props.color2})`}}