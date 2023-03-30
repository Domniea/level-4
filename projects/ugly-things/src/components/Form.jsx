import React from "react";
import { useContext } from "react";
import { UglyThingContext } from "../context";

function Form() {

    const {
            uglyArray,
            uglyItem,
            handleChange,
            handleSubmit
        } = useContext(UglyThingContext)

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <div className="input--container">
                    <label htmlFor='imgUrl'>Image URL</label>
                    <input 
                        type='text'
                        name='imgUrl'
                        value={uglyItem.imgUrl}
                        onChange={handleChange}
                    />

                    <label htmlFor='title'>Title</label>
                    <input 
                        type='text'
                        name='title'
                        value={uglyItem.title}
                        onChange={handleChange}
                    />

                    <label htmlFor='description'>Description</label>
                    <input 
                        type='text'
                        name='description'
                        value={uglyItem.description}
                        onChange={handleChange}
                    />
                </div>
                {/* <br></br> */}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form