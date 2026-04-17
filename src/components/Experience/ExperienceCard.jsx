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
                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFA116" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                        LeetCode
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ExperienceCard;
