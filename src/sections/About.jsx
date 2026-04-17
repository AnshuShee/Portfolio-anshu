import React from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {

    return (
        <section id="about" className="py-12 md:py-16 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="w-full lg:w-2/5 flex justify-center lg:justify-start"
                    >
                        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 backdrop-blur-sm group p-2">
                             <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <img
                                    src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1773738246/3504a569-8920-401c-a6f6-7c7350973141_xfuttq.png"
                                    alt="Anshu's Profile"
                                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        className="w-full lg:w-3/5 space-y-6 text-center lg:text-left"
                    >
                        <motion.p 
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                            className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                        >
                            About Me
                        </motion.p>
                        
                        <motion.h2 
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight" style={{ fontFamily: '"Anton", sans-serif' }}
                        >
                            Bridging creativity and code to build digital experiences.
                        </motion.h2>
                        
                        <div className="space-y-4 mt-8">
                            <motion.p 
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                                className="text-white/70 text-base md:text-lg leading-relaxed font-light"
                            >
                                I am a passionate Full Stack Developer with a strong foundation in building scalable web applications. My journey started with a curiosity for how things work on the internet, which led me to dive deep into the world of JavaScript and modern web technologies.
                            </motion.p>
                            
                            <motion.p 
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                                className="text-white/70 text-base md:text-lg leading-relaxed font-light"
                            >
                                When I'm not coding, I'm exploring new AI tools, contributing to open-source, or learning about the latest design trends. I believe in writing clean, maintainable code and creating interfaces that users love to use.
                            </motion.p>

                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                                className="pt-8 flex justify-center lg:justify-start"
                            >
                                <a 
                                    href="https://drive.google.com/file/d/1tIN2Eg9MaP_1svhk3wWtslhlqmt2CxuL/view?usp=sharing" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_15px_40px_rgba(255,255,255,0.15)] group magnetic"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 48 48"
                                        className="transition-transform group-hover:scale-110"
                                    >
                                        <path 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M33 42.5h5.5a4 4 0 0 0 4-4v-4.084m-37 2V38.5a4 4 0 0 0 4 4h7.688m0-37H9.5a4 4 0 0 0-4 4v3.172M30.813 5.5H38.5a4 4 0 0 1 4 4v3.172m.778 2.675L22.832 3.541a1.75 1.75 0 0 0-2.389.64l-15.3 26.508a1.75 1.75 0 0 0 .64 2.39h0l20.445 11.806a1.75 1.75 0 0 0 2.39-.64l15.301-26.508a1.75 1.75 0 0 0-.64-2.39m-9.028 3.831l-13.52-7.919m15.275 13.333l-17.233-9.95m15.249 13.403L16.79 18.094" 
                                            strokeWidth="1.6"
                                        />
                                    </svg>
                                    View Resume
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
