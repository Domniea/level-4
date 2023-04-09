import React from "react";

function Card(props) {
    // console.log(props.imgUrl)
    return (
        <div className="Card">
            {/* <h1>{props.id}</h1> */}
            <h1>{props.name}</h1>
            <img src={`${props.imgUrl.path}/portrait_medium.jpg`} />
        </div>
    )
}
export default Card