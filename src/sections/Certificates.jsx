import React from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import udemyCert from '../assets/udemy-cert.jpg';
import outskillCert from '../assets/outskill-cert.jpg';
import wscubeCert from '../assets/wscube-cert.jpg';
import awsCert from '../assets/aws-cert.jpg';
import forgeCert from '../assets/forge-cert.jpg';

const Certificates = () => {
    const scrollRef = React.useRef(null);
    const certificates = [
        {
            name: "HTML and CSS for Beginners",
            issuer: "Udemy",
            date: "Dec 2025",
            link: "#",
            image: udemyCert
        },
        {
            name: "Generative AI Mastermind",
            issuer: "Outskill",
            date: "2025",
            link: "#",
            image: outskillCert
        },
        {
            name: "Build Your Own AI Assistant for a Brand",
            issuer: "WsCube Tech",
            date: "Dec 24, 2025",
            link: "#",
            image: wscubeCert
        },
        {
            name: "AWS - Application Migration Service",
            issuer: "AWS",
            date: "2025",
            link: "#",
            image: awsCert
        },
        {
            name: "Software Development Job Simulation",
            issuer: "Forage",
            date: "2025",
            link: "",
            image: forgeCert
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="certificates" className="py-24 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">Qualifications</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif' }}>Certificates</h2>
                    </motion.div>

                    {/* Scroll Controls (only if > 3 items) */}
                    {certificates.length > 3 && (
                        <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0 pb-4">
                            <button 
                                onClick={() => scroll('left')}
                                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all active:scale-95 group"
                            >
                                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => scroll('right')}
                                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all active:scale-95 group"
                            >
                                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}
                </div>

                <div 
                    ref={scrollRef}
                    className={`
                    ${certificates.length > 3 
                        ? 'flex overflow-x-auto pb-12 gap-8 scroll-smooth snap-x snap-mandatory no-scrollbar pr-12' 
                        : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}
                `}>
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] block overflow-hidden snap-start ${certificates.length > 3 ? 'min-w-[300px] md:min-w-[380px]' : 'w-full'}`}
                        >
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl bg-black border border-white/10">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <Award size={48} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 bg-white/10 rounded-lg text-white/90 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Award size={20} />
                                </div>
                                <ExternalLink size={20} className="text-white/50 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{cert.name}</h3>
                            <p className="text-white/70 font-light text-sm mb-4">{cert.issuer}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">{cert.date}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
