import React, { useState, useRef, useEffect } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import udemyCert from '../assets/udemy-cert.jpg';
import outskillCert from '../assets/outskill-cert.jpg';
import wscubeCert from '../assets/wscube-cert.jpg';
import awsCert from '../assets/aws-cert.jpg';
import forgeCert from '../assets/forge-cert.jpg';

const certificates = [
  { 
      id: '01', 
      issuer: 'Anthropic', 
      title: 'Claude Code in Action', 
      date: 'APR 2026', 
      tag: 'New', 
      tagColor: 'green', 
      skills: ['Agentic AI', 'Claude Code', 'Developer Tools'], 
      desc: 'Mastered advanced usage of Claude AI for building real-world applications and optimizing development workflows.',
      link: '#',
      image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775709633/certificate-b3a4pd6wpuxv-1775709467_page-0001_htadhv.jpg"
  },
  { 
      id: '02', 
      issuer: 'AWS', 
      title: 'Application Migration Service', 
      date: '2025', 
      tag: 'Cloud', 
      tagColor: 'blue', 
      skills: ['Cloud', 'AWS', 'Migration'], 
      desc: 'Learned best practices for migrating applications to AWS using the Application Migration Service.',
      link: '#',
      image: awsCert
  },
  { 
      id: '03', 
      issuer: 'Forage', 
      title: 'Software Development Job Simulation', 
      date: '2025', 
      tag: 'Dev', 
      tagColor: 'amber', 
      skills: ['Software Engineering', 'Agile', 'Problem Solving'], 
      desc: 'Gained practical experience through simulated real-world software engineering tasks and team workflows.',
      link: '#',
      image: forgeCert
  },
  { 
      id: '04', 
      issuer: 'Udemy', 
      title: 'HTML and CSS for Beginners', 
      date: 'DEC 2025', 
      tag: 'Dev', 
      tagColor: 'amber', 
      skills: ['HTML', 'CSS', 'Web Development'], 
      desc: 'Built a solid foundation in web development covering semantic HTML and modern CSS styling.',
      link: '#',
      image: udemyCert
  },
  { 
      id: '05', 
      issuer: 'Outskill', 
      title: 'Generative AI Mastermind', 
      date: '2025', 
      tag: 'AI', 
      tagColor: 'purple', 
      skills: ['Generative AI', 'Prompt Engineering', 'LLMs'], 
      desc: 'Explored the fundamentals of generative AI and its applications in modern tech solutions.',
      link: '#',
      image: outskillCert
  },
  { 
      id: '06', 
      issuer: 'WsCube Tech', 
      title: 'Build Your Own AI Assistant for a Brand', 
      date: 'DEC 24, 2025', 
      tag: 'AI', 
      tagColor: 'purple', 
      skills: ['AI Assistant', 'Branding', 'Chatbot Dev'], 
      desc: 'Developed a customized AI assistant tailored for brand interaction and customer engagement.',
      link: '#',
      image: wscubeCert
  },
  { 
      id: '07', 
      issuer: 'Google', 
      title: 'Introduction to Large Language Models', 
      date: '2026', 
      tag: 'AI', 
      tagColor: 'purple', 
      skills: ['LLMs', 'Generative AI', 'Machine Learning'], 
      desc: 'Completed an introductory course on Large Language Models, covering their underlying architecture and practical applications.',
      link: '#',
      image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1776489629/Screenshot_2026-04-18_104841_ubhjxt.png"
  },
  { 
      id: '08', 
      issuer: 'Google', 
      title: 'Introduction to Generative AI', 
      date: '2026', 
      tag: 'AI', 
      tagColor: 'purple', 
      skills: ['Generative AI', 'Deep Learning', 'Neural Networks'], 
      desc: 'Explored the foundational concepts of Generative AI, learning how to create and deploy generative models.',
      link: '#',
      image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1776489629/Screenshot_2026-04-18_104941_j11ayn.png"
  },
  { 
      id: '09', 
      issuer: 'Google', 
      title: 'Introduction to Responsible AI', 
      date: '2026', 
      tag: 'Ethics', 
      tagColor: 'blue', 
      skills: ['Responsible AI', 'AI Ethics', 'Fairness'], 
      desc: 'Learned the core principles of Responsible AI, focusing on ethics, bias mitigation, and creating fair AI systems.',
      link: '#',
      image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1776489629/Screenshot_2026-04-18_104910_ph6koa.png"
  },
];

const colorMap = {
    green: { accent: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)' },
    purple: { accent: '#a855f7', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)' },
    blue: { accent: '#3b82f6', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)' },
    amber: { accent: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)' },
};

const CertificatesSection = () => {
    const [activeId, setActiveId] = useState(null);
    const detailPanelRef = useRef(null);

    const activeCert = certificates.find(c => c.id === activeId);

    const handleCardClick = (id) => {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
            // Scroll to the detail panel slightly if it's placed low
            setTimeout(() => {
                if (detailPanelRef.current) {
                    const rect = detailPanelRef.current.getBoundingClientRect();
                    if (rect.bottom > window.innerHeight) {
                        detailPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }
                }
            }, 100);
        }
    };

    return (
        <section 
            id="certificates" 
            className="py-16 md:py-24 relative" 
            style={{ 
                backgroundColor: '#000000', 
                color: '#ffffff',
                fontFamily: '"Inter", sans-serif'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Header Phase */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">
                        Credentials Earned
                    </p>
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white" 
                        style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                        Certificates
                    </h2>
                </motion.div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {certificates.map((cert) => {
                        const isActive = activeId === cert.id;
                        const colors = colorMap[cert.tagColor];
                        
                        return (
                            <div 
                                key={cert.id}
                                onClick={() => handleCardClick(cert.id)}
                                className={`group relative flex flex-col p-6 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                                    isActive ? 'bg-[rgba(255,255,255,0.04)]' : 'bg-transparent hover:bg-[rgba(255,255,255,0.04)]'
                                }`}
                                style={{
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                {/* Hover Image Overlay Reveal */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-sm p-4 scale-95 group-hover:scale-100 pointer-events-none">
                                    {cert.image && (
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title}
                                            className="w-full h-full object-contain rounded-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                                        />
                                    )}
                                </div>

                                {/* Accent Drop Line at very top */}
                                <div 
                                    className={`absolute top-0 left-6 right-6 h-[2px] transition-opacity duration-300 z-10 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                    style={{ backgroundColor: colors.accent }}
                                />

                                {/* Top Row - Index Number */}
                                <div 
                                    className="text-white/40 font-bold tracking-widest text-sm mb-8 relative z-10 transition-opacity duration-300 group-hover:opacity-0"
                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                >
                                    {cert.id}
                                </div>

                                {/* Middle Row - Issuer & Title */}
                                <div className="min-h-[80px] mb-8 relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                                        {cert.issuer}
                                    </span>
                                    <h3 
                                        className="text-white text-xl font-bold uppercase tracking-wide leading-tight"
                                        style={{ fontFamily: '"Anton", sans-serif' }}
                                    >
                                        {cert.title}
                                    </h3>
                                </div>

                                {/* Bottom Row - Date & Tag */}
                                <div className="mt-auto flex items-center justify-between relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="text-white/50 text-xs font-bold tracking-[0.1em] uppercase">
                                        {cert.date}
                                    </span>
                                    <div 
                                        className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider"
                                        style={{ 
                                            backgroundColor: colors.bg,
                                            color: colors.accent,
                                            border: `1px solid ${colors.border}`
                                        }}
                                    >
                                        {cert.tag}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Detail Panel */}
                <div ref={detailPanelRef}>
                    <AnimatePresence mode="wait">
                        {activeCert && (
                            <motion.div
                                key={activeCert.id}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-16"
                                style={{ 
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.08)'
                                }}
                            >
                                {/* Close Button */}
                                <button 
                                    onClick={() => setActiveId(null)}
                                    className="absolute top-6 right-6 text-[#5c5952] hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                {/* Left Column: Info */}
                                <div className="w-full lg:w-1/2 flex flex-col items-start pt-4 lg:pt-0">
                                    <span className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                                        {activeCert.issuer}
                                    </span>
                                    <h3 
                                        className="text-white text-5xl md:text-[3.5rem] leading-none mb-6 uppercase tracking-wide"
                                        style={{ fontFamily: '"Anton", sans-serif' }}
                                    >
                                        {activeCert.title}
                                    </h3>
                                    <p className="text-white/70 font-normal text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                                        {activeCert.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {activeCert.skills.map((skill, idx) => (
                                            <span 
                                                key={idx} 
                                                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-white/80"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={activeCert.link}
                                        target={activeCert.link !== '#' ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-white/80 transition-colors text-sm md:text-base mt-2"
                                    >
                                        View Credential 
                                        <motion.span
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 4 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            →
                                        </motion.span>
                                    </a>
                                </div>

                                {/* Right Column: Image */}
                                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                                    <div 
                                        className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden p-2 flex items-center justify-center relative"
                                        style={{ 
                                            backgroundColor: colorMap[activeCert.tagColor].bg,
                                            border: `1px solid ${colorMap[activeCert.tagColor].border}`
                                        }}
                                    >
                                        {activeCert.image ? (
                                            <img 
                                                src={activeCert.image} 
                                                alt={activeCert.title}
                                                className="w-full h-full object-cover rounded-xl opacity-90"
                                            />
                                        ) : (
                                            <Award size={64} className="text-white/20" />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Stats Bar */}
                <div 
                    className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/40 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    <div className="flex items-center gap-4">
                        <span className="text-white font-black text-sm">09</span>
                        <span>Total Certificates</span>
                        <span className="hidden md:inline">·</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-white font-black text-sm">07</span>
                        <span>Issuers</span>
                        <span className="hidden md:inline">·</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-white font-black text-sm">2026</span>
                        <span>Latest</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CertificatesSection;
