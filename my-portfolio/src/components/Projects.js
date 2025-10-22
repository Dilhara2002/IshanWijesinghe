import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Play, Github, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const projects = [
  {
    name: "Salon Diamond",
    description: "A comprehensive salon booking platform that allows users to book appointments, view services, and manage their beauty treatments seamlessly. Built with modern web technologies for optimal user experience.",
    video: "https://www.youtube.com/watch?v=VIDEO1",
    github: "https://github.com/yourusername/salon-diamond",
    live: "https://salondiamond.com",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    accentColor: "#6366f1"
  },
  {
    name: "MyHomeStock",
    description: "Intelligent stock management application that helps households track inventory, set reminders for restocking, and analyze consumption patterns with AI-powered predictions.",
    video: "https://www.youtube.com/watch?v=VIDEO2", 
    github: "https://github.com/yourusername/myhomestock",
    live: "https://myhomestock.app",
    tags: ["Python", "Django", "PostgreSQL", "React"],
    accentColor: "#10b981"
  },
  {
    name: "Dish-Craft",
    description: "Social recipe sharing platform where food enthusiasts can discover, create, and share culinary masterpieces. Features include step-by-step instructions, nutritional analysis, and community ratings.",
    video: "https://www.youtube.com/watch?v=VIDEO3",
    github: "https://github.com/yourusername/dish-craft",
    live: "https://dish-craft.com",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "Node.js"],
    accentColor: "#ec4899"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setIsPlaying(false);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsPlaying(false);
  };

  // Generate floating elements
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 20 + Math.random() * 20
  }));

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 15
  }));

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(5deg); 
          }
          66% { 
            transform: translateY(-10px) rotate(-3deg); 
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7);
          }
          50% { 
            transform: scale(1.05);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(168, 85, 247, 0);
          }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        .projects-section {
          position: relative;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          overflow: hidden;
          min-height: 100vh;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.1;
          animation: float 15s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: #6366f1;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: #a855f7;
          bottom: 10%;
          right: 5%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 250px;
          height: 250px;
          background: #ec4899;
          top: 50%;
          left: 70%;
          animation-delay: 10s;
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          background: rgba(168, 85, 247, 0.6);
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }

        .particle:nth-child(2n) {
          background: rgba(99, 102, 241, 0.6);
        }

        .particle:nth-child(3n) {
          background: rgba(236, 72, 153, 0.6);
        }

        .orbiting-elements {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: orbit 20s linear infinite;
        }

        .orbit-1 {
          width: 300px;
          height: 300px;
          animation-duration: 25s;
        }

        .orbit-2 {
          width: 500px;
          height: 500px;
          animation-duration: 35s;
          animation-direction: reverse;
        }

        .orbit-3 {
          width: 700px;
          height: 700px;
          animation-duration: 45s;
        }

        .orbiting-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #a855f7;
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: pulse 2s ease-in-out infinite;
        }

        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .star {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        .mouse-follower {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transition: all 0.1s ease-out;
          filter: blur(20px);
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 100px 2rem;
          position: relative;
          z-index: 10;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a855f7, #6366f1);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 5s ease infinite;
          opacity: 0;
          text-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
        }

        .section-title.visible {
          animation: fadeInUp 0.8s ease-out forwards, gradientShift 5s ease infinite;
        }

        .section-subtitle {
          text-align: center;
          color: #9ca3af;
          font-size: 1.2rem;
          margin-bottom: 4rem;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .section-subtitle.visible {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .projects-carousel {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 100px rgba(168, 85, 247, 0.1);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .projects-carousel.visible {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .projects-carousel:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 120px rgba(168, 85, 247, 0.2);
        }

        .project-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .project-info {
          opacity: 0;
        }

        .project-info.visible {
          animation: slideInLeft 0.8s ease-out 0.6s forwards;
        }

        .project-number {
          font-size: 0.9rem;
          color: ${projects[activeProject].accentColor};
          font-weight: 600;
          margin-bottom: 1rem;
          display: block;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-name {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff, ${projects[activeProject].accentColor});
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.4s ease;
        }

        .project-description {
          color: #b0b0b0;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .project-tag {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.3);
          transition: all 0.3s ease;
        }

        .project-tag:hover {
          background: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .project-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .project-link:hover::before {
          left: 100%;
        }

        .link-github {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
        }

        .link-github:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
        }

        .link-live {
          background: transparent;
          color: #e0e0e0;
          border-color: rgba(255, 255, 255, 0.2);
        }

        .link-live:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #6366f1;
          transform: translateY(-3px);
        }

        .project-media {
          position: relative;
          opacity: 0;
        }

        .project-media.visible {
          animation: slideInRight 0.8s ease-out 0.6s forwards;
        }

        .video-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 50px rgba(168, 85, 247, 0.2);
          background: #000;
          transition: all 0.4s ease;
        }

        .video-container:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 25px 80px rgba(0, 0, 0, 0.6),
            0 0 70px rgba(168, 85, 247, 0.3);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: ${isPlaying ? 0 : 1};
          transition: opacity 0.3s ease;
          cursor: pointer;
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 2s ease-in-out infinite;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .play-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
        }

        .play-button:hover {
          transform: scale(1.1);
          animation: none;
        }

        .play-button:hover::before {
          transform: rotate(45deg) translate(50%, 50%);
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 3rem;
          opacity: 0;
        }

        .carousel-controls.visible {
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }

        .carousel-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .carousel-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .carousel-button:hover {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
        }

        .carousel-button:hover::before {
          left: 100%;
        }

        .carousel-dots {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 1rem;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .carousel-dot::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .carousel-dot:hover::before {
          left: 100%;
        }

        .carousel-dot.active {
          width: 20px;
          background: ${projects[activeProject].accentColor};
        }

        @media (max-width: 1024px) {
          .project-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .project-media {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .projects-container {
            padding: 80px 1rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .projects-carousel {
            padding: 2rem 1.5rem;
          }
          
          .project-name {
            font-size: 2rem;
          }
          
          .project-links {
            flex-direction: column;
          }

          .orbit {
            display: none;
          }
        }
      `}</style>

      <section id="projects" className="projects-section" ref={sectionRef}>
        <div className="animated-background">
          <div className="floating-shapes">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>

          <div className="particles-container">
            {particles.map(particle => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.left}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              ></div>
            ))}
          </div>

          <div className="orbiting-elements">
            <div className="orbit orbit-1">
              <div className="orbiting-dot"></div>
            </div>
            <div className="orbit orbit-2">
              <div className="orbiting-dot"></div>
            </div>
            <div className="orbit orbit-3">
              <div className="orbiting-dot"></div>
            </div>
          </div>

          <div className="stars-container">
            {Array.from({ length: 25 }, (_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>

          <div 
            className="mouse-follower"
            style={{
              left: `${mousePosition.x - 200}px`,
              top: `${mousePosition.y - 200}px`,
            }}
          ></div>
        </div>
        
        <div className="projects-container">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Featured Projects
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            <Sparkles size={20} />
            Showcasing my latest work and creative solutions
          </p>

          <div className={`projects-carousel ${isVisible ? 'visible' : ''}`}>
            <div className="project-content">
              <div className={`project-info ${isVisible ? 'visible' : ''}`}>
                <span className="project-number">
                  Project {activeProject + 1} of {projects.length}
                </span>
                <h3 className="project-name">{projects[activeProject].name}</h3>
                <p className="project-description">
                  {projects[activeProject].description}
                </p>
                
                <div className="project-tags">
                  {projects[activeProject].tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={projects[activeProject].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link link-github"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a 
                    href={projects[activeProject].live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link link-live"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
              
              <div className={`project-media ${isVisible ? 'visible' : ''}`}>
                <div className="video-container">
                  <ReactPlayer
                    url={projects[activeProject].video}
                    width="100%"
                    height="400px"
                    controls
                    playing={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <div 
                      className="video-overlay"
                      onClick={() => setIsPlaying(true)}
                    >
                      <div className="play-button">
                        <Play size={32} color="#ffffff" fill="#ffffff" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className={`carousel-controls ${isVisible ? 'visible' : ''}`}>
              <button className="carousel-button" onClick={prevProject}>
                <ChevronLeft size={24} />
              </button>
              
              <div className="carousel-dots">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-dot ${index === activeProject ? 'active' : ''}`}
                    onClick={() => {
                      setActiveProject(index);
                      setIsPlaying(false);
                    }}
                  />
                ))}
              </div>
              
              <button className="carousel-button" onClick={nextProject}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;