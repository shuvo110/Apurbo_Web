import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import services from "../../../public/data/services.json";

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const settings = {
        dots: true,
        infinite: true,        // Loop continuously
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,        // Auto slide
        autoplaySpeed: 2000,   // 2 seconds per slide
        pauseOnHover: true,    // Hover এ slider stop হবে
        responsive: [
            {
                breakpoint: 1280,  // Large screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,  // Tablet
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,   // Small tablet / large mobile
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,   // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false       // ছোট স্ক্রিনে dots optional
                }
            }
        ]
    };

    return (
        <section id="services" className="py-16 px-4 bg-base-200">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
                    আমাদের সার্ভিসসমূহ
                </h2>

                <div className="w-full">
                    <Slider {...settings}>
                        {services.map((service) => (
                            <div key={service.id} className="px-3">
                                <div className="card border bg-base-100 shadow-xl p-5 text-center">
                                    <div className="text-4xl mb-2">{service.icon}</div>
                                    <h3 className="card-title justify-center mb-1">{service.titleBn}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{service.description}</p>
                                    <p className="font-semibold text-accent text-lg mb-3">
                                        <span className="text-red-800 font-bold">Price :</span> {service.price}
                                    </p>
                                    <button
                                        className="btn btn-sm btn-accent"
                                        onClick={() => setSelectedService(service)}
                                    >
                                        এখনই বুক করুন
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
