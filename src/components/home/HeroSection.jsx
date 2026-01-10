import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'motion/react'
function HeroSection() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease:"easeOut" }}
                className=" bg-base-200 py-18 mt-7 md:mt-19">
                <div className="md:flex items-center p-4 justify-center gap-28 lg:flex-row-reverse">
                    <div>
                        <img
                            src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/485153459_681128117709839_8920734175004304364_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEen5pK1MI07y0T5zKJicY7mePfgEOv5PCZ49-AQ6_k8KHw-4CzIow44D4Zj8rX-2SLyOrMjAaHcHR1KqG6Wt__&_nc_ohc=YrJrZXBAejYQ7kNvwG2r8q5&_nc_oc=Adm9ogTVbNfWUJoJW7W7iMfug-8Igu-Dr5pBZNUuUyHuLodG2K9M1OTPphGam4brnyI&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=-xrlK0R0SHv_7zi9rrDXHA&oh=00_AfoecrlJP0P7--GoF5wfgvlXEtCMNNLlaB-skoIrRdKEwQ&oe=696440E8"
                            className="md:max-w-sm rounded-lg shadow-2xl border p-1"
                        />
                        <div>

                        </div>
                    </div>
                    <div className='space-y-4 md:space-y-6 mt-8 md:mt-0'>
                        <h1 className="text-2xl lg:text-5xl font-bold">মুহূর্ত ধরে রাখি,</h1>
                        <h1 className="text-lg lg:text-3xl font-bold">গল্পে রূপ দিই <span className='text-accent ml-3 animate-pulse border px-2 rounded-lg'> ক্যামেরা ছোঁয়া</span></h1>
                        <p className="pt-3 text-lg">
                            সামাজিক অনুষ্ঠানের জন্য প্রফেশনাল ভিডিও এডিটিং ও ইভেন্ট কভারেজ
                        </p>
                        <h1 className='font-bold text-2xl ml-2'>
                            <span className='text-green-600'>যেমন :</span>  <span className='ml-3 text-red-600'>
                                <Typewriter
                                    words={[
                                        "বিয়ে বাড়ী",
                                        "অন্যপ্রাশ্নন",
                                        " ফোটো গ্রাফী",
                                        "গায়ে হলুদ",
                                    ]}
                                    loop={0}
                                    cursor cursorStyle="_"
                                    typeSpeed={400}
                                    deleteSpeed={200}
                                    delaySpeed={100}

                                />
                            </span>
                        </h1>
                        <a href='#portfolio'  className="btn btn-primary mt-3">কাজ দেখুন </a>
                        <div className='grid md:grid-cols-2 gap-5 mt-9 '>
                            <button className='btn btn-outline btn-secondary'>✔ ৫+ বছরের অভিজ্ঞতা </button>
                            <button className='btn btn-outline btn-warning'>✔ ২০০+ সফল প্রজেক্ট</button>
                            <button className='btn btn-outline btn-error'>✔ সময়মতো ডেলিভারি</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSection