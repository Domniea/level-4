import React from "react";
import { useState } from "react";

export default function Inputs(props) {
   const [count, setcount] = useState(props.number)
   const [color, setColor]= useState(props.color)

   function handleChange() {
    console.log('test')
   }
   return (
       <div className="Inputs">
            <div className="input--container">
              <label htmlFor="color">Color {count}</label>
              <h3>{color}</h3>
              <input 
                  type='color'
                  name='color'
                  value={props.color}
                  onChange={handleChange}  
              />
          </div>
       </div>
   )
}