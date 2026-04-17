import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
    const experienceData = [
        {
            title: "Campus Ride Sharing Platform (ShareMyRide)",
            type: "Full Stack / SaaS",
            duration: "Present (Under Development)",
            description: {
                what: "A web and desktop-enabled platform where students can seamlessly offer rides, find companions on similar routes, and share travel expenses.",
                problem: "Students consistently faced daily commuting inconvenience, high transportation costs, and a lack of eco-friendly peer transit options.",
                impact: "Engineered core routing modules focused on drastically reducing commuter costs and building a sustainable, connected campus transit community."
            },
            techStack: ["React.js", "Electron.js", "Node.js", "Express.js", "MongoDB", "Figma", "Postman"],
            githubLink: "https://github.com/anshu/sharemyride",
            liveLink: ""
        },
        {
            title: "Craftathon 2026",
            type: "Hackathon",
            duration: "2026",
            description: {
                what: "VeerSetu - Tactical Asset Management System",
                problem: "VeerSetu is a high-fidelity Indian Army Command and Control interface designed for real-time asset tracking, inventory management, and mission-critical audit logging. It features a robust role-based access control (RBAC) system, blockchain-inspired data integrity, and a premium military-grade UI.",
                impact: "This project implements strict Row Level Security (RLS). Only authorized officers can view classified mission data or sensitive equipment logs."
            },
            techStack: ["React", "Supabase", "PostgreSQL", "Postman", "RBAC", "RLS"],
            githubLink: "https://github.com/AnshuShee/Veer-Setu",
            liveLink: ""
        },
        {
            title: "Ecosystem Contributions",
            type: "Open Source",
            duration: "2026",
            description: {
                what: "Shipped core features and issue resolutions across several widely-used open-source repositories and libraries.",
                problem: "Community-driven tools often contained accessibility gaps and unresolved API deprecation bugs affecting many developer teams.",
                impact: "Successfully merged 10+ Pull Requests, enhancing cross-browser compatibility and streamlining the developer experience for thousands globally."
            },
            techStack: ["React", "TypeScript", "Git", "Jest"],
            githubLink: "https://github.com/AnshuShee",
            liveLink: ""
        },
        {
            title: "Architecture & Core Concepts",
            type: "Technical Knowledge",
            duration: "Continuous",
            description: {
                what: "Deep mastery of foundational Computer Science concepts, including Data Structures, Algorithms, and System Design.",
                problem: "Modern application workflows require an architectural mindset beyond basic syntactical coding to prevent large-scale technical debt.",
                impact: "Attained proficiency in deploying scalable microservices, efficient state management, and optimized database queries, ensuring production-ready standards."
            },
            techStack: ["System Design", "DSA", "AWS", "Docker", "PostgreSQL"],
            githubLink: "",
            liveLink: ""
        }
    ];

    return (
        <section id="practical-experience" className="py-12 md:py-16 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">Engineering Experience</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif' }}>The Builder Profile</h2>
                    <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg font-light">
                        My expertise comes from architecting real-world applications, solving complex algorithms, and contributing to open-source ecosystems globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
                    {experienceData.map((item, index) => (
                        <ExperienceCard key={index} index={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
