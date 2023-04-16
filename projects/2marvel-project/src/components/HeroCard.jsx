import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HeroCard() {
    
    const location = useLocation()
    const data = location.state
   
    const {heroId} = useParams()
    const foundDetails = data.data.find(data => data.name === heroId)

    const navigate = useNavigate()
    
    return (
        <div className="HeroCard">
            <h1>{foundDetails.name}</h1>
            <div className="hero--details">
            <h2>{foundDetails.biography.publisher}</h2>
            <h3>Full Name: {foundDetails.biography.fullName}</h3>
            <h3>Alignment: {foundDetails.biography.alignment}</h3>
            <h3>Group Afilliations: {foundDetails.connections.groupAffiliation}</h3>

            
            <img src={foundDetails.images.md}/>
            <h3>Power Stats:
              <ul>
                <li>Intelligence: {foundDetails.powerstats.intelligence}</li>
                <li>Strength: {foundDetails.powerstats.strength}</li>
                <li>Speed: {foundDetails.powerstats.speed}</li>
                <li>Durability: {foundDetails.powerstats.durability}</li>
                <li>Power: {foundDetails.powerstats.power}</li>
                <li>Combat: {foundDetails.powerstats.combat}</li>
              </ul>
            </h3>
            </div>
            
            <br></br>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </div>
    )
}

export default HeroCard
