import React from "react";
import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate()

    return (
        <div className='About'>
            <h1>Winner of Plumber of the year award 10 years running</h1>
            <h4>World Class plumbing experts with over 100 years of combined experience</h4>
            <h3>
                Guarenteed:
                <ul>
                    <li>Outstanding service</li>
                    <li>Quick and efficiant</li>
                    <li>Money Back Guarente</li>
                    <li>Certified</li>
                    <li>Afordable!</li>
                    <li>Ask about our referal program</li>
                </ul>
            </h3>

            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </div>
    )
}

export default About
