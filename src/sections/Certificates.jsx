import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import udemyCert from '../assets/udemy-cert.jpg';
import outskillCert from '../assets/outskill-cert.jpg';
import wscubeCert from '../assets/wscube-cert.jpg';
import awsCert from '../assets/aws-cert.jpg';
import forgeCert from '../assets/forge-cert.jpg';

const Certificates = () => {
    const certificates = [
        {
            id: 'cert-1',
            name: "Claude Code in Action",
            issuer: "Anthropic",
            date: "2026",
            link: "#",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775709633/certificate-b3a4pd6wpuxv-1775709467_page-0001_htadhv.jpg",
            description: "Mastered advanced usage of Claude AI for building real-world applications and optimizing development workflows.",
            skills: ["Prompt Engineering", "Claude API", "AI Agents"]
        },
        {
            id: 'cert-2',
            name: "AWS - Application Migration Service",
            issuer: "AWS",
            date: "2025",
            link: "#",
            image: awsCert,
            description: "Learned best practices for migrating applications to AWS using the Application Migration Service.",
            skills: ["AWS", "Cloud Migration", "Infrastructure"]
        },
        {
            id: 'cert-3',
            name: "Software Development Job Simulation",
            issuer: "Forage",
            date: "2025",
            link: "#",
            image: forgeCert,
            description: "Gained practical experience through simulated real-world software engineering tasks and team workflows.",
            skills: ["Software Engineering", "Agile", "Problem Solving"]
        },
        {
            id: 'cert-4',
            name: "HTML and CSS for Beginners",
            issuer: "Udemy",
            date: "Dec 2025",
            link: "#",
            image: udemyCert,
            description: "Built a solid foundation in web development covering semantic HTML and modern CSS styling.",
            skills: ["HTML5", "CSS3", "Responsive Design"]
        },
        {
            id: 'cert-5',
            name: "Generative AI Mastermind",
            issuer: "Outskill",
            date: "2025",
            link: "#",
            image: outskillCert,
            description: "Explored the fundamentals of generative AI and its applications in modern tech solutions.",
            skills: ["Generative AI", "Machine Learning", "Innovation"]
        },
        {
            id: 'cert-6',
            name: "Build Your Own AI Assistant for a Brand",
            issuer: "WsCube Tech",
            date: "Dec 24, 2025",
            link: "#",
            image: wscubeCert,
            description: "Developed a customized AI assistant tailored for brand interaction and customer engagement.",
            skills: ["AI Assistants", "Chatbots", "Brand Tech"]
        }
    ];

    const [activeCertId, setActiveCertId] = useState(certificates[0].id);
    const activeCertIdRef = useRef(certificates[0].id);
    const [activeCertData, setActiveCertData] = useState(certificates[0]);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleCertChange = (newId) => {
        if (newId !== activeCertIdRef.current) {
            activeCertIdRef.current = newId;
            setActiveCertId(newId);
            setIsUpdating(true);
            setTimeout(() => {
                const newData = certificates.find(c => c.id === newId) || certificates[0];
                setActiveCertData(newData);
                setIsUpdating(false);
            }, 250);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    handleCertChange(entry.target.dataset.certId);
                }
            });
        }, {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        });

        const elements = document.querySelectorAll('.cert-card');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleCardClick = (id) => {
        handleCertChange(id);
        if (window.innerWidth < 768) {
            document.getElementById('certificates-header')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            document.querySelector(`[data-cert-id="${id}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section id="certificates" className="py-12 md:py-24 border-b border-white/10 relative overflow-hidden" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative items-start">

                    {/* Left Panel - Sticky Detail */}
                    <div className="w-full md:w-1/2 md:sticky md:top-24 h-auto md:h-[calc(100vh-120px)] flex flex-col justify-start md:justify-center text-left z-10 pt-8 md:pt-0" id="certificates-header">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mb-8 md:mb-12"
                        >
                            <p className="inline-block text-lg md:text-xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-2">Qualifications</p>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif' }}>Certificates</h2>
                        </motion.div>

                        {/* Sticky Detail Panel */}
                        <div className={`cert-detail-panel transition-all duration-300 ease-in-out ${isUpdating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} flex-1 flex flex-col justify-start md:justify-center`}>
                            {/* Certificate Image Frame */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] mb-6 md:mb-8 w-full max-w-lg aspect-[4/3] flex items-center justify-center p-2 md:p-4 relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 opacity-50" />
                                {activeCertData.image ? (
                                    <img
                                        src={activeCertData.image}
                                        alt={activeCertData.name}
                                        className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                                    />
                                ) : (
                                    <Award size={64} className="text-white/20 relative z-10" />
                                )}
                            </div>

                            {/* Details */}
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{activeCertData.name}</h3>

                            <div className="flex items-center gap-3 md:gap-4 mb-6 text-sm md:text-base">
                                <span className="text-white/80 font-medium">{activeCertData.issuer}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                                <span className="text-amber-500 font-bold uppercase tracking-widest text-xs outline outline-1 outline-white/10 px-2 py-1 rounded bg-white/5">{activeCertData.date}</span>
                            </div>

                            <p className="text-white/60 leading-relaxed mb-8 max-w-lg md:text-lg">
                                {activeCertData.description}
                            </p>

                            <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                                {activeCertData.skills.map(skill => (
                                    <span key={skill} className="px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 border border-white/10 text-white/80">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto md:mt-4">
                                <a
                                    href={activeCertData.link || '#'}
                                    target={activeCertData.link !== '#' ? "_blank" : undefined}
                                    rel={activeCertData.link !== '#' ? "noopener noreferrer" : undefined}
                                    className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform hover:bg-gray-100"
                                >
                                    View Credential <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Progress Indicator Desktop */}
                        <div className="hidden md:flex items-center gap-4 text-sm font-bold tracking-widest text-white/30 mt-12 mb-8">
                            <span className="text-white/80">{String(certificates.findIndex(c => c.id === activeCertData.id) + 1).padStart(2, '0')}</span>
                            <div className="h-px w-16 bg-white/20"></div>
                            <span>{String(certificates.length).padStart(2, '0')}</span>
                        </div>
                    </div>

                    {/* Right Panel - Scroll List */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 pb-12 md:pb-[20vh] md:mt-[20vh]">
                        {certificates.map((cert) => (
                            <motion.div
                                key={cert.id}
                                data-cert-id={cert.id}
                                onClick={() => handleCardClick(cert.id)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`cert-card relative p-4 md:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 md:gap-6 items-center
                                    ${activeCertId === cert.id
                                        ? 'bg-[#1a1a1a] border-white/30 md:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                                        : 'bg-[#0a0a0a] border-white/5 md:opacity-50 md:hover:opacity-100 hover:bg-[#111]'
                                    }`}
                            >
                                {/* Active Accent Bar */}
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-gradient-to-b from-purple-500 to-orange-400 rounded-r-full transition-opacity duration-300 ${activeCertId === cert.id ? 'opacity-100' : 'opacity-0'}`} />

                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shrink-0 p-1 md:p-2">
                                    {cert.image ? (
                                        <img src={cert.image} alt={cert.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <Award size={32} className="text-white/20" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-1.5 leading-tight truncate">{cert.name}</h4>
                                    <p className="text-white/50 text-sm md:text-base font-medium truncate">{cert.issuer}</p>
                                    <div className="mt-2 md:mt-3">
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
                                            {cert.date}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certificates;
