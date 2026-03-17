import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
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
            demo: "#",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773722881/Screenshot_2026-03-10_013632_qeahuc.png"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-black text-white">
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
                            className="group rounded-2xl bg-slate-900 border border-white/5 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                        <Folder size={20} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.demo} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
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
                    <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        View All Projects <ExternalLink size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
