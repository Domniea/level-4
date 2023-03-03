import React from "react";
import { useState } from "react";

export default function Form() {
   const [colors, setColors] = useState(
    {
        color1: '#000000',
        color2: '#000000'
    }
   )

   function handleChange() {
    console.log('test')
   }
   return (
       <div className="Form">
       </div>
   )
}