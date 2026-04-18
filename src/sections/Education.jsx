import React, { useRef } from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            degree: "Higher Secondary Education",
            field: "",
            institution: "Ultra Vision Academy",
            duration: "2023 - 2025",
            icon: <BookOpen size={24} />,
            description: "Completed higher secondary education with a strong foundation in science and mathematics.",
        },
        {
            degree: "Bachelor of Engineering",
            field: "Computer Engineering",
            institution: "Swaminarayan University",
            duration: "2025 - 2029",
            icon: <GraduationCap size={24} />,
            description: "Pursuing B.E in Computer Engineering with focus on software development, data structures, algorithms, and modern web technologies.",
        },
    ];

    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 60%", "end 80%"],
    });

    const glowHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="education" className="py-12 md:py-16 border-b border-white/10 overflow-hidden" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">My Journey</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif' }}>Education</h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
                    {/* Base dim line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-white/10" />

                    {/* Glowing white fill line */}
                    <motion.div
                        style={{ height: glowHeight }}
                        className="edu-glow-line"
                    />

                    {/* Glowing orb tracking the line tip */}
                    <motion.div
                        style={{ top: glowHeight }}
                        className="edu-glow-orb"
                    />

                    <div className="space-y-12">
                        {educationData.map((edu, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                            <motion.div
                                key={index}
                                initial={{ 
                                    opacity: 0, 
                                    x: isLeft ? -80 : 80  // left cards come from left, right from right
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: index * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94]  // custom easeOutQuart
                                }}
                                viewport={{ once: true, margin: "-80px" }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                                    isLeft ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline Dot — pops in with spring */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: index * 0.15 + 0.3 }}
                                    viewport={{ once: true }}
                                    className="absolute left-8 md:left-1/2 transform -translate-x-1/2 mt-6 md:mt-0 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 border-4 border-[#000000] shadow-[0_0_10px_rgba(249,115,22,0.5)] text-white"
                                >
                                    <div className="scale-75">{edu.icon}</div>
                                </motion.div>

                                {/* Content Box */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                                    <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all">
                                        <div className={`flex flex-wrap items-center gap-3 mb-3 ${isLeft ? '' : 'md:justify-end'}`}>
                                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm font-semibold text-white/80 shadow-sm">
                                                <Calendar size={14} />
                                                {edu.duration}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                                        
                                        {edu.field && (
                                            <p className="text-lg font-medium text-white/70 mb-3">{edu.field}</p>
                                        )}

                                        <div className={`flex items-center gap-1.5 mb-4 text-white/60 ${isLeft ? '' : 'md:justify-end'}`}>
                                            <MapPin size={16} />
                                            <span className="font-medium text-sm uppercase tracking-wide">{edu.institution}</span>
                                        </div>

                                        <p className="text-white/60 text-base leading-relaxed font-light">{edu.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
