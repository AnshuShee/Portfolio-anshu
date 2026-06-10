import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFigma, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const UIUX_DATA = [
  {
    id: 4,
    title: 'Online Education Platform Design',
    shortDesc: 'A modern, interactive UI/UX design for an online education platform.',
    fullDesc: 'Designed a comprehensive and engaging user interface for an online learning platform. The design emphasizes clear navigation, immersive course discovery, and a streamlined learning experience to maximize student engagement and accessibility.',
    techTags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    images: [
      'https://res.cloudinary.com/dhnczdpqj/image/upload/v1776490417/Screenshot_2026-04-18_110253_qiheek.png',
      'https://res.cloudinary.com/dhnczdpqj/image/upload/v1776490417/Screenshot_2026-04-18_110204_v2w4sr.png'
    ],
    figmaLink: 'https://www.figma.com',
  },
  {
    id: 5,
    title: 'UI/UX Mobile App Design',
    shortDesc: 'A sleek and modern interface design with intuitive user flows.',
    fullDesc: 'Designed a high-fidelity interface prototype focusing on clean aesthetics, intuitive navigation, and modern design principles. The interface prioritizes user engagement and seamless interactions.',
    techTags: ['Figma', 'UI Design', 'Prototyping'],
    images: [
      'https://res.cloudinary.com/dhnczdpqj/image/upload/v1776491413/Screenshot_2026-04-18_111450_idnutg.png'
    ],
    figmaLink: 'https://www.figma.com',
  },
  {
    id: 6,
    title: 'Travel App UI/UX Design',
    shortDesc: 'A captivating and user-centric design for a travel booking application.',
    fullDesc: 'Designed a comprehensive UI/UX flow for a travel application. The design focuses on immersive imagery, easy discovery of destinations, and a seamless booking experience, providing users with a premium travel planning interface.',
    techTags: ['Figma', 'UI Design', 'Wireframing'],
    images: [
      'https://res.cloudinary.com/dhnczdpqj/image/upload/v1776491943/figma-travel_p0wjuw.jpg'
    ],
    figmaLink: 'https://www.figma.com',
  },
];

const UIUXSection = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
        }
      );

      gsap.fromTo('.design-card',
        { opacity: 0, y: 60 },
        { 
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.design-grid', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="uiux" className="relative py-24 bg-[#030303] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headerRef} className="mb-16 text-center">
          <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a00] via-orange-500 to-red-500 uppercase drop-shadow-[0_0_10px_rgba(255,138,0,0.5)] mb-4">
            Creative Vision
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase" style={{ fontFamily: '"Anton", sans-serif' }}>
            UI/UX Design
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg font-light leading-relaxed">
            Crafting pixel-perfect digital experiences with a focus on user psychology and aesthetic excellence.
          </p>
        </div>

        <div className="design-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UIUX_DATA.map((design) => (
            <motion.div
              key={design.id}
              whileHover={{ y: -10 }}
              className="design-card group cursor-pointer relative"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img 
                  src={design.images[0]} 
                  alt={design.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{design.title}</h3>
                  <div className="flex gap-2">
                    {design.techTags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-tighter font-bold text-orange-400 px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
                    <FaFigma size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <DesignModal 
            design={selectedDesign} 
            onClose={() => setSelectedDesign(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const DesignModal = ({ design, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.2)' });
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div ref={modalRef} className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        <button onClick={onClose} className="absolute top-6 right-6 z-20 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white">
          <FaTimes />
        </button>

        <div className="w-full md:w-3/5 bg-black h-[300px] md:h-auto overflow-y-auto custom-scrollbar relative">
          <img src={design.images[0]} alt={design.title} className="w-full h-auto block" />
        </div>

        <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-3 mb-6 text-orange-400">
            <FaFigma size={24} />
            <span className="text-sm font-bold tracking-widest uppercase">UX Case Study</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{design.title}</h2>
          <p className="text-white/60 leading-relaxed mb-8 font-light">
            {design.fullDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {design.techTags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/80">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={design.figmaLink} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-orange-50 transition-all duration-300"
          >
            Open Figma Prototype <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UIUXSection;
