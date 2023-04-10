import React from "react";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

function MovieCard() {
    
    const location = useLocation()
    const data = location.state
   
    const {movieId} = useParams()
    const foundDetails = data.find(data => data.title == movieId)

    const navigate = useNavigate()
    
    
    return (
        <div className="Card">
            <h1>{foundDetails.title}</h1>
            <h2>{foundDetails.saga}</h2>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default MovieCard
