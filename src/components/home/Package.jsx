import React, { useState } from "react";
import packages from "../../../public/data/packages.json";
import BookingDialog from "./BookingDialog";
import Pagination from "./Pagination";
import { motion } from "motion/react";

function Package() {
    const [packagesSelet, setPackagesSelet] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(packages.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = packages.slice(startIndex, startIndex + itemsPerPage);
    return (
        <section id="packages" className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 space-y-3">
                    <h2 className="text-2xl md:text-4xl font-bold">আমাদের প্যাকেজসমূহ</h2>
                    <p className="text-gray-500">
                        আপনার প্রয়োজন অনুযায়ী প্যাকেজ নির্বাচন করুন
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedData.map((pkg) => (
                        <div key={pkg.id} className="card border bg-base-100 shadow-xl hover:shadow-2xl transition p-6">
                            <h3 className="text-xl font-bold mb-2">{pkg.titleBn}</h3>
                            <p className="text-accent font-semibold text-lg mb-4">{pkg.price}</p>
                            <ul className="list-disc list-inside mb-4 text-gray-500">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <div className="flex flex-col gap-2">
                                <button
                                    className="btn btn-accent w-full" onClick={() => setPackagesSelet(pkg)}
                                >
                                    📩 বুকিং করুন
                                </button>
                                <a
                                    href="https://wa.me/8801794911366"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full"
                                >
                                    💬 WhatsApp যোগাযোগ
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {packagesSelet && (
                    <BookingDialog service={packagesSelet} onClose={() => setPackagesSelet(null)} />
                )}
                {/* pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />

            </div>
        </section>
    );
}

export default Package;
