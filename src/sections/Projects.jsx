import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Folder, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Myntra Clone",
            description: "A full-featured online fashion store replicating Myntra, featuring product browsing by category, a functional shopping bag, and wishlist.",
            features: [
                "Browse products by categories with dynamic frontend filtering",
                "Functional shopping bag and wishlist state management",
                "Fully responsive, production-ready design optimized for all devices"
            ],
            tags: ["React", "CSS", "JavaScript", "Node.js"],
            github: "https://github.com/AnshuShee/Myntra-Cloned-Website",
            demo: "https://anshushee-project.netlify.app/",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773722259/Screenshot_2026-03-17_014708_sca2ny.png",
            bgClass: "bg-gradient-to-br from-red-900/40 to-[#111] border-red-500/20"
        },
        {
            title: "MacBook Pro M4",
            description: "A high-fidelity, interactive landing page for the Apple MacBook Pro M4, featuring flagship-grade animations and a premium dark aesthetic.",
            features: [
                "Interactive 3D-like product showcase using advanced CSS/Motion",
                "Dynamic 'Apple Intelligence' glow effects and responsive typography",
                "Pixel-perfect implementation of the iconic Apple design language"
            ],
            tags: ["React", "Framer Motion", "Tailwind CSS"],
            github: "https://github.com/AnshuShee/MacBook-M4-Pro-Landing-Page",
            demo: "https://mac-m4-anshu-shee.netlify.app/",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775497409/Screenshot_2026-04-06_230459_qmag6y.png",
            bgClass: "bg-gradient-to-br from-zinc-900 to-[#000] border-zinc-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        },
        {
            title: "FleetMetrics System",
            description: "Designed for logistics and transportation companies to efficiently manage vehicles, drivers, trips, expenses, and operational analytics.",
            features: [
                "Live dashboard for tracking active fleet metrics and expenses",
                "Comprehensive driver and vehicle scheduling system",
                "Automated maintenance alerts and diagnostic reporting views"
            ],
            tags: ["Next.js", "React", "Tailwind CSS", "Node.js"],
            github: "#",
            demo: "#", 
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773722881/Screenshot_2026-03-10_013632_qeahuc.png",
            bgClass: "bg-gradient-to-br from-emerald-900/40 to-[#111] border-emerald-500/20"
        }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"],
    });
    
    const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="projects" className="py-24 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">Crafting Modern Experiences</p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif' }}>VENTURE SHOWCASE</h2>
                </motion.div>

                <div className="relative pb-20" ref={containerRef}>
                    {/* Timeline Line */}
                    <div className="absolute left-[20px] lg:left-[35%] top-0 bottom-0 w-[2px] bg-white/10 hidden md:block">
                        <motion.div
                            style={{ height: timelineHeight }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500"
                        />
                        {/* Avatar tracking the line */}
                        <motion.div 
                            style={{ top: timelineHeight }}
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-[#000000] bg-white overflow-hidden z-20 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                        >
                            <img src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1773738246/3504a569-8920-401c-a6f6-7c7350973141_xfuttq.png" alt="Anshu" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {projects.map((project, index) => (
                        <div key={index} className="relative flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32 pl-[40px] md:pl-[80px] lg:pl-0">
                            
                            {/* Static Dot for Mobile/Tablet */}
                            <div className="absolute left-[20px] lg:left-[35%] -translate-x-1/2 top-4 w-4 h-4 rounded-full border-2 border-white/20 bg-black z-10 hidden md:block" />

                            {/* Left Content */}
                            <div className="lg:w-[35%] lg:pr-16 flex flex-col">
                                <div className="sticky top-32">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                                    </div>
                                    
                                    <div className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-6">
                                        🚀 {project.description}
                                    </div>
                                    
                                    <ul className="space-y-4 mb-8">
                                        {project.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/60 font-light text-sm md:text-base">
                                                <div className="mt-1.5 w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_5px_rgba(236,72,153,1)] shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs md:text-sm font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.github !== "#" ? project.github : undefined} target="_blank" rel="noopener noreferrer" className={`p-3 bg-white/5 border border-white/10 rounded-xl transition-all ${project.github !== "#" ? 'text-white/70 hover:text-white hover:border-white/30 cursor-pointer' : 'text-white/20 cursor-not-allowed'}`}><Github size={20} /></a>
                                        {project.demo !== "#" && (
                                            <button onClick={() => setSelectedProject(project)} className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-orange-600 hover:border-transparent transition-colors">
                                                View Live Demo
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Image Container */}
                            <div className="lg:w-[65%] lg:pl-12 mt-10 lg:mt-0">
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full p-4 sm:p-8 md:p-12 rounded-[2rem] border ${project.bgClass} shadow-2xl relative group overflow-hidden`}
                                >
                                    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-auto max-h-[500px] object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700"
                                        />
                                        {project.demo !== "#" && (
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer" onClick={() => setSelectedProject(project)}>
                                                <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <Maximize2 size={18} /> Open Interactive Preview
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#111] border border-white/20 rounded-2xl overflow-hidden w-full max-w-6xl h-full max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0a]">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-bold text-lg text-white">{selectedProject.title}</h3>
                                    <a 
                                        href={selectedProject.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 text-white/90 hover:bg-white/20 border border-white/10 transition-colors font-medium"
                                    >
                                        Open tab <ExternalLink size={14} />
                                    </a>
                                </div>
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            
                            <div className="flex-1 bg-black relative">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="animate-pulse flex flex-col items-center gap-3 text-white/50">
                                        <div className="w-8 h-8 border-4 border-white/30 border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-sm font-medium">Loading project preview...</p>
                                    </div>
                                </div>
                                <iframe 
                                    src={selectedProject.demo} 
                                    title={`Preview of ${selectedProject.title}`}
                                    className="w-full h-full border-none relative z-10 bg-white"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
