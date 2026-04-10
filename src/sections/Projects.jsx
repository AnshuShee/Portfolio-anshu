import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Folder, X, Maximize2, Youtube } from 'lucide-react';
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
            youtube: "https://youtu.be/OxxYQk876w8?si=hP2809pOd8ArperA",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775812599/maxresdefault_obuy37.webp",
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
            youtube: "https://youtu.be/C1AmmybvOPk?si=G6zE390LgiyAZHvo",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775815226/Mac_thumbnail_mg7ghx.jpg",
            bgClass: "bg-gradient-to-br from-zinc-900 to-[#000] border-zinc-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        },
        {
            title: "GetYourGuide Clone",
            description: "A fully responsive travel experience booking platform inspired by GetYourGuide. Discover and explore tours, attractions, and activities worldwide.",
            features: [
                "Interactive UI matching the real GetYourGuide platform",
                "Browse diverse travel experiences and guided tours",
                "Fully responsive, modern layout optimized for seamless browsing"
            ],
            tags: ["React", "CSS", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/AnshuShee",
            demo: "https://get-your-guide-by-anshushee.netlify.app/", 
            youtube: "https://youtu.be/D5k05kKDQbY?si=oV2rWqSXYiQRGOzy",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1775815908/Cloning_GetYourGuide__A_digital_transformation_1_qearxw.png",
            bgClass: "bg-gradient-to-br from-blue-900/40 to-[#111] border-blue-500/20"
        }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"],
    });
    
    const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="projects" className="py-12 md:py-16 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
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

                                    <div className="flex flex-wrap items-center gap-4">
                                        <a href={project.github !== "#" ? project.github : undefined} target="_blank" rel="noopener noreferrer" className={`p-3 bg-white/5 border border-white/10 rounded-xl transition-all ${project.github !== "#" ? 'text-white/70 hover:text-white hover:border-white/30 cursor-pointer group' : 'text-white/20 cursor-not-allowed'}`}>
                                            <Github size={20} className="block group-hover:hidden transition-transform" />
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="20" 
                                                height="20" 
                                                viewBox="0 0 256 256"
                                                className="hidden group-hover:block transition-transform group-hover:scale-110"
                                            >
                                                <g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#161614" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g>
                                            </svg>
                                        </a>
                                        {project.youtube && (
                                            <a href={project.youtube} target="_blank" rel="noopener noreferrer" className={`p-3 bg-white/5 border border-white/10 rounded-xl transition-all text-white/70 hover:text-[#FF0000] hover:border-[#FF0000]/30 cursor-pointer group`} title="Watch on YouTube">
                                                <Youtube size={20} className="block group-hover:hidden transition-transform" />
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="20" 
                                                    height="20" 
                                                    viewBox="0 0 256 180" 
                                                    className="hidden group-hover:block transition-transform group-hover:scale-110"
                                                >
                                                    <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                                                    <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
                                                </svg>
                                            </a>
                                        )}
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
                                    className="w-full relative group"
                                >
                                    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full aspect-video object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700"
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
