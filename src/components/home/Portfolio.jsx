import React, { useEffect, useState } from "react";
import portfolioData from "../../../public/data/portfolio.json";
import { motion } from "motion/react";
import Pagination from "./Pagination";
function Portfolio() {
    const [activeCategories, setActiveCategories] = useState("সব");
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ["সব", "বিয়ে", "ইভেন্ট", "ইউটিউব", "রিলস", "কর্পোরেট"];
    const itemsPerPage = 8;

    const filteredData =
        activeCategories === "সব"
            ? portfolioData
            : portfolioData.filter((item) => item.category === activeCategories);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Reset page when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategories]);
    return (
        <div className="container m-auto px-4">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center py-10 space-y-3 md:space-y-5"
            >
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">আমাদের কাজ</h1>
                <p>আমাদের করা কিছু নির্বাচিত প্রজেক্ট দেখুন</p>
                <p>যেগুলোতে রয়েছে কোয়ালিটি, ক্রিয়েটিভিটি ও প্রফেশনাল এডিটিং</p>
            </motion.div>

            {/* Category Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

                className="py-8 flex flex-wrap justify-center gap-4 text-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategories(cat)}
                        className={`btn ${activeCategories === cat ? "btn-accent" : "btn-outline btn-secondary"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Portfolio Grid */}
            <div

                className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-5 mb-6">
                {paginatedData.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02, rotate: 2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="card bg-base-100 shadow-xl border p-2"
                    >
                        <figure>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-60 w-full object-contain rounded-2xl"
                            />
                        </figure>
                        <div className="card-body space-y-2">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-sm btn-accent"
                                    onClick={() => window.open(item.videoUrl, "_blank")}
                                >
                                    ভিডিও দেখুন
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <motion.div initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </motion.div>

            )}
        </div>
    );
}

export default Portfolio;
