import React from "react";
import { useParams, useNavigate} from "react-router-dom";
import servicesData from './servicesData'

function ServiceDetails() {

    const {serviceId} = useParams()
    const foundDetails = servicesData.find(data => data._id === serviceId)
    
    const navigate = useNavigate()

    return (
        <div className="ServiceDetails">
            <h1>{foundDetails.name}</h1>
            <h4>{foundDetails.description}</h4>
            <h3>{foundDetails.price}</h3>

            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </div>
    )
}

export default ServiceDetails