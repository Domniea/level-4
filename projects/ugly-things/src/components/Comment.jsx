import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { UglyThingContext } from '../context'

function Comment(props) {

    // const {
    //     comments
    // } = useContext(UglyThingContext)

    return(
        <div className='comment'>
                <li>{props.comment}</li>
        </div>
    )
}

export default Comment