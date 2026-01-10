import React, { useState } from "react";
import services from "../../../public/data/services.json";
import BookingDialog from "./BookingDialog";
export default function Services() {
    const [selectedService, setSelectedService] = useState(null);
    return (
        <div>
            <section id="services" className="py-16 px-4 bg-base-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-6"> আমাদের সার্ভিসসমূহ </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
                        {services.map((service) => (
                            <div key={service.id} className="px-3">
                                <div className="card border bg-base-100 shadow-xl">
                                    <div className="card-body text-center space-y-3">
                                        <div className="text-4xl">{service.icon}</div>
                                        <h3 className="card-title justify-center"> {service.titleBn} </h3> <p className="text-sm text-gray-500">{service.description}</p>
                                        <p className="font-semibold text-accent text-lg"> <span className="text-red-800 font-bold">Price :</span>{" "} {service.price}
                                        </p>
                                        <button className="btn btn-sm btn-accent mt-2" onClick={() => setSelectedService(service)} > এখনই বুক করুন </button>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                    {selectedService && (<BookingDialog service={selectedService} onClose={() => setSelectedService(null)} />)}
                </div>
            </section>
        </div>
    );
}