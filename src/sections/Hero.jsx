import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import TypingEffect from '../components/TypingEffect';
import profilePic from '../assets/profile.jpg';


const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900 pt-32 md:pt-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-blue-400 font-medium tracking-wide text-sm md:text-lg lg:text-xl mb-4">
                            WELCOME TO MY PORTFOLIO
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Hi, I'm <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Anshu Shee
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent min-h-[40px]">
                            <TypingEffect
                                text={["Web Developer", "Full Stack Engineer", "AI Enthusiast"]}
                                speed={100}
                                deleteSpeed={50}
                                delay={2000}
                            />
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed"
                    >
                        A full stack engineer, crafting scalable, responsive and efficient web applications with growing proficiency as an AI developer. 🚀
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25"
                        >
                            Contact Me <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            Resume <FileText size={20} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-6 text-slate-400 pt-4"
                    >
                        <a href="https://github.com/AnshuShee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/anshu-shee-3119183a0/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMGE2NmMyIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMCA0IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRNMzggNTkuNjI4YzAgMTEuODY0IDkuNzY3IDIxLjYyNiAyMS42MzIgMjEuNjI2YzExLjg2Mi0uMDAxIDIxLjYyMy05Ljc2OSAyMS42MjMtMjEuNjMxQzgxLjI1MyA0Ny43NjEgNzEuNDkxIDM4IDU5LjYyOCAzOEM0Ny43NjIgMzggMzggNDcuNzYzIDM4IDU5LjYyN202Ljk1OSAxNTguMDU4aDI5LjMwN2E0IDQgMCAwIDAgNC00VjEwMS42NmE0IDQgMCAwIDAtNC00SDQ0Ljk1OWE0IDQgMCAwIDAtNCA0djExMi4wMjVhNCA0IDAgMCAwIDQgNCIvPjwvZz48L3N2Zz4=" alt="LinkedIn" className="w-6 h-6 rounded-md hover:scale-110 transition-transform" />
                        </a>
                        <a href="mailto:anshu.shee.cg@gmail.com" className="hover:opacity-80 transition-opacity">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZjRmMmVkIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjNDI4NWY0IiBkPSJNNDEuNjM2IDIwMy4wMzloMzEuODE4di03Ny4yNzNMMjggOTEuNjc2djk3LjcyN2MwIDcuNTQ1IDYuMTE0IDEzLjYzNiAxMy42MzYgMTMuNjM2Ii8+PHBhdGggZmlsbD0iIzM0YTg1MyIgZD0iTTE4Mi41NDUgMjAzLjAzOWgzMS44MTljNy41NDUgMCAxMy42MzYtNi4xMTQgMTMuNjM2LTEzLjYzNlY5MS42NzVsLTQ1LjQ1NSAzNC4wOTEiLz48cGF0aCBmaWxsPSIjZmJiYzA0IiBkPSJNMTgyLjU0NSA2Ni42NzV2NTkuMDkxTDIyOCA5MS42NzZWNzMuNDkyYzAtMTYuODYzLTE5LjI1LTI2LjQ3Ny0zMi43MjctMTYuMzYzIi8+PHBhdGggZmlsbD0iI2VhNDMzNSIgZD0iTTczLjQ1NSAxMjUuNzY2di01OS4wOUwxMjggMTA3LjU4M2w1NC41NDUtNDAuOTA5djU5LjA5MUwxMjggMTY2LjY3NSIvPjxwYXRoIGZpbGw9IiNjNTIyMWYiIGQ9Ik0yOCA3My40OTN2MTguMTgybDQ1LjQ1NCAzNC4wOTF2LTU5LjA5TDYwLjcyNyA1Ny4xM0M0Ny4yMjcgNDcuMDE2IDI4IDU2LjYzIDI4IDczLjQ5MyIvPjwvZz48L3N2Zz4=" alt="Gmail" className="w-6 h-6 rounded-md hover:scale-110 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <div className="md:col-span-1 flex justify-center items-center order-1 md:order-2 -mt-8 md:-mt-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group"
                    >
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-60 group-hover:blur-3xl transition-all duration-500"></div>
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-900/50 shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
