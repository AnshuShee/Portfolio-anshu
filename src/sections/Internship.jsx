import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase, Calendar, MapPin, Github, Linkedin, ChevronDown, ChevronUp,
    CheckCircle, Code2, Layers, Shield, Zap, BookOpen, Laptop
} from 'lucide-react';

const techColors = {
    'JavaScript': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
    'Node.js':    'bg-green-500/15 text-green-400 border-green-500/30',
    'Express.js': 'bg-white/10 text-white/70 border-white/20',
    'REST APIs':  'bg-blue-500/15 text-blue-400 border-blue-500/30',
    'JSON':       'bg-purple-500/15 text-purple-400 border-purple-500/30',
    'React':      'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    'Express':    'bg-white/10 text-white/70 border-white/20',
    'MongoDB':    'bg-green-500/15 text-green-400 border-green-500/30',
};

const defaultBadge = 'bg-orange-500/15 text-orange-400 border-orange-500/30';

const projects = [
    {
        name: 'Online Store Orders API',
        icon: <Code2 size={20} />,
        description: 'A production-grade RESTful API for complete e-commerce order lifecycle management, built following industry MVC and REST standards.',
        highlights: [
            'RESTful CRUD operations for complete order lifecycle management',
            'Data modeling for customers, products, payments, and order statuses',
            'Modular architecture using Express Router and MVC design patterns',
            'Request validation and centralized error handling',
        ],
        techStack: ['JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'JSON'],
        githubLink: 'https://github.com/AnshuShee',
        linkedInLink: 'https://www.linkedin.com/in/anshu-shee-3119183a0/',
    },
];

const learnings = [
    { icon: <Layers size={16} />, text: 'Backend architecture and API development' },
    { icon: <Shield size={16} />, text: 'Route management and MVC patterns' },
    { icon: <Zap size={16} />, text: 'Writing clean, scalable, and maintainable code' },
    { icon: <BookOpen size={16} />, text: 'Industry-standard development practices' },
];

const Internship = () => {
    const [expandedDecode, setExpandedDecode] = useState(true);

    return (
        <section
            id="internship"
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
                        Professional Experience
                    </p>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
                        style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                        Internship
                    </h2>
                    <p className="mt-5 text-white/50 max-w-xl mx-auto text-base font-light">
                        Real-world software engineering experience building production-ready applications and systems.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {/* ── DecodeLabs Card ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="relative max-w-5xl mx-auto w-full"
                    >
                        {/* Glowing border effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 via-transparent to-orange-600/10 blur-xl -z-10" />

                        <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm transition-all hover:border-white/20">
                            {/* Top accent bar */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff8a00] to-transparent" />

                            {/* Company header */}
                            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/8">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
                                    {/* Company Icon */}
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-600/10 border border-orange-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,138,0,0.2)] overflow-hidden">
                                        <img src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1781085924/DecodeLabs-Image_navwxx.jpg" alt="DecodeLabs Logo" className="w-full h-full object-cover" />
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-white">Backend Development Intern</h3>
                                            <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30 uppercase tracking-wide">
                                                Internship
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/55 text-sm">
                                            <span className="flex items-center gap-1.5 font-medium text-white/80">
                                                <MapPin size={14} className="text-[#ff8a00]" />
                                                DecodeLabs · Batch 2026
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                June – July 2026
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Expand / Collapse toggle */}
                                <button
                                    onClick={() => setExpandedDecode(v => !v)}
                                    className="self-start md:self-center flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/25 text-sm font-medium transition-all"
                                >
                                    {expandedDecode ? <><ChevronUp size={16} /> Collapse</> : <><ChevronDown size={16} /> Expand</>}
                                </button>
                            </div>

                            {/* Expandable content */}
                            <motion.div
                                initial={false}
                                animate={{ height: expandedDecode ? 'auto' : 0, opacity: expandedDecode ? 1 : 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="p-6 md:p-8 space-y-8">
                                    {/* ── Project Cards ── */}
                                    <div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-4">Projects</p>
                                        <div className="grid grid-cols-1 gap-5">
                                            {projects.map((proj, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-2xl p-5 md:p-6 transition-all duration-300 relative overflow-hidden"
                                                >
                                                    {/* Subtle hover gradient */}
                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    {/* Project header */}
                                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#ff8a00]">
                                                                {proj.icon}
                                                            </div>
                                                            <h4 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                                                                {proj.name}
                                                            </h4>
                                                        </div>
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <a
                                                                href={proj.githubLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-white/60 hover:text-white text-sm font-medium transition-all"
                                                            >
                                                                <Github size={15} />
                                                                View on GitHub
                                                            </a>
                                                            {proj.linkedInLink && (
                                                                <a
                                                                    href={proj.linkedInLink}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border border-[#0077B5]/30 hover:border-[#0077B5]/60 text-[#0077B5] hover:text-[#00a0dc] text-sm font-medium transition-all"
                                                                >
                                                                    <Linkedin size={15} />
                                                                    LinkedIn
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <p className="text-white/55 text-sm leading-relaxed mb-4">{proj.description}</p>

                                                    {/* Highlights */}
                                                    <ul className="space-y-2 mb-5">
                                                        {proj.highlights.map((h, j) => (
                                                            <li key={j} className="flex items-start gap-2.5 text-sm text-white/65">
                                                                <CheckCircle size={15} className="text-[#ff8a00] flex-shrink-0 mt-0.5" />
                                                                {h}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Tech Stack */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {proj.techStack.map((tech, k) => (
                                                            <span
                                                                key={k}
                                                                className={`px-3 py-1 rounded-lg text-xs font-semibold border ${techColors[tech] || defaultBadge}`}
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ── Key Learnings ── */}
                                    <div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-4">Key Learnings</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {learnings.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-colors"
                                                >
                                                    <span className="text-[#ff8a00] flex-shrink-0">{item.icon}</span>
                                                    <span className="text-white/65 text-sm">{item.text}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── CodeAlpha Card ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="relative max-w-5xl mx-auto w-full"
                    >
                        {/* Glowing border effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 via-transparent to-orange-600/10 blur-xl -z-10" />

                        <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm transition-all hover:border-white/20">
                            {/* Top accent bar */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff8a00] to-transparent" />

                            {/* Company header */}
                            <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6">
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Company Icon */}
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-600/10 border border-orange-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,138,0,0.2)] overflow-hidden">
                                        <img src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1781086825/1677167041761_eeu4pu.jpg" alt="CodeAlpha Logo" className="w-full h-full object-cover" />
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack Development Intern</h3>
                                            <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30 uppercase tracking-wide">
                                                Internship
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/55 text-sm mb-4">
                                            <span className="flex items-center gap-1.5 font-medium text-white/80">
                                                <Briefcase size={14} className="text-[#ff8a00]" />
                                                CodeAlpha
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                10th June 2026 – 10th July 2026
                                            </span>
                                        </div>
                                        
                                        <p className="text-white/65 text-sm md:text-base leading-relaxed mb-5">
                                            Hands-on full stack development internship focused on learning new skills with deeper understanding through practical application.
                                        </p>
                                        
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'Node.js', 'Express', 'MongoDB'].map((tech, k) => (
                                                <span
                                                    key={k}
                                                    className={`px-3 py-1 rounded-lg text-xs font-semibold border ${techColors[tech] || defaultBadge}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Internship;
