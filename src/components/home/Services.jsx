import React, { useState } from "react";
import Slider from "react-slick";
import services from "../../../public/data/services.json";
import BookingDialog from "./BookingDialog";
import { motion } from "motion/react";

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    var settings = {
        dots: true,
        infinite: true, // auto slider হলে infinite true রাখা ভালো
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,           // ✅ auto slider
        autoplaySpeed: 2000,      // ✅ প্রতি 2 সেকেন্ডে slide
        pauseOnHover: true,       // ✅ hover করলে stop হবে
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0, // initialSlide > 0 রাখলে mobile-এ সমস্যা হতে পারে
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    };



    return (
        <section id="services" className="py-16 bg-base-200 ">
            <div className="w-full max-w-7xl mx-auto px-10 overflow-hidden">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 space-y-3"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">
                        আমাদের সার্ভিসসমূহ
                    </h2>
                    <p className="text-gray-500">
                        প্রফেশনাল ভিডিও এডিটিং ও প্রোডাকশন সার্ভিস
                    </p>
                </motion.div>

                {/* Slider */}
                <div className="slider-container">
                    <Slider {...settings}>
                        {services.map((service) => (
                            <div key={service.id} className="px-3">
                                <div className="card border bg-base-100 shadow-xl">
                                    <div className="card-body text-center space-y-3">
                                        <div className="text-4xl">{service.icon}</div>
                                        <h3 className="card-title justify-center">
                                            {service.titleBn}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {service.description}
                                        </p>
                                        <p className="font-semibold text-accent text-lg">
                                            <span className="text-red-800 font-bold">Price :</span>{" "}
                                            {service.price}
                                        </p>

                                        <button
                                            className="btn btn-sm btn-accent mt-2"
                                            onClick={() => setSelectedService(service)}
                                        >
                                            এখনই বুক করুন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Booking Dialog */}
                {selectedService && (
                    <BookingDialog
                        service={selectedService}
                        onClose={() => setSelectedService(null)}
                    />
                )}
            </div>
        </section>
    );
}
