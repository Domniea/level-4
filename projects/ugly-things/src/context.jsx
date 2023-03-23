import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

const UglyThingContext = createContext()

function UglyThingContextProvider(props) {

    const [uglyItem, setUglyItem] = useState(
        {
            imgUrl: '',
            title: '',
            description: '',
            id: ''
        }
    )

    const [uglyArray, setUglyArray] = useState([])
    
    useEffect(() => {
            const result = axios.get('https://api.vschool.io/domniea/thing', )
                    .then(response => setUglyArray(response.data))
                    .catch(error => console.log(error))
    }, [uglyArray.length])

    function handleChange() {
        const {name, value} = event.target
        
        setUglyItem(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setUglyArray(prevItems => {
            return[
                ...prevItems,
                uglyItem
            ]
        })
     
    axios.post('https://api.vschool.io/domniea/thing', uglyItem)
        .then(response => {
            console.log(response)
            setUglyItem(prevState => ({
                ...prevState,
                id: response.data._id
            }))
        })
        .catch(error => console.log(error))
    }


    return (
        <UglyThingContext.Provider 
            value={{
                uglyArray,
                uglyItem,
                setUglyArray,
                handleChange,
                handleSubmit,
            }}
        >
            {props.children}
        </UglyThingContext.Provider>
    )
}

export {UglyThingContext, UglyThingContextProvider}