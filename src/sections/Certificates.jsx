import React, { useRef } from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import udemyCert from '../assets/udemy-cert.jpg';
import outskillCert from '../assets/outskill-cert.jpg';
import wscubeCert from '../assets/wscube-cert.jpg';
import awsCert from '../assets/aws-cert.jpg';
import forgeCert from '../assets/forge-cert.jpg';

const Certificates = () => {
    const scrollRef = useRef(null);
    
    const certificates = [
        {
            name: "Claude Code in Action",
            issuer: "Anthropic",
            date: "2026",
            link: "#",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775709633/certificate-b3a4pd6wpuxv-1775709467_page-0001_htadhv.jpg"
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
        },
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
        <section id="certificates" className="py-12 md:py-16 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
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
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 flex flex-col h-full snap-start block ${certificates.length > 3 ? 'min-w-[320px] md:min-w-[400px]' : 'w-full'}`}
                            style={{ boxShadow: `0 0 40px -20px ${cert.glow || 'rgba(99, 102, 241, 0.3)'}` }}
                        >
                            {/* Image Header */}
                            <div className="relative w-full h-48 overflow-hidden bg-white/5 p-2 shrink-0">
                                {cert.image ? (
                                    <img 
                                        src={cert.image} 
                                        alt={cert.name} 
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-black/50">
                                        <Award size={48} />
                                    </div>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-8 flex-1 flex flex-col">
                                {/* Icon & Date */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
                                        <Award size={20} className="text-amber-400" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 text-amber-500`}>
                                            {cert.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-white/90 transition-colors">
                                    {cert.name}
                                </h3>
                                
                                <p className="text-white/50 text-xs leading-relaxed mb-8 flex-1">
                                    Issued by {cert.issuer}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                                    <div className="flex items-center gap-2"></div>
                                    <motion.button 
                                        whileHover={{ x: 4 }}
                                        className="text-white/30 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Background Glow Element */}
                            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
