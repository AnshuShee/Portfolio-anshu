import React, { useState } from 'react';
import { ExternalLink, Github, Folder, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Myntra Clone (E-Commerce)",
            description: "A full-featured online fashion store replicating Myntra, featuring product browsing by category, a functional shopping bag, and wishlist.",
            tags: ["React", "CSS", "JavaScript", "Node.js"],
            github: "https://github.com/AnshuShee/Myntra-Cloned-Website",
            demo: "https://anshushee-project.netlify.app/",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773722259/Screenshot_2026-03-17_014708_sca2ny.png"
        },
        {
            title: "Task Management App",
            description: "A simple and intuitive To-Do List application to manage daily tasks efficiently.",
            tags: ["React", "JavaScript", "CSS"],
            github: "#",
            demo: "https://to-do-list-anshushee.netlify.app/",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773722441/Screenshot_2026-03-17_101027_egcnfg.png"
        },
        {
            title: "Fleet Management System",
            description: "FleetMetrics is designed for logistics and transportation companies to efficiently manage vehicles, drivers, trips, expenses, maintenance, and operational analytics from a single platform.",
            tags: ["Next.js", "React", "Tailwind CSS", "Node.js"],
            github: "#",
            demo: "#", // Add the URL here when live
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773722881/Screenshot_2026-03-10_013632_qeahuc.png"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12"
                >
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-blue-500 font-semibold tracking-wider uppercase">My Work</h3>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                Live Demos Available
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            You can check out the live preview of most of these projects right away by clicking the external link icons below!
                        </p>
                    </div>
                    <a href="https://github.com/AnshuShee?tab=repositories" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors mt-6 md:mt-0 font-medium whitespace-nowrap">
                        <Github size={18} /> View GitHub
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group rounded-2xl bg-slate-900 border border-white/5 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col h-full cursor-pointer"
                            onClick={() => project.demo !== "#" && setSelectedProject(project)}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                                    {project.demo !== "#" && (
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
                                            <Maximize2 size={18} /> Preview
                                        </div>
                                    )}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                        <Folder size={20} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white transition-colors z-20 relative"><Github size={20} /></a>
                                        {project.demo !== "#" ? (
                                            <button onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }} className="text-slate-400 hover:text-blue-400 transition-colors z-20 relative"><ExternalLink size={20} /></button>
                                        ) : (
                                            <span title="Demo not available yet" className="text-slate-600 cursor-not-allowed z-20 relative"><ExternalLink size={20} /></span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-slate-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="https://github.com/AnshuShee?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        View GitHub <ExternalLink size={16} />
                    </a>
                </div>

            </div>

            {/* Iframe Preview Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden w-full max-w-6xl h-full max-h-[90vh] flex flex-col shadow-2xl shadow-blue-900/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-bold text-lg text-white">{selectedProject.title}</h3>
                                    <a 
                                        href={selectedProject.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                                    >
                                        Open in new tab <ExternalLink size={14} />
                                    </a>
                                </div>
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            
                            {/* Iframe Body */}
                            <div className="flex-1 bg-black relative">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="animate-pulse flex flex-col items-center gap-3 text-slate-500">
                                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-sm font-medium">Loading project...</p>
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
