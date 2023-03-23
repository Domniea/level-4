import React from "react";
import axios from "axios";
import { useContext } from "react";
import { UglyThingContext } from "../context";

function UglyThing(props) {
    
    const {
        uglyArray,
        uglyItem,
        setUglyArray,
        handleChange,
        handleSubmit,
    } = useContext(UglyThingContext)
    
    function deleteUgly() {
        console.log('boobs')
        axios.delete(`https://api.vschool.io/domniea/thing/${props.id}`)
            .then(response => {
                console.log(response)
                setUglyArray([])
                console.log(uglyItem)
            })
            .catch(error => console.log(error))
    }
    
    

    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.imgUrl} style={{'height': '20vh'}} />
            {/* <h2>{props.imgUrl}</h2> */}
            <h2>{props.description}</h2>
            <h4>{props.id}</h4>
            <button onClick={deleteUgly}>Delete</button>
        </div>
    )
}

export default UglyThing