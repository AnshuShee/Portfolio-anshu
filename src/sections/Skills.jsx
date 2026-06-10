import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs,
    SiExpress, SiPostgresql, SiMongodb, SiGit, SiGithub, SiVercel, SiNetlify,
    SiRender, SiDocker, SiLinux, SiC, SiCplusplus, SiHtml5, SiCss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import SteelFlower from '../components/SteelFlower';

/* ─── Skill data with icons ─── */
const SKILLS = [
    [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss, color: '#1572B6' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    ],
    [
        { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
        { name: 'NextJS', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    [
        { name: 'Motion', icon: SiFramer, color: '#BB4BF6' },
        { name: 'NodeJS', icon: SiNodedotjs, color: '#339933' },
        { name: 'ExpressJS', icon: SiExpress, color: '#ffffff' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
    [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
        { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
    ],
    [
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'Render', icon: SiRender, color: '#46E3B7' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    ],
];





const Skills = () => {
    return (
        <section id="skills" className="sk-section border-b border-white/5">
            <div className="sk-content">
                {/* 3D Sculpture Component */}
                <SteelFlower />

                {/* Heading Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="flex flex-col items-center text-center mb-10 md:mb-12"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff8a00] to-orange-600 uppercase drop-shadow-[0_0_10px_rgba(255,138,0,0.5)] mb-4 text-center">
                        MY SKILLSET
                    </p>
                    <h2 
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight uppercase" 
                        style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                        The Magic <span className="sk-title-accent">Behind</span>
                    </h2>
                </motion.div>

                {/* Skill rows */}
                <div className="sk-rows">
                    {SKILLS.map((row, rowIdx) => (
                        <motion.div
                            key={rowIdx}
                            className="sk-row"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: rowIdx * 0.1,
                                    },
                                },
                            }}
                        >
                            {row.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        className="sk-pill"
                                        variants={{
                                            hidden: { opacity: 0, y: 12 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.5, ease: 'easeOut' },
                                            },
                                        }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                    >
                                        <Icon
                                            className="sk-pill-icon"
                                            style={{ color: skill.color }}
                                        />
                                        <span className="sk-pill-text">{skill.name}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

