import React from 'react'
import { FaFacebookF, FaYoutube, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
    return (
        <div>
            <footer className="bg-base-200 text-base-content md:py-8">
                {/* Main Footer */}
                <div className="container max-w-6xl mx-auto place-items-center px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand / About */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://static.vecteezy.com/ti/vecteur-libre/t2/10951114-creation-de-logo-d-editeur-de-film-de-film-concept-de-logo-de-montage-video-vectoriel.jpg"
                                alt="Logo"
                                className="w-12 h-12 rounded-full"
                            />
                            <h2 className="text-2xl font-bold">ক্যামেরা ছোঁয়া</h2>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            আমরা প্রফেশনাল ভিডিও এডিটিং ও প্রোডাকশন সার্ভিস প্রদান করি।
                            বিয়ে, ইভেন্ট, ইউটিউব ও কর্পোরেট ভিডিও—সবকিছুর জন্য।
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">দ্রুত লিংক</h3>
                        <ul className="space-y-2">
                            <li><a href="#heroSection" className="link link-hover">হোম</a></li>
                            <li><a href="#portfolio" className="link link-hover">পোর্টফোলিও</a></li>
                            <li><a href="#services" className="link link-hover">সার্ভিস</a></li>
                            <li><a href="#package" className="link link-hover">প্যাকেজ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">যোগাযোগ</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> <a href="tel:+8801794-911366" target="_blank" rel="noopener noreferrer">+8801794-911366</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdEmail /> <span>contact@yourstudio.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaWhatsapp /> <span>WhatsApp এ মেসেজ দিন</span>
                            </li>
                        </ul>

                        {/* Social */}
                        <div className="flex gap-4 mt-5">
                            <a href="https://www.facebook.com/camerachowa.bd" target='_blank' rel='noopener noreferrer' className="btn btn-circle btn-outline">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.youtube.com/@camerachowa66" target='_blank' rel='noopener noreferrer' className="btn btn-circle btn-outline">
                                <FaYoutube />
                            </a>
                            <a href="https://wa.me/8801794911366" target='_blank' rel='noopener noreferrer' className="btn btn-circle btn-outline">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-600 py-8 text-center text-sm">
                    © {new Date().getFullYear()} Video Edit Studio — All Rights Reserved
                </div>
            </footer>
        </div>
    )
}

export default Footer