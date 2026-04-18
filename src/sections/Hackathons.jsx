import React from 'react';
import { Trophy, Calendar, Users, Rocket, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Carousel3D from '../components/Carousel3D';

const Hackathons = () => {
    const scrollRef = React.useRef(null);
    const hackathons = [
        {
            title: "HACKSAGON 2026",
            award: "Ideation Phase",
            project: "Social Innovation Challenge",
            date: "Feb 2026",
            team: "Team Decentralize",
            description: "Currently in the ideation phase for HACKSAGON 2026, focusing on groundbreaking social innovation solutions.",
            color: "from-blue-500 to-cyan-600",
            glow: "rgba(6, 182, 212, 0.3)",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775498334/IEEE_certificate_page-0001_1_qhwiuu.jpg"
        },
        {
            title: "OpenPools.in 2026",
            award: "Top 10 Finalist",
            project: "Liquid Staking Protocol",
            date: "March 2026",
            team: "Web3 Wizards",
            description: "Ranked among the top 10 global finalists for developing a high-yield liquid staking solution on-chain.",
            color: "from-emerald-400 to-teal-600",
            glow: "rgba(16, 185, 129, 0.3)",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775552618/Anshu_Shee_5__page-0001_fpzkfu.jpg"
        },
        {
            title: "HackOverFlow @ IIT Goa",
            award: "Participation",
            project: "Competitive Coding Challenge",
            date: "Feb 2026",
            team: "Anshu Shee",
            description: "Achieved top ranking in the HackOverFlow hackathon held during CultRang '26 at IIT Goa, demonstrating exceptional problem-solving speed.",
            color: "from-indigo-500 to-purple-600",
            glow: "rgba(99, 102, 241, 0.3)",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773723412/Anshu_Shee_page-0001_ta46xo.jpg"
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
        <section id="hackathons" className="py-12 md:py-16 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full text-center"
                    >
                        <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] mb-4">Competitive Coding & Innovation</p>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif' }}>HACKATHON CHRONICLES</h2>
                    </motion.div>

                    {/* Scroll Controls (only if > 3 items) */}
                    {hackathons.length > 3 && (
                        <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0">
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
                    ${hackathons.length > 3 
                        ? 'flex overflow-x-auto pb-12 gap-8 scroll-smooth snap-x snap-mandatory no-scrollbar pr-12' 
                        : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}
                `}>
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 flex flex-col h-full snap-start ${hackathons.length > 3 ? 'min-w-[320px] md:min-w-[400px]' : 'w-full'}`}
                            style={{ boxShadow: `0 0 40px -20px ${hack.glow}` }}
                        >
                            {/* Image Header */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                                <img 
                                    src={hack.image} 
                                    alt={hack.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                                />
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${hack.color} z-20`} />
                            </div>

                            {/* Card Body */}
                            <div className="p-8 flex-1 flex flex-col">
                                {/* Icon & Date */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
                                        <Trophy size={20} className="text-amber-400" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="flex items-center gap-1.5 text-white/40 text-xs font-medium mb-1">
                                            <Calendar size={12} />
                                            {hack.date}
                                        </span>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 ${hack.title.includes('IEEE') ? 'text-blue-400' : 'text-amber-500'}`}>{hack.award}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-white/90 transition-colors">{hack.title}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <Rocket size={14} className="text-white/40" />
                                    <span className="text-white/70 font-semibold text-xs italic">{hack.project}</span>
                                </div>
                                
                                <p className="text-white/50 text-xs leading-relaxed mb-8 font-light flex-1">
                                    {hack.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1 rounded-md bg-white/5">
                                            <Users size={12} className="text-white/40" />
                                        </div>
                                        <span className="text-[10px] text-white/40 font-medium">{hack.team}</span>
                                    </div>
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
                        </motion.div>
                    ))}
                </div>

                {/* Craftathon 2026 Spotlight Section */}
                <div className="mt-40 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 overflow-hidden lg:overflow-visible px-4">
                    
                    {/* Left: Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <div className="inline-flex px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-semibold tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                            FEATURED HIGHLIGHT
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Craftathon 2026</h3>
                        <p className="text-white/70 text-lg leading-relaxed font-light">
                            I had the privilege of participating in <strong className="text-white font-semibold">Craftathon 2026</strong>, a 36-hour national-level hackathon organized by Gandhinagar University, which brought together 130+ teams from across the country. This event provided a highly competitive and innovation-driven platform to build impactful solutions within a constrained timeframe.
                        </p>
                    </motion.div>

                    {/* Right: 3D Auto-Rotating Carousel */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 flex justify-center w-full"
                    >
                        <Carousel3D
                            images={[
                                "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775557518/WhatsApp_Image_2026-04-07_at_15.54.09_qfyfaj.jpg",
                                "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775557518/WhatsApp_Image_2026-04-07_at_15.54.10_kvwdit.jpg",
                                "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775557518/WhatsApp_Image_2026-04-07_at_15.54.10_1_yb69sx.jpg",
                            ]}
                            radius={300}
                            speed={0.3}
                            autoPlay={true}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
