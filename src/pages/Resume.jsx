import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import './Resume.css';

export default function Resume() {
    const resumeRef = useRef(null);

    const handleDownload = () => {
        window.print();
    };

    return (
        <section id="resume" className="resume-section">
            {/* Print CSS for single-page A4 PDF output */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          @page {
            size: A4 portrait;
            margin: 0 !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Hide everything outside the resume */
          #root > *:not(main),
          nav, footer, .no-print,
          main > *:not(#resume) {
            display: none !important;
          }

          html, body, #root, main, #resume, #resume .container {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
            color: #1a1a1a !important;
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }

          #resume .container {
            display: block !important;
          }

          .resume-section {
            padding: 0 !important;
            margin: 0 !important;
            background: #fff !important;
          }

          #resume-printable {
            width: 210mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            margin: 0 auto !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: #fff !important;
            color: #1a1a1a !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
          }

          /* Maintain exact 2-column layout in print mode */
          .resume-body {
            display: flex !important;
            flex-direction: row !important;
          }

          .resume-col-left {
            width: 42% !important;
            padding: 20px 18px 18px 30px !important;
            border-right: 1.5px solid #ddd !important;
            border-bottom: none !important;
          }

          .resume-col-right {
            width: 58% !important;
            padding: 20px 30px 18px 18px !important;
          }

          .resume-header-top {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
          }

          .resume-header-contact {
            text-align: right !important;
          }

          a {
            color: #1a1a1a !important;
            text-decoration: underline !important;
          }
        }
      `}} />

            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Section Header (Screen only) */}
                <motion.div
                    className="section-header no-print"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '2.5rem' }}
                >
                    <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#F5F4F3', letterSpacing: '-0.5px' }}>
                        My <span style={{ color: '#ff8a00' }}>Resume</span>
                    </h2>
                    <p style={{ color: '#A8ADB5', marginTop: '0.4rem', fontSize: '0.95rem' }}>
                        A comprehensive overview of my experience, technical skills, and achievements.
                    </p>
                    <button
                        className="print-btn"
                        onClick={handleDownload}
                        style={{
                            marginTop: '1.25rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#ff8a00',
                            color: '#090D11',
                            border: 'none',
                            padding: '0.65rem 1.6rem',
                            borderRadius: '6px',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            boxShadow: '0 4px 14px rgba(255, 138, 0, 0.35)',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 138, 0, 0.45)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 138, 0, 0.35)';
                        }}
                    >
                        <FiDownload size={18} /> Download PDF
                    </button>
                </motion.div>

                {/* Printable Resume Sheet */}
                <div
                    ref={resumeRef}
                    id="resume-printable"
                    className="resume-page"
                >
                    {/* HEADER */}
                    <div className="resume-header">
                        <div className="resume-header-top">
                            <div className="resume-header-name">
                                <h1>ANSHU SHEE</h1>
                                <div className="resume-title">Full Stack Web Developer</div>
                            </div>
                            <div className="resume-header-contact">
                                <div><a href="mailto:anshu.shee.cg@gmail.com">anshu.shee.cg@gmail.com</a></div>
                                <div><a href="tel:9879975142">+91 9879975142</a></div>
                                <div>Surendranagar, Gujarat, India</div>
                            </div>
                        </div>
                        <div className="resume-header-links">
                            <a href="https://linkedin.com/in/anshu-shee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/AnshuShee" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://www.youtube.com/@AnshuShee007" target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a href="https://anshu-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
                            <a href="https://leetcode.com/u/AnshuShee" target="_blank" rel="noopener noreferrer">LeetCode</a>
                        </div>
                    </div>

                    {/* BODY: two columns */}
                    <div className="resume-body">

                        {/* LEFT COLUMN */}
                        <div className="resume-col-left">

                            {/* SKILLS */}
                            <div className="resume-section-block">
                                <div className="resume-section-title">Skills</div>
                                <div className="resume-skill-group">
                                    <div className="resume-skill-label">Programming Languages</div>
                                    <div className="resume-skill-value">C, C++, JavaScript (ES6+), Python</div>
                                </div>
                                <div className="resume-skill-group">
                                    <div className="resume-skill-label">Frontend</div>
                                    <div className="resume-skill-value">React.js, React Native (Expo), HTML5, CSS3, Tailwind CSS, Framer Motion, GSAP, Three.js</div>
                                </div>
                                <div className="resume-skill-group">
                                    <div className="resume-skill-label">Backend &amp; Databases</div>
                                    <div className="resume-skill-value">Node.js, Express.js, REST APIs, MongoDB, Mongoose, JWT Auth, Socket.io, Firebase</div>
                                </div>
                                <div className="resume-skill-group">
                                    <div className="resume-skill-label">Tools &amp; Tech Core</div>
                                    <div className="resume-skill-value">Git, GitHub, VS Code, Postman, Vercel, Render, Figma, DSA, OOP, DBMS</div>
                                </div>
                            </div>

                            {/* HACKATHONS & AWARDS */}
                            <div className="resume-section-block">
                                <div className="resume-section-title">Hackathons &amp; Open Source</div>

                                <div className="resume-hack-item">
                                    <div className="resume-hack-num">1. Finalist — KIIT Hack</div>
                                    <div className="resume-hack-meta">National Hackathon<br />KIIT University</div>
                                    <div className="resume-hack-desc">Selected as Top 15 finalist among 200+ teams, developing robust full-stack solutions under strict sprint constraints.</div>
                                </div>

                                <div className="resume-hack-item">
                                    <div className="resume-hack-num">2. Participant — Smart India Hackathon</div>
                                    <div className="resume-hack-meta">National Level | 2023<br />SIH</div>
                                    <div className="resume-hack-desc">Shortlisted for national-level problem statement.</div>
                                </div>

                                <div className="resume-hack-item">
                                    <div className="resume-hack-num">3. Contributor — GirlScript Summer of Code</div>
                                    <div className="resume-hack-meta">Open Source | GSSoC 2024 Extended</div>
                                    <div className="resume-hack-desc">Contributed successfully to multiple open-source repositories. Fixed UI bugs, improved documentation, layered new features, and earned Contributor badge.</div>
                                </div>
                            </div>

                            {/* EDUCATION */}
                            <div className="resume-section-block">
                                <div className="resume-section-title">Education</div>

                                <div className="resume-edu-item">
                                    <span className="resume-edu-year">2022 – 2026</span>
                                    <div className="resume-edu-school">Swaminarayan University</div>
                                    <div className="resume-edu-degree">
                                        Bachelor of Engineering (B.E) in Computer Engineering<br />
                                        Academic Score: <strong>CGPA: 8.xx</strong><br />
                                        Coursework: Data Structures, Algorithms, DBMS, OOP, OS, CN
                                    </div>
                                </div>

                                <div className="resume-edu-item">
                                    <span className="resume-edu-year">2021</span>
                                    <div className="resume-edu-school">CBSE Board</div>
                                    <div className="resume-edu-degree">
                                        Class XII (Higher Secondary) &nbsp;|&nbsp; Score: <strong>88.6%</strong>
                                    </div>
                                </div>

                                <div className="resume-edu-item">
                                    <span className="resume-edu-year">2019</span>
                                    <div className="resume-edu-school">CBSE Board</div>
                                    <div className="resume-edu-degree">
                                        Class X (Secondary) &nbsp;|&nbsp; Score: <strong>91.4%</strong>
                                    </div>
                                </div>
                            </div>

                        </div>{/* /resume-col-left */}

                        {/* RIGHT COLUMN */}
                        <div className="resume-col-right">

                            {/* EXPERTISE & SUMMARY */}
                            <div className="resume-section-block">
                                <div className="resume-section-title">Profile &amp; Summary</div>
                                <ul className="resume-summary-list">
                                    <li>Passionate full-stack developer and competitive programmer with hands-on experience building scalable web and mobile applications</li>
                                    <li>Deeply skilled in integrating <strong>React.js, Node.js, Express, and cloud services</strong></li>
                                    <li>Strong foundation in data structures and algorithms with <strong>200+ DSA problems solved</strong> on LeetCode</li>
                                    <li>Actively engaged in open-source platforms and consistently exploring modern web architectures</li>
                                    <li>Committed to writing clean, modular, and maintainable code for production applications</li>
                                </ul>
                            </div>

                            {/* CERTIFICATIONS */}
                            <div className="resume-section-block">
                                <div className="resume-section-title">Certifications</div>
                                <div className="resume-cert-grid">
                                    <div className="resume-cert-item"><span className="resume-cert-num">1.</span><a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">HackerRank — PS &amp; C++ (5-star)</a></div>
                                    <div className="resume-cert-item"><span className="resume-cert-num">2.</span><a href="#" target="_blank" rel="noopener noreferrer">Infosys Springboard — DSA</a></div>
                                    <div className="resume-cert-item"><span className="resume-cert-num">3.</span><a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Udemy — Complete JavaScript</a></div>
                                    <div className="resume-cert-item"><span className="resume-cert-num">4.</span><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">Coursera — Meta Front-End Web</a></div>
                                </div>
                            </div>

                            {/* EXPERIENCE */}
                            <div className="resume-section-block">
                                <div className="resume-section-title">Experience</div>
                                <div className="resume-exp-title">Freelance Full-Stack Developer</div>
                                <div className="resume-exp-date">2023 – Present &nbsp;|&nbsp; Remote</div>
                                <ul className="resume-exp-list">
                                    <li>Built and deployed full-stack projects for personal portfolio and peer collaborations</li>
                                    <li>Contributed features and bug fixes to open-source repositories on GitHub</li>
                                    <li>Mentored junior students in web development fundamentals and Git workflows</li>
                                </ul>
                            </div>

                            {/* PROJECTS */}
                            <div className="resume-section-block">
                                <div className="resume-section-title">Projects</div>

                                <div className="resume-project-item">
                                    <div className="resume-project-header">
                                        <div className="resume-project-name"><span className="resume-project-num">1.</span>RideMate (Carpooling Mobile App)</div>
                                        <div className="resume-project-links">
                                            <a href="https://github.com/AnshuShee/RideMate" target="_blank" rel="noopener noreferrer">Github</a>
                                        </div>
                                    </div>
                                    <div className="resume-project-tech">React Native (Expo) · Node.js · MongoDB · Socket.io · JWT</div>
                                    <div className="resume-project-desc">Full-stack carpooling app enabling drivers to post rides and passengers to search &amp; join with real-time booking. Features live in-app chat, ride management, and Razorpay payment flow.</div>
                                </div>

                                <div className="resume-project-item">
                                    <div className="resume-project-header">
                                        <div className="resume-project-name"><span className="resume-project-num">2.</span>Global Earthquakes Analytics &amp; Auth API</div>
                                        <div className="resume-project-links">
                                            <a href="https://documenter.getpostman.com/view/50862709/2sBXwnsBTD" target="_blank" rel="noopener noreferrer">Postman Docs</a>
                                            <a href="https://github.com/AnshuShee/Global-Earthquakes-Analytics" target="_blank" rel="noopener noreferrer">Github</a>
                                        </div>
                                    </div>
                                    <div className="resume-project-tech">Node.js · Express · MongoDB · JWT · REST API</div>
                                    <div className="resume-project-desc">RESTful API providing real-time global earthquake data analytics with full JWT-based user authentication. Supports filtering by magnitude, region, and date range; secured endpoints.</div>
                                </div>

                                <div className="resume-project-item">
                                    <div className="resume-project-header">
                                        <div className="resume-project-name"><span className="resume-project-num">3.</span>Personal Portfolio</div>
                                        <div className="resume-project-links">
                                            <a href="https://anshu-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">Live</a>
                                            <a href="https://github.com/AnshuShee/My-Portfolio" target="_blank" rel="noopener noreferrer">Github</a>
                                        </div>
                                    </div>
                                    <div className="resume-project-tech">React.js · Vite · GSAP · Framer Motion · Three.js</div>
                                    <div className="resume-project-desc">Premium portfolio with cinematic scroll animations, custom cursor, 3D background, AI chatbot (Gemini API), EmailJS contact form, and print-ready optimizations.</div>
                                </div>

                            </div>

                        </div>{/* /resume-col-right */}
                    </div>{/* /resume-body */}
                </div>{/* /resume-page */}
            </div>{/* /container */}
        </section>
    );
}
