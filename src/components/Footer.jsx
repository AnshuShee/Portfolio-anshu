import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-slate-400 py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Anshu Shee. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="https://github.com/AnshuShee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/anshu-shee-3119183a0/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="mailto:anshu.shee.cg@gmail.com" className="hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
