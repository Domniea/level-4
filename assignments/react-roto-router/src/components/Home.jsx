import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()

    return (
        <div className='Home'>
            <h1>House Of Plumbing</h1>
            <h4>Welcome to your plumbing needs specialists</h4>
        
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </div>
    )
}

export default Home