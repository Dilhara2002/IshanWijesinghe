import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { 
  Mail, Linkedin, Github, Send, MapPin, 
  Activity, Terminal, Zap, ShieldCheck 
} from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const sectionRef = useRef(null);

  // Mouse Tracking for 3D interaction (Matches Home & Education)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 45);
      mouseY.set((e.clientY / innerHeight - 0.5) * 45);
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    { icon: Mail, label: "EMAIL", value: "wijesinghelageishan@gmail.com", link: "mailto:wijesinghelageishan@gmail.com" },
    { icon: Linkedin, label: "LINKEDIN", value: "ishan-wijesinghe", link: "https://www.linkedin.com/in/ishan-wijesinghe-5200a1318/" },
    { icon: Github, label: "GITHUB", value: "Dilhara2002", link: "https://github.com/Dilhara2002" },
    { icon: MapPin, label: "LOCATION", value: "Malabe, Sri Lanka", link: null }
  ];

  return (
    <section id="contact" ref={sectionRef} className="cyber-container">
      {/* 1. ANIMATED BACKGROUND LAYERS (Consistent with Education) */}
      <div className="spatial-void">
        <div className="moving-scanline" />
        <div className="noise-overlay" />
        <motion.div 
          className="perspective-grid"
          style={{ rotateX: springY, rotateY: springX, translateZ: 100 }}
        />
        <div className="data-rain">
          {Array(8).fill("COMMS_UPLINK_0101_ENCRYPTED_SIGNAL_").map((t, i) => (
            <div key={i} className="rain-row">{t}</div>
          ))}
        </div>
      </div>

      {/* 2. HUD FRAME ELEMENTS */}
      <div className="cyber-frame">
        <div className="frame-corner tl"><div className="blink-dot" /> COMMS_UPLINK</div>
        <div className="frame-corner tr">SIGNAL_STRENGTH: 98%</div>
        <div className="frame-corner bl">ISHAN_WIJESINGHE // 2026</div>
        <div className="frame-corner br">IP: 192.168.1.001</div>
      </div>

      <div className="content-shell">
        {/* 3. GLITCH HEADER (Matches Education) */}
        <motion.header 
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          className="hud-header"
        >
          <div className="hud-badge glitch-hover" data-text="TRANSMISSION_READY">
            <Zap size={14} className="pulse-green" />
            <span>TRANSMISSION_READY</span>
          </div>
          <h1 className="expansive-title glitch" data-text="DIRECT_CHANNEL">
            DIRECT<br/><span className="outline-text">_CHANNEL</span>
          </h1>
          <div className="terminal-prompt">
            <Terminal size={14} />
            <span className="typewriter">Establishing secure handshake... [OK]</span>
          </div>
        </motion.header>

        <div className="contact-main-grid">
          {/* LEFT: INTERACTIVE DATA NODES */}
          <div className="nodes-column">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="contact-node-card"
                onClick={() => method.link && window.open(method.link, '_blank')}
              >
                <div className="node-icon-box">
                  <method.icon size={22} />
                </div>
                <div className="node-info">
                  <span className="node-label">{method.label}</span>
                  <span className="node-value">{method.value}</span>
                </div>
                <div className="card-glitch-bar" />
              </motion.div>
            ))}
          </div>

          {/* RIGHT: TERMINAL FORM */}
          <motion.div 
            className="terminal-form-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
          >
            <div className="terminal-top">
              <div className="dots"><span /><span /><span /></div>
              <span className="terminal-path">user@portfolio:~/send_packet</span>
              <ShieldCheck size={14} className="green-txt" />
            </div>
            
            <form onSubmit={handleSubmit} className="terminal-body">
              <div className="input-row">
                <span className="prompt">{">"} IDENT:</span>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="NAME_REQUIRED" 
                />
              </div>

              <div className="input-row">
                <span className="prompt">{">"} PROTOCOL:</span>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="EMAIL_ADDRESS" 
                />
              </div>

              <div className="input-row textarea-row">
                <span className="prompt">{">"} DATA:</span>
                <textarea 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="ENTER_MESSAGE_BODY..." 
                />
              </div>

              <button type="submit" className="transmit-btn">
                <span>EXECUTE_TRANSMISSION</span>
                <Send size={18} />
                <div className="btn-glimmer" />
              </button>

              {formStatus === 'success' && <div className="status-msg success"> UPLOAD_COMPLETE: Packet sent successfully.</div>}
              {formStatus === 'error' && <div className="status-msg error"> CRITICAL_FAILURE: All fields must be populated.</div>}
            </form>

            <div className="corner tr" />
            <div className="corner bl" />
          </motion.div>
        </div>

        <footer className="spatial-footer">
          <p>SYSTEM_VERSION_2.0.6 // <span className="green-txt">ISHAN_WIJESINGHE</span></p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@400;700&display=swap');

        .cyber-container {
          background: #000;
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          position: relative;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          padding: 120px 40px;
        }

        /* ANIMATED BACKGROUNDS (Education Style) */
        .spatial-void { position: absolute; inset: 0; perspective: 1500px; z-index: 1; pointer-events: none; }
        .perspective-grid {
          position: absolute; width: 250%; height: 250%; top: -75%; left: -75%;
          background-image: linear-gradient(rgba(0, 255, 136, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.15) 1px, transparent 1px);
          background-size: 60px 60px; transform: rotateX(65deg);
        }
        .moving-scanline {
          position: absolute; width: 100%; height: 100%;
          background: linear-gradient(0deg, transparent 0%, rgba(0, 255, 136, 0.05) 50%, transparent 100%);
          background-size: 100% 4px; animation: scan 8s infinite linear; z-index: 2;
        }
        .data-rain {
          position: absolute; top: 0; right: 20px; width: 250px; opacity: 0.1;
          font-size: 10px; color: #00ff88; line-height: 1.5;
        }
        .rain-row { white-space: nowrap; animation: rain 25s infinite linear; }

        /* HUD FRAME */
        .frame-corner { position: fixed; color: #00ff88; font-size: 10px; padding: 25px; letter-spacing: 2px; z-index: 100; font-weight: bold; }
        .tl { top: 0; left: 0; border-left: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .tr { top: 0; right: 0; border-right: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .bl { bottom: 0; left: 0; border-left: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }
        .br { bottom: 0; right: 0; border-right: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }
        .blink-dot { width: 8px; height: 8px; background: #00ff88; border-radius: 50%; display: inline-block; margin-right: 10px; animation: blink 1s infinite; }

        .content-shell { position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; }

        /* GLITCH HEADER */
        .hud-header { margin-bottom: 60px; }
        .expansive-title { font-family: 'Orbitron', sans-serif; font-size: 5rem; font-weight: 900; line-height: 0.9; }
        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }
        .glitch { position: relative; }
        .glitch:hover::before { content: attr(data-text); position: absolute; left: 2px; text-shadow: -2px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 0.2s infinite linear alternate-reverse; }
        .terminal-prompt { display: flex; align-items: center; gap: 10px; color: #00ff88; font-size: 12px; margin-top: 10px; }
        .typewriter { overflow: hidden; white-space: nowrap; border-right: 2px solid #00ff88; animation: typing 3s steps(40), blink 0.5s infinite; }

        .contact-main-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; margin-top: 40px; }

        /* CARDS */
        .contact-node-card {
          background: rgba(0, 20, 10, 0.4); border: 1px solid rgba(0, 255, 136, 0.2);
          padding: 25px; display: flex; align-items: center; gap: 20px;
          position: relative; backdrop-filter: blur(10px); transition: 0.3s; cursor: pointer;
        }
        .contact-node-card:hover { border-color: #00ff88; transform: translateX(10px); background: rgba(0, 255, 136, 0.1); }
        .card-glitch-bar { position: absolute; bottom: 0; left: 0; height: 2px; width: 0; background: #00ff88; transition: 0.5s; }
        .contact-node-card:hover .card-glitch-bar { width: 100%; }
        .node-icon-box { color: #00ff88; }
        .node-label { display: block; font-size: 10px; color: #00ff88; opacity: 0.6; }
        .node-value { display: block; font-size: 14px; margin-top: 5px; }

        /* TERMINAL */
        .terminal-form-container { background: rgba(0, 10, 5, 0.8); border: 1px solid rgba(0, 255, 136, 0.2); position: relative; }
        .terminal-top { padding: 12px 20px; background: rgba(0, 255, 136, 0.1); border-bottom: 1px solid rgba(0, 255, 136, 0.2); display: flex; justify-content: space-between; align-items: center; }
        .dots span { width: 8px; height: 8px; border-radius: 50%; background: #00ff88; opacity: 0.5; margin-right: 5px; display: inline-block; }
        .terminal-body { padding: 40px; }
        .input-row { margin-bottom: 25px; border-bottom: 1px solid rgba(0, 255, 136, 0.1); padding-bottom: 10px; }
        .prompt { color: #00ff88; font-weight: bold; margin-right: 15px; }
        input, textarea { background: transparent; border: none; color: #fff; width: 80%; outline: none; font-family: 'JetBrains Mono'; }
        
        .transmit-btn {
          width: 100%; padding: 20px; background: #00ff88; color: #000; border: none;
          font-family: 'Orbitron'; font-weight: 900; display: flex; align-items: center; justify-content: center; gap: 15px;
          cursor: pointer; clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%); transition: 0.3s;
        }
        .transmit-btn:hover { background: #fff; box-shadow: 0 0 30px #00ff88; transform: translateY(-3px); }

        /* KEYFRAMES */
        @keyframes scan { from { background-position: 0 0; } to { background-position: 0 100%; } }
        @keyframes rain { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          50% { clip: rect(16px, 9999px, 78px, 0); }
          100% { clip: rect(70px, 9999px, 80px, 0); }
        }

        .spatial-footer { margin-top: 80px; text-align: center; color: #444; font-size: 10px; letter-spacing: 2px; }
        .corner { position: absolute; width: 15px; height: 15px; border: 2px solid #00ff88; }
        .tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }

        @media (max-width: 1000px) {
          .contact-main-grid { grid-template-columns: 1fr; }
          .expansive-title { font-size: 2.5rem; }
          .cyber-container { padding: 80px 20px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;