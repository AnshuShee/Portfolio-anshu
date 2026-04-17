import React from 'react';
import { Github, Linkedin, Mail, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <img
                        src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1775706890/Sleek__AS__logo_design-Photoroom_autazu.png"
                        alt="Anshu Shee Logo"
                        className="h-14 w-auto"
                        style={{ filter: 'brightness(1.1)' }}
                    />
                    <p className="text-white/50 text-sm font-light uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Anshu Shee. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4 items-center">
                    <a href="https://github.com/AnshuShee" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-sm group">
                        <Github size={18} className="block group-hover:hidden transition-transform" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" className="hidden group-hover:block transition-transform group-hover:scale-110">
                            <g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#161614" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g>
                        </svg>
                    </a>
                    <a href="https://leetcode.com/u/anshushee/" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#FFA116]/10 hover:border-[#FFA116]/30 hover:text-[#FFA116] transition-all shadow-sm group">
                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="block group-hover:hidden transition-transform">
                            <path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 128 128" className="hidden group-hover:block transition-transform group-hover:scale-110">
                            <rect width="128" height="128" fill="#ffffff" rx="20"/>
                            <path fill="#b3b1b0" d="M117.555 76.558c0-3.957-3.008-7.178-6.72-7.178H57.159c-3.712 0-6.72 3.221-6.72 7.178c0 3.958 3.002 7.18 6.72 7.18h53.676c3.712.005 6.72-3.217 6.72-7.18" stroke-width="3" stroke="#b3b1b0"/>
                            <path fill="#e7a41f" d="m18.79 96.996l23.003 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.094-2.73 20.294-7.968l13.803-14.065c2.72-2.741 2.624-7.28-.208-10.133c-2.832-2.854-7.333-2.95-10.048-.208L71.645 109.53c-2.465 2.49-5.878 3.53-9.649 3.53s-7.179-1.04-9.653-3.53L29.419 86.26c-2.47-2.49-3.712-6.133-3.712-9.936s1.243-7.238 3.712-9.728l22.854-23.361c2.47-2.49 5.952-3.44 9.718-3.44s7.179 1.04 9.648 3.53l14.273 13.9c2.72 2.746 7.221 2.65 10.053-.203c2.832-2.859 2.928-7.398.208-10.14L82.37 32.825a26.64 26.64 0 0 0-12.758-7.094l-.18-.037l13.05-13.35c2.73-2.741 2.635-7.285-.197-10.139S74.945-.74 72.22 2.002L18.79 55.87c-5.19 5.237-7.905 12.464-7.905 20.454S13.6 91.77 18.79 96.996" stroke-width="3" stroke="#e7a41f"/>
                            <path fill="#070706" d="M43.5 121.674a11.3 11.3 0 0 1-2.528-1.925c-7.078-7.11-14.187-14.187-21.249-21.318C9.115 87.721 7.445 72.1 15.531 59.39a32 32 0 0 1 4.475-5.355L71.33 2.605c3.333-3.34 7.99-3.478 11.088-.358c2.987 3.003 2.81 7.76-.416 11.019c-4.101 4.139-8.208 8.267-12.315 12.4c-.219.651-.747 1.067-1.2 1.531c-4.603 4.672-9.334 9.222-13.872 13.963c-.592.619-1.398.992-1.984 1.627c-7.59 7.59-15.27 15.094-22.753 22.784c-6.054 6.225-5.85 15.67.363 22.012c6.976 7.125 14.075 14.134 21.126 21.195c.357.357.725.704 1.088 1.056c2.496 1.616 2.528 6.667.976 8.912c-1.712 2.48-3.947 4-7.11 3.883c-1.061-.032-1.936-.458-2.821-.955" stroke-width="3" stroke="#070706"/>
                        </svg>
                    </a>
                    <a href="https://www.sololearn.com/en/profile/34914588" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all shadow-sm group">
                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="block group-hover:hidden transition-transform">
                            <path fill="currentColor" d="M18.621 16.084a8.483 8.483 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9.039 9.039 0 0 0 1.587-.3 8.32 8.32 0 0 0 5.787-5.887 8.555 8.555 0 0 0-8.258-10.832 9.012 9.012 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542 2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.538 8.538 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a8.943 8.943 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766 5.727 1.492 10.87-2.773 10.87-8.229 0-.35-.02-.7-.06-1.04-.1-.792-1.165-.992-1.547-.29a8.597 8.597 0 0 1-7.574 4.514zM5.382 7.916a8.483 8.483 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a9.93 9.93 0 0 0-1.598.29A8.339 8.339 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.538 8.538 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a8.945 8.945 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357 12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z"/>
                        </svg>
                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block transition-transform group-hover:scale-110">
                            <path fill="#ffffff" d="M18.621 16.084a8.483 8.483 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9.039 9.039 0 0 0 1.587-.3 8.32 8.32 0 0 0 5.787-5.887 8.555 8.555 0 0 0-8.258-10.832 9.012 9.012 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542 2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.538 8.538 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a8.943 8.943 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766 5.727 1.492 10.87-2.773 10.87-8.229 0-.35-.02-.7-.06-1.04-.1-.792-1.165-.992-1.547-.29a8.597 8.597 0 0 1-7.574 4.514zM5.382 7.916a8.483 8.483 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a9.93 9.93 0 0 0-1.598.29A8.339 8.339 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.538 8.538 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a8.945 8.945 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357 12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/anshu-shee-3119183a0/" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:text-[#0A66C2] transition-all shadow-sm group">
                        <Linkedin size={18} className="block group-hover:hidden transition-transform" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" className="hidden group-hover:block transition-transform group-hover:scale-110">
                            <g fill="none"><rect width="256" height="256" fill="#0a66c2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g>
                        </svg>
                    </a>
                    <a href="mailto:anshu.shee.cg@gmail.com"
                        className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#EA4335]/10 hover:border-[#EA4335]/30 hover:text-[#EA4335] transition-all shadow-sm group">
                        <Mail size={18} className="block group-hover:hidden transition-transform" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" className="hidden group-hover:block transition-transform group-hover:scale-110">
                            <g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#4285f4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"/><path fill="#34a853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"/><path fill="#fbbc04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"/><path fill="#ea4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"/><path fill="#c5221f" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"/></g>
                        </svg>
                    </a>
                    <a href="https://twitter.com/AnshuShee007" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#1d9bf0]/10 hover:border-[#1d9bf0]/30 hover:text-[#1d9bf0] transition-all shadow-sm group">
                        <Twitter size={18} className="block group-hover:hidden transition-transform" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" className="hidden group-hover:block transition-transform group-hover:scale-110">
                            <g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#1d9bf0" rx="60"/><path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"/></g>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@AnshuShee007" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 hover:text-[#FF0000] transition-all shadow-sm group">
                        <Youtube size={18} className="block group-hover:hidden transition-transform" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 180" className="hidden group-hover:block transition-transform group-hover:scale-110">
                            <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                            <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
