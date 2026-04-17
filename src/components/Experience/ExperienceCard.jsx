import React from 'react';
import { Github, ExternalLink, Laptop, Trophy, Globe, Brain, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ index, title, type, duration, description, techStack, githubLink, liveLink, leetcodeLink }) => {
    
    // Determine icon and color based on type
    const getTypeConfig = (type) => {
        if (type.includes('SaaS') || type.includes('Full Stack') || type.includes('Project')) {
            return { icon: <Laptop size={16} />, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };
        } else if (type.includes('Hackathon')) {
            return { icon: <Trophy size={16} />, color: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' };
        } else if (type.includes('Open Source')) {
            return { icon: <Globe size={16} />, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
        } else if (type.includes('Technical') || type.includes('Knowledge')) {
            return { icon: <Brain size={16} />, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' };
        } else {
            return { icon: <Code size={16} />, color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' };
        }
    };

    const typeConfig = getTypeConfig(type);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all group relative overflow-hidden flex flex-col h-full"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all">{title}</h3>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${typeConfig.color}`}>
                        {typeConfig.icon}
                        {type}
                    </span>
                </div>
                <span className="text-white/60 text-sm font-medium tracking-wide uppercase px-3 py-1 bg-white/5 rounded-full border border-white/5 whitespace-nowrap">{duration}</span>
            </div>

            <div className="space-y-4 mb-6 flex-grow">
                <p className="text-white/70 leading-relaxed font-light text-sm md:text-base"><strong className="text-white/90 font-medium">Built:</strong> {description.what}</p>
                <p className="text-white/70 leading-relaxed font-light text-sm md:text-base"><strong className="text-white/90 font-medium">Problem Solved:</strong> {description.problem}</p>
                <p className="text-white/70 leading-relaxed font-light text-sm md:text-base"><strong className="text-white/90 font-medium">Impact:</strong> {description.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 hover:bg-white/10 text-white/80 text-xs rounded-lg border border-white/10 transition-colors">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
                        <Github size={18} />
                        Code
                    </a>
                )}
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium">
                        <ExternalLink size={18} />
                        Live Demo
                    </a>
                )}
                {leetcodeLink && (
                    <a href={leetcodeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FFA116] hover:text-[#FFB347] transition-colors text-sm font-medium">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.517a1.424 1.424 0 0 0 0 2.013 1.424 1.424 0 0 0 2.013 0l4.377-4.517A1.424 1.424 0 0 0 13.483 0zm-4.377 6.944a1.424 1.424 0 0 0-2.013 0L2.717 11.46a1.424 1.424 0 0 0 0 2.013l4.377 4.517a1.424 1.424 0 0 0 2.013 0l4.377-4.517a1.424 1.424 0 0 0 0-2.013l-4.377-4.517zm5.338 5.531a1.424 1.424 0 0 0 0 2.013l4.377 4.517a1.424 1.424 0 0 0 2.013 0l4.377-4.517a1.424 1.424 0 0 0 0-2.013l-4.377-4.517z"/>
                        </svg>
                        LeetCode
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ExperienceCard;
