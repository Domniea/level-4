import React, { useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import { useContext } from "react";
import { UglyThingContext } from "../context";

function UglyThing(props) {
    
    const {
        uglyArray,
        uglyItem,
        comments,
        setUglyArray,
        handleChange,
        handleSubmit,
    } = useContext(UglyThingContext)

    const [itemDetails, SetItemDetails] = useState({
        imgUrl: props.imgUrl,
        title: props.title,
        description: props.description,
        id: props.id
    })

    const [edit, setEdit] = useState(false)

    const [showComments, setShowComments] = useState(false)

    function toggleComments() {
        setShowComments(prevState => !prevState)
    }

    function editToggle(){
        setEdit(prevState => !prevState)
    }

    function handleEditInputs(event){
        const {name, value} = event.target
        SetItemDetails(prevInfo => {
            return {
                ...prevInfo,
                [name]: value
            }
        })
    }
 
    function handleEditSubmit(e){
        e.preventDefault()
        axios.put(`https://api.vschool.io/domniea/thing/${props.id}`, itemDetails)
            .then(response => {
                console.log(response)
                setUglyArray([])
            })
            .catch(error => console.log(error))
    }

    function deleteUgly() {
        axios.delete(`https://api.vschool.io/domniea/thing/${itemDetails.id}`)
            .then(response => {
                console.log(response)
                setUglyArray([])
            })
            .catch(error => console.log(error))
    }
    
    const test = comments.map((item, i) => {
        return <Comment 
                    key={i}
                    comment={item}
                />
    })

    return (
        <div className="ugly--item">
            <h1>{itemDetails.title}</h1>
            <img src={itemDetails.imgUrl}/>
            <h3>{itemDetails.description}</h3>
            {/* <h2>{itemDetails.id}</h2> */}
            {
                edit &&
                <form onSubmit={handleEditSubmit}>
                    <input 
                        type='text'
                        name='title'
                        value={itemDetails.title}
                        onChange={handleEditInputs}
                    />
                    <input 
                        type='text'
                        name='description'
                        value={itemDetails.description}
                        onChange={handleEditInputs}
                    />
                    <button>Save</button>
                </form>
            }
            {!edit && <button onClick={editToggle}>Edit</button>}
            <button onClick={deleteUgly}>Delete</button>
            <button onClick={toggleComments}>Comment</button>
            {/* <br></br> */}
            {showComments && <input />}
            {/* <ul>
            {test}
            </ul> */}
        </div>
    )
}

export default UglyThing