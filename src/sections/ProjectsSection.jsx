import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes, FaYoutube } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// --- Mock Data ---
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Myntra Clone',
    category: 'Web',
    shortDesc: 'A fully responsive clone of the Myntra e-commerce platform.',
    fullDesc: 'Built a feature-rich UI clone of the popular e-commerce website Myntra. Features include a dynamic product catalog, interactive shopping bag functionality, and a highly authentic design replication using modern web technologies.',
    techTags: ['HTML', 'CSS', 'JavaScript', 'React'],
    images: ['https://res.cloudinary.com/dhnczdpqj/image/upload/v1775550017/Screenshot_2026-04-07_134808_kuhxfa.png'],
    github: 'https://github.com/AnshuShee/Myntra-Cloned-Website',
    live: '#',
    youtube: 'https://youtube.com',
  },
  {
    id: 7,
    title: 'Clone of Get your guide',
    category: 'Web',
    shortDesc: 'A comprehensive travel platform clone for booking tours and activities.',
    fullDesc: 'Developed a high-fidelity clone of GetYourGuide, a leading travel booking platform. The project focuses on a seamless user interface, dynamic search capabilities, and a detailed activity discovery experience, mimicking the premium feel of the original site.',
    techTags: ['HTML', 'CSS', 'JavaScript', 'React'],
    images: ['https://res.cloudinary.com/dhnczdpqj/image/upload/v1775713009/Screenshot_2026-04-09_110611_jsuzsf.png'],
    github: 'https://github.com/AnshuShee/Website-Clone-Assignment',
    live: '#',
    youtube: '#',
  },
  {
    id: 8,
    title: 'Rappi Clone',
    category: 'Web',
    shortDesc: 'A premium clone of the Rappi food and grocery delivery platform.',
    fullDesc: 'Developed a high-performance, responsive clone of the Rappi delivery platform. The project features a modern, intuitive UI for browsing restaurants and groceries, showcasing advanced frontend skills in replicating complex e-commerce flows and layouts.',
    techTags: ['HTML', 'CSS', 'JavaScript', 'React'],
    images: ['https://res.cloudinary.com/dhnczdpqj/image/upload/v1776486433/Screenshot_2026-04-18_095519_ddjpua.png'],
    github: 'https://github.com/AnshuShee/Rappi-Clone',
    live: '#',
    youtube: '#',
  },
];

// --- Magnetic Button Component ---
const MagneticButton = ({ children, className, onClick }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
    };

    const onMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={btnRef} className={className} onClick={onClick}>
      {children}
    </div>
  );
};

// --- Parallax Background Component ---
const ParallaxBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.parallax-shape-1', {
        yPercent: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
      gsap.to('.parallax-shape-2', {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, bgRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="parallax-shape-1 absolute top-[10%] left-[5%] w-72 md:w-[500px] h-72 md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="parallax-shape-2 absolute top-[50%] right-[5%] w-80 md:w-[600px] h-80 md:h-[600px] bg-indigo-600/10 rounded-full blur-[120px] md:blur-[180px]" />
    </div>
  );
};

// --- Cursor Glow Component ---
const CursorGlow = () => {
  const glowRef = useRef(null);
  useEffect(() => {
    const xTo = gsap.quickTo(glowRef.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(glowRef.current, "y", { duration: 0.5, ease: "power3" });

    const onMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] -ml-[200px] -mt-[200px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none z-[-1]"
    />
  );
};

// --- Project Card Component ---
const ProjectCard = ({ project, onClick }) => {
  const cardInnerRef = useRef(null);

  useEffect(() => {
    const card = cardInnerRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      gsap.to(card, {
        rotateX, rotateY, duration: 0.4, ease: 'power2.out', transformPerspective: 1000
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0, rotateY: 0, duration: 0.7, ease: 'power2.out'
      });
    };

    const parent = card.parentElement;
    parent.addEventListener('mousemove', onMouseMove);
    parent.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (parent) {
        parent.removeEventListener('mousemove', onMouseMove);
        parent.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full h-full perspective-1000"
    >
      <div
        ref={cardInnerRef}
        className="w-full h-full bg-[#111111]/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col group relative will-change-transform shadow-2xl"
      >
        {/* Animated Gradient Border Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-700 rounded-3xl pointer-events-none" />

        {/* Image Wrapper */}
        <div className="relative w-full h-56 md:h-64 overflow-hidden cursor-pointer" onClick={() => onClick(project)}>
          <img 
            src={project.images[0]} 
            alt={project.title} 
            loading="lazy" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white/90 border border-white/10 shadow-lg">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">{project.title}</h3>
          <p className="text-white/60 text-sm md:text-base mb-6 flex-1 font-light line-clamp-3 leading-relaxed">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.slice(0, 3).map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-xs font-medium text-white/60 border border-white/5">
                {tag}
              </span>
            ))}
            {project.techTags.length > 3 && (
              <span className="px-3 py-1 bg-white/5 rounded-md text-xs font-medium text-white/60 border border-white/5">
                +{project.techTags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-4">
              <MagneticButton>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors block p-2 -m-2">
                  <FaGithub size={20} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href={project.live} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors block p-2 -m-2">
                  <FaExternalLinkAlt size={18} />
                </a>
              </MagneticButton>
              {project.youtube && project.youtube !== '#' && (
                <MagneticButton>
                  <a href={project.youtube} target="_blank" rel="noreferrer" className="text-white/50 hover:text-red-500 transition-colors block p-2 -m-2">
                    <FaYoutube size={20} />
                  </a>
                </MagneticButton>
              )}
            </div>
            <MagneticButton onClick={() => onClick(project)} className="cursor-pointer">
              <span className="text-sm font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider flex items-center gap-2 group/btn">
                View Details <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Modal Component ---
const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const containerRef = useRef(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
    gsap.fromTo(containerRef.current,
      { scale: 0.95, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)', delay: 0.1 }
    );

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, { opacity: 0, duration: 0.3, onComplete: onClose });
    gsap.to(containerRef.current, { scale: 0.95, opacity: 0, y: 20, duration: 0.3 });
  };

  const nextImg = () => setCurrentImg(p => (p + 1) % project.images.length);
  const prevImg = () => setCurrentImg(p => (p - 1 + project.images.length) % project.images.length);

  return (
    <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
      <div className="absolute inset-0 cursor-pointer" onClick={handleClose} />

      <div ref={containerRef} className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto max-h-[90vh]">
        <button onClick={handleClose} className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10">
          <FaTimes />
        </button>

        <div className="overflow-y-auto custom-scrollbar flex-1">
          {/* Image Carousel */}
          <div className="relative w-full h-64 md:h-96 bg-black overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={project.images[currentImg]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {project.images.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all">
                  <FaChevronLeft />
                </button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all">
                  <FaChevronRight />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentImg ? 'bg-white w-6' : 'bg-white/50'}`} />
                  ))}
                </div>
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>

          {/* Details */}
          <div className="p-8 md:p-12 -mt-16 relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-white/80">
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">{project.title}</h2>
            <p className="text-lg text-white/60 leading-relaxed font-light mb-10">
              {project.fullDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                Live Demo <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                GitHub <FaGithub />
              </a>
              {project.youtube && project.youtube !== '#' && (
                <a href={project.youtube} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-500 font-bold rounded-xl hover:bg-red-600/20 transition-colors">
                  Watch Video <FaYoutube />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Projects Section ---
const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const categories = ['All', 'Web', 'App', 'AI'];
  
  const filteredProjects = PROJECTS_DATA.filter(p => filter === 'All' || p.category === filter);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Section Entrance Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { y: 100, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
      
      // Staggered header
      gsap.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen pt-32 pb-24 bg-[#030303] overflow-hidden">
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <CursorGlow />
      <ParallaxBackground />
      
      {/* Animated SVG Noise */}
      <svg className="pointer-events-none fixed inset-0 w-full h-full z-50 opacity-[0.03]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header & Filters */}
        <div ref={headerRef} className="mb-16 text-center">
          <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 uppercase drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] mb-4">
            Selected Works
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tight uppercase" style={{ fontFamily: '"Anton", sans-serif' }}>
            Featured Projects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <MagneticButton key={cat}>
                <button
                  onClick={() => setFilter(cat)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-colors ${filter === cat ? 'text-black' : 'text-white/60 hover:text-white bg-white/5 border border-white/5'}`}
                >
                  {filter === cat && (
                    <motion.div
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-white rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  {cat}
                </button>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default ProjectsSection;
