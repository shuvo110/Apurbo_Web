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
                <div className="lg:flex items-center p-4 justify-center gap-28 lg:flex-row-reverse">
                    <div>
                        <img
                            src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/518423345_122136786236421209_6325512940476710924_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEf29NOZmgkEX8l1hUM90l34lVOhUtBk0HiVU6FS0GTQe77iBGkDpbNno1w2Z1pAr4QgCWmyI5E810w2nwvPuAh&_nc_ohc=YahuAJCg1ZUQ7kNvwELc41V&_nc_oc=AdkD2BiTjyZTi9K_GdOvlzzDQVtYEI5vbI8nT6iHzpie245I-8Gxk4oIvd8ygO2c_MQ&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=sSsTK0AwQsKN0rWdf8w6mA&oh=00_AfrjGuKKWXKWGcjB0iGc9Z4E-MtJT-uSaks18SfFCJP0Jg&oe=6968DED5"
                            className="md:max-w-2xl rounded-lg shadow-2xl border p-1"
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