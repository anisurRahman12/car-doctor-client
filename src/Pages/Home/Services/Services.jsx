import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices]=useState ( []);

    useEffect ( ()=>{
        fetch('Services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Our services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                ></ServiceCard>)
              }
            </div>
        </div>
    );
};

export default Services;