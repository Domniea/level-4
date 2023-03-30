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

    const [comments, setComments] = useState(
        [
            "Test Comment",
            "Test Comment",
            "Test Comment"
        ]
    )
    

    
    useEffect(() => {
            const result = axios.get('https://api.vschool.io/domniea/thing', )
                    .then(response => setUglyArray(response.data))
                    .catch(error => console.log(error))
    }, [uglyArray.length])

    useEffect(() => {
        setUglyItem({
            imgUrl: '',
            title: '',
            description: '',
            id: ''
        })
    },[uglyArray.length])

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
                setUglyItem(prevState => {
                    return {
                        ...prevState,
                        id: response.data._id
                    }
                    
                })
            })
            .catch(error => console.log(error))
    }


    return (
        <UglyThingContext.Provider 
            value={{
                uglyArray,
                uglyItem,
                comments,
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