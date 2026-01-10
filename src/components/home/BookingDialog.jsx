import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function BookingDialog({ service, onClose }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
    });

    const dialogRef = useRef(null);

    // Focus trap for accessibility
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
            const firstInput = dialogRef.current.querySelector("input");
            firstInput?.focus();
        }
    }, []);

    const submit = async (e) => {
        e.preventDefault();

        let newErrors = {};
        if (name.length < 4) newErrors.name = "৪ অক্ষরের উপরে নাম দিন";
        if (!/^\d{11}$/.test(phone)) newErrors.phone = "১১ সংখ্যার সঠিক মোবাইল নাম্বার দিন";
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "সঠিক ইমেইল দিন";
        if (!date) newErrors.date = "ইভেন্টের তারিখ দিন";

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        setError({ name: "", phone: "", email: "", date: "" });

        const formData = new FormData(e.target);
        formData.append("access_key", "8c89a0a7-45e8-4df8-9080-953188238004");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            toast.success("আপনার বুকিং রিকোয়েস্ট পাঠানো হয়েছে");
            resetForm();
            onClose();
        } else {
            toast.error("সমস্যা হইছে ❌");
            console.log(data);
        }
    };

    const resetForm = () => {
        setName("");
        setPhone("");
        setEmail("");
        setDate("");
        setError({ name: "", phone: "", email: "", date: "" });
    };

    const handleClose = () => {
        dialogRef.current?.close();
        resetForm();
        onClose();
    };

    if (!service) return null;

    return (
        <dialog ref={dialogRef} className="modal" onClose={handleClose}>
            <div className="modal-box relative">
                <button
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={handleClose}
                >
                    ✕
                </button>

                {/* Service Info */}
                <div className="space-y-3 p-3 mt-5 text-center">
                    <h1 className="text-4xl">{service.icon}</h1>
                    <p className="text-lg font-bold">{service.titleBn}</p>
                    <p className="text-md">Price: {service.price}</p>
                    <p className="text-sm text-gray-500">{service.description}</p>
                </div>

                {/* Form */}
                <form className="mt-4 space-y-4 p-3" onSubmit={submit}>
                    <input type="hidden" name="service_title" value={service.titleBn} />
                    <input type="hidden" name="service_price" value={service.price} />
                    <input type="hidden" name="service_icon" value={service.icon} />
                    <input type="hidden" name="service_description" value={service.description} />

                    <div className="space-y-2">
                        <label className="block font-bold">আপনার নাম *</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-accent w-full"
                            placeholder="আপনার নাম"
                            required
                        />
                        {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block font-bold">মোবাইল নাম্বার *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input input-accent w-full"
                            placeholder="০১XXXXXXXXX"
                            required
                        />
                        {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block font-bold">ইমেইল *</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-accent w-full"
                            placeholder="আপনার ইমেইল"
                            required
                        />
                        {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block font-bold">ইভেন্ট তারিখ *</label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="input input-accent w-full"
                            required
                        />
                        {error.date && <p className="text-red-500 text-sm">{error.date}</p>}
                    </div>

                    <button className="btn btn-outline btn-secondary w-full">📩 বুকিং রিকোয়েস্ট পাঠান</button>
                    <a
                        href="https://wa.me/8801794911366" // আপনার WhatsApp নম্বর
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-accent w-full"
                    >
                        💬 WhatsApp এ মেসেজ দিন
                    </a>
                </form>

            </div>
        </dialog>
    );
}
