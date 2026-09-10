import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {

    return (
        <div className="resume-section" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}>

            {/* Download / Print bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '24px',
                flexWrap: 'wrap',
            }}>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    href="/Anshu_Shee_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Anshu_Shee_Resume.pdf"
                    style={{
                        background: '#ff8a00',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 28px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '0.04em',
                        cursor: 'pointer',
                        boxShadow: '0 4px 18px rgba(255,138,0,0.35)',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}
                >
                    Download PDF
                </motion.a>
            </div>

            {/* A4 Resume Card */}
            <div className="resume-page" id="resume-content">

                {/* HEADER */}
                <div className="resume-header">
                    <div className="resume-header-top">
                        <h1 className="resume-name-title">Anshu Shee</h1>
                        <div className="resume-header-contact">
                            <div>
                                <a href="mailto:anshu.shee@outlook.com">anshu.shee@outlook.com</a>
                            </div>
                            <div>+91 63743 56xxx &nbsp;|&nbsp; Bhubaneswar, Odisha, India</div>
                        </div>
                    </div>
                    <hr className="resume-divider" />
                    <div className="resume-header-links">
                        <a href="https://github.com/AnshuShee" target="_blank" rel="noreferrer">github.com/AnshuShee</a>
                        <span className="link-divider">|</span>
                        <a href="https://linkedin.com/in/anshu-shee" target="_blank" rel="noreferrer">linkedin.com/in/anshu-shee</a>
                        <span className="link-divider">|</span>
                        <a href="https://anshu-portfolio.vercel.app" target="_blank" rel="noreferrer">anshu-portfolio.vercel.app</a>
                        <span className="link-divider">|</span>
                        <a href="https://leetcode.com/u/AnshuShee" target="_blank" rel="noreferrer">leetcode.com/u/AnshuShee</a>
                    </div>
                </div>

                {/* BODY */}
                <div className="resume-body">

                    {/* LEFT COLUMN */}
                    <div className="resume-col-left">

                        {/* PROFILE */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Profile</div>
                            <p className="resume-profile-text">
                                Passionate full-stack developer and competitive programmer with hands-on
                                experience building scalable web and mobile applications. Skilled in
                                React, Node.js, React Native, and cloud services. Strong foundation in
                                data structures and algorithms; active on LeetCode and open-source
                                platforms. Committed to writing clean, efficient, and maintainable code.
                            </p>
                        </div>

                        {/* SKILLS */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Skills</div>

                            <div className="resume-skill-group">
                                <div className="resume-skill-label">Programming Languages</div>
                                <ul className="resume-bullet-list">
                                    <li>C, C++, JavaScript, Python</li>
                                </ul>
                            </div>

                            <div className="resume-skill-group">
                                <div className="resume-skill-label">Frontend</div>
                                <ul className="resume-bullet-list">
                                    <li>React.js, React Native (Expo), HTML5, CSS3</li>
                                    <li>Framer Motion, GSAP, Three.js</li>
                                </ul>
                            </div>

                            <div className="resume-skill-group">
                                <div className="resume-skill-label">Backend &amp; Database</div>
                                <ul className="resume-bullet-list">
                                    <li>Node.js, Express.js, REST APIs</li>
                                    <li>MongoDB, Mongoose, JWT Auth</li>
                                    <li>Socket.io, Firebase</li>
                                </ul>
                            </div>

                            <div className="resume-skill-group">
                                <div className="resume-skill-label">Tools &amp; Platforms</div>
                                <ul className="resume-bullet-list">
                                    <li>Git, GitHub, VS Code</li>
                                    <li>Vercel, Render, Cloudinary, Postman</li>
                                    <li>Figma, Canva</li>
                                </ul>
                            </div>

                            <div className="resume-skill-group">
                                <div className="resume-skill-label">CS Fundamentals</div>
                                <ul className="resume-bullet-list">
                                    <li>DSA, OOP, DBMS, OS, Computer Networks</li>
                                </ul>
                            </div>
                        </div>

                        {/* EDUCATION */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Education</div>

                            <div className="resume-edu-item">
                                <div className="resume-edu-school">
                                    KIIT University — B.Tech CSE
                                </div>
                                <div className="resume-edu-year">2022 — 2026 &nbsp;|&nbsp; CGPA: 8.xx</div>
                                <ul className="resume-bullet-list" style={{ marginTop: '4px' }}>
                                    <li>Core: DSA, OOP, DBMS, OS, CN</li>
                                </ul>
                            </div>

                            <div className="resume-edu-item">
                                <div className="resume-edu-school">
                                    Class XII — CBSE
                                </div>
                                <div className="resume-edu-year">2021 &nbsp;|&nbsp; 88.6%</div>
                            </div>

                            <div className="resume-edu-item">
                                <div className="resume-edu-school">
                                    Class X — CBSE
                                </div>
                                <div className="resume-edu-year">2019 &nbsp;|&nbsp; 91.4%</div>
                            </div>
                        </div>

                        {/* OPEN SOURCE CONTRIBUTION */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Open Source</div>
                            <div className="resume-project-item">
                                <div className="resume-project-heading">
                                    <span className="resume-project-name">GirlScript Summer of Code</span>
                                    <span className="resume-project-meta">&nbsp;— Contributor, 2024</span>
                                </div>
                                <ul className="resume-bullet-list" style={{ marginTop: '3px' }}>
                                    <li>Contributed to multiple open-source repositories during GSSoC 2024 extended programme.</li>
                                    <li>Fixed UI bugs, improved documentation, and added new features across 3+ projects.</li>
                                    <li>Earned contributor badge; engaged with maintainers via issues and PRs on GitHub.</li>
                                </ul>
                            </div>
                        </div>

                        {/* CERTIFICATIONS */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Certifications</div>

                            <div className="resume-cert-subgroup">
                                <div className="resume-cert-subgroup-title">Problem Solving &amp; DSA</div>
                                <div className="resume-cert-grid">
                                    <ul className="resume-bullet-list">
                                        <li>HackerRank — Problem Solving (Basic &amp; Intermediate)</li>
                                        <li>HackerRank — C++ (Basic)</li>
                                    </ul>
                                    <ul className="resume-bullet-list">
                                        <li>HackerRank — Python (Basic)</li>
                                        <li>Infosys Springboard — DSA</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="resume-cert-subgroup">
                                <div className="resume-cert-subgroup-title">Development</div>
                                <ul className="resume-bullet-list">
                                    <li>Udemy — The Complete JavaScript Course</li>
                                    <li>Coursera — Front-End Web Development (Meta)</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* END LEFT */}

                    {/* RIGHT COLUMN */}
                    <div className="resume-col-right">

                        {/* PROJECTS */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Projects</div>

                            {/* RideMate */}
                            <div className="resume-project-item">
                                <div className="resume-project-heading">
                                    <span className="resume-project-name">RideMate</span>
                                    <span className="resume-project-meta">&nbsp;— Carpooling Mobile App</span>
                                </div>
                                <div className="resume-project-subtitle">React Native (Expo) • Node.js • MongoDB • Socket.io • JWT</div>
                                <p className="resume-project-desc">
                                    Full-stack carpooling app enabling drivers to post rides and passengers to
                                    search &amp; join with real-time booking. Features JWT authentication, live
                                    in-app chat, ride management, and a mock Razorpay payment flow.
                                </p>
                                <div className="resume-project-tech-role">
                                    <strong>Role:</strong> Solo Full-Stack Developer &nbsp;|&nbsp;
                                    <strong>Tech:</strong> Expo Go, Express REST API, Mongoose, Socket.io, Cloudinary
                                </div>
                                <ul className="resume-bullet-list resume-project-links">
                                    <li>
                                        <a href="https://github.com/AnshuShee/RideMate" target="_blank" rel="noreferrer">
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Global Earthquakes Analytics & Auth API */}
                            <div className="resume-project-item">
                                <div className="resume-project-heading">
                                    <span className="resume-project-name">Global Earthquakes Analytics &amp; Authentication API</span>
                                </div>
                                <div className="resume-project-subtitle">Node.js • Express • MongoDB • JWT • REST API</div>
                                <p className="resume-project-desc">
                                    RESTful API providing real-time global earthquake data analytics with
                                    full JWT-based user authentication. Supports filtering by magnitude,
                                    region, and date range; secured endpoints using middleware &amp; bcrypt.
                                </p>
                                <div className="resume-project-tech-role">
                                    <strong>Role:</strong> Backend Developer &nbsp;|&nbsp;
                                    <strong>Tech:</strong> Express.js, MongoDB Atlas, JWT, Bcrypt, Postman
                                </div>
                                <ul className="resume-bullet-list resume-project-links">
                                    <li>
                                        <a href="https://github.com/AnshuShee/Global-Earthquakes-Analytics" target="_blank" rel="noreferrer">
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://documenter.getpostman.com/view/50862709/2sBXwnsBTD" target="_blank" rel="noreferrer">
                                            Postman Docs
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Portfolio */}
                            <div className="resume-project-item">
                                <div className="resume-project-heading">
                                    <span className="resume-project-name">Personal Portfolio</span>
                                    <span className="resume-project-meta">&nbsp;— Interactive Developer Showcase</span>
                                </div>
                                <div className="resume-project-subtitle">React.js • Vite • GSAP • Framer Motion • Three.js</div>
                                <p className="resume-project-desc">
                                    Premium portfolio with cinematic scroll animations, custom cursor, 3D
                                    background, AI chatbot (Gemini API), EmailJS contact form, and a
                                    print-ready resume page. Deployed on Vercel.
                                </p>
                                <div className="resume-project-tech-role">
                                    <strong>Role:</strong> Solo Developer &amp; Designer &nbsp;|&nbsp;
                                    <strong>Tech:</strong> React, GSAP ScrollTrigger, Three.js, Framer Motion
                                </div>
                                <ul className="resume-bullet-list resume-project-links">
                                    <li>
                                        <a href="https://github.com/AnshuShee/My-Portfolio" target="_blank" rel="noreferrer">
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://anshu-portfolio.vercel.app" target="_blank" rel="noreferrer">
                                            Live
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* EXPERIENCE */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Experience</div>
                            <div className="resume-project-item">
                                <div className="resume-project-heading">
                                    <span className="resume-project-name">Freelance Developer</span>
                                    <span className="resume-project-meta">&nbsp;|&nbsp; Remote &nbsp;|&nbsp; 2023 — Present</span>
                                </div>
                                <ul className="resume-bullet-list" style={{ marginTop: '3px' }}>
                                    <li>Built and deployed full-stack projects for personal portfolio and peer collaborations.</li>
                                    <li>Contributed features and bug fixes to open-source repositories on GitHub.</li>
                                    <li>Mentored junior students in web development fundamentals and Git workflows.</li>
                                </ul>
                            </div>
                        </div>

                        {/* COMPETITIVE PROGRAMMING */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Competitive Programming</div>
                            <ul className="resume-bullet-list">
                                <li>LeetCode — 200+ problems solved; consistent DSA practice (Arrays, DP, Graphs, Trees)</li>
                                <li>HackerRank — 5-star rating in Problem Solving and C++</li>
                                <li>CodeChef — Participated in multiple rated contests</li>
                            </ul>
                        </div>

                        {/* ACHIEVEMENTS */}
                        <div className="resume-section-block">
                            <div className="resume-section-title">Achievements &amp; Hackathons</div>
                            <ul className="resume-bullet-list">
                                <li>Participated in Smart India Hackathon (SIH) 2023 — National-level PS shortlisted</li>
                                <li>KIIT Hack — Top 15 finalist among 200+ teams</li>
                                <li>GSSoC 2024 Extended — Contributor badge earned</li>
                                <li>Completed 100+ hours of structured web development coursework (Udemy, Coursera)</li>
                            </ul>
                        </div>

                    </div>
                    {/* END RIGHT */}

                </div>
                {/* END BODY */}

            </div>
            {/* END resume-page */}

        </div>
    );
};

export default Resume;
