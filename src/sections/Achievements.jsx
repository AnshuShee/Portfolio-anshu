import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Target, CheckCircle2, Globe, Users } from 'lucide-react';

const badges = [
    {
        title: 'Ambassador',
        description: 'In recognition of dedication & community support',
        icon: <img src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1781088185/gssoc-badge-role_ambassador_szvaeg.png" alt="Ambassador Badge" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(155,81,224,0.3)]" />
    },
    {
        title: 'Contributor',
        description: 'For contributing to open source projects',
        icon: <img src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1781088185/gssoc-badge-role_contributor_zmoqvl.png" alt="Contributor Badge" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]" />
    },
    {
        title: 'Bounty Hunter',
        description: 'For solving issues and earning bounties',
        icon: <img src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1781088186/gssoc-badge-bounty_hunter_p5iy9m.png" alt="Bounty Hunter Badge" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(244,114,182,0.3)]" />
    }
];

const Achievements = () => {
    return (
        <section
            id="achievements"
            className="py-16 md:py-24 border-b border-white/10 overflow-hidden"
            style={{ backgroundColor: '#000000', color: '#ffffff' }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-16"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff8a00] to-orange-600 uppercase drop-shadow-[0_0_10px_rgba(255,138,0,0.5)] mb-4">
                        Milestones & Recognition
                    </p>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
                        style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                        Achievements
                    </h2>
                </motion.div>

                {/* ── Achievement Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="relative max-w-5xl mx-auto w-full"
                >
                    {/* Glowing background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-purple-500/20 to-teal-400/20 blur-[100px] -z-10 rounded-full" />

                    <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all hover:border-white/20">
                        {/* Top accent bar (Purple to Teal) */}
                        <div className="h-[3px] w-full bg-gradient-to-r from-purple-500 via-teal-400 to-purple-500" />

                        <div className="p-8 md:p-10">
                            
                            {/* Header Info */}
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10">
                                
                                <div className="flex gap-6 items-start">
                                    {/* Big Icon */}
                                    <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-400/10 border border-purple-500/30 items-center justify-center shadow-[0_0_20px_rgba(155,81,224,0.3)] overflow-hidden">
                                        <img src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1781087699/1751827772627_mlssb8.jpg" alt="GSSoC Logo" className="w-full h-full object-cover" />
                                    </div>
                                    
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                                Selected Contributor & Ambassador
                                            </h3>
                                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/15 text-green-400 border border-green-500/30 uppercase tracking-wide">
                                                <CheckCircle2 size={14} />
                                                Accepted
                                            </span>
                                        </div>
                                        
                                        <div className="text-lg font-medium text-purple-300 mb-3 tracking-wide">
                                            GirlScript Summer of Code 2026
                                        </div>

                                        <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-4">
                                            Selected as a Contributor and Ambassador for GirlScript Summer of Code 2026, contributing to open-source projects under the Open Source track.
                                        </p>

                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/70">Open Source Program</span>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-500/20 text-teal-300">Open Source Track</span>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300">Contributor</span>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 border border-pink-500/20 text-pink-300">Ambassador</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hexagonal Badges Area */}
                            <div>
                                <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-6 text-center">Badges Earned</h4>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {badges.map((badge, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                                            viewport={{ once: true }}
                                            className="group relative flex flex-col items-center text-center p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl transition-all"
                                        >
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                            {/* Badge Shape wrapper */}
                                            <div className="relative w-24 h-24 mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out z-10">
                                                {badge.icon}
                                            </div>

                                            <h5 className="text-lg font-bold text-white mb-2">{badge.title}</h5>
                                            <p className="text-sm text-white/50 leading-relaxed">
                                                {badge.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Achievements;
