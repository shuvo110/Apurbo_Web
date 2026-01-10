import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-end items-center gap-2 my-10 flex-wrap">
            {/* Prev */}
            <button
                className="btn btn-sm btn-outline"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                আগের পৃষ্ঠা
            </button>

            {/* Page Numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    className={`btn btn-sm ${currentPage === page ? "btn-accent" : "btn-outline btn-secondary"
                        }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                className="btn btn-sm btn-outline"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                পরবর্তী
            </button>
        </div>
    );
}
