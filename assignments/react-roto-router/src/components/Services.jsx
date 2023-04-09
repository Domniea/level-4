import React from "react";
import { useNavigate, Link } from "react-router-dom";
import servicesData from "./servicesData";

function Services() {

    const navigate = useNavigate()

    const serviceOffered = servicesData.map(service => {
        return  <h3 key={service._id}
                    className="servicesLink"    
                >
                   <Link 
                    to={`/services/${service._id}`}
                   >{service.name}</Link>
                </h3>
    })
    // console.log(servicesData)
    return (
        <div className='Services'>
            <h1>Services TEST</h1>

            {serviceOffered}

            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>

        </div>
    )
}

export default Services