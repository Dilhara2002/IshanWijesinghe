import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare, Sparkles, MapPin, CheckCircle, AlertCircle, Terminal, Activity } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
    <section id="contact" ref={sectionRef} className="hyper-contact-container">
      {/* 3D SPATIAL BACKGROUND */}
      <div className="spatial-floor" />
      <div className="vignette" />

      <div className="content-shell">
        {/* HUD HEADER */}
        <motion.header 
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          className="hud-header"
        >
          <div className="hud-badge">
            <Activity size={14} className="pulse-green" />
            <span>COMMS_UPLINK_ESTABLISHED</span>
          </div>
          <h1 className="expansive-title">DIRECT<br/><span className="outline-text">_CHANNEL</span></h1>
          <p className="hud-meta">Initialize secure transmission to establish collaboration.</p>
        </motion.header>

        <div className="contact-main-grid">
          {/* LEFT: DATA NODES */}
          <div className="nodes-column">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
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
                <div className="node-glimmer" />
              </motion.div>
            ))}
          </div>

          {/* RIGHT: TERMINAL FORM */}
          <motion.div 
            className="terminal-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          >
            <div className="terminal-top">
              <div className="dots"><span /><span /><span /></div>
              <span className="terminal-path">system@ishan:~/send_msg</span>
            </div>
            
            <form onSubmit={handleSubmit} className="terminal-body">
              <div className="input-row">
                <span className="prompt">{">"} NAME:</span>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="IDENTIFY_YOURSELF" 
                />
              </div>

              <div className="input-row">
                <span className="prompt">{">"} EMAIL:</span>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="CONTACT_PROTOCOL" 
                />
              </div>

              <div className="input-row textarea-row">
                <span className="prompt">{">"} MESSAGE:</span>
                <textarea 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="ENTER_DATA_PACKET..." 
                />
              </div>

              <button type="submit" className="transmit-btn">
                <span>EXECUTE_TRANSMISSION</span>
                <Send size={18} />
              </button>

              {formStatus === 'success' && <div className="status-msg success">UPLOAD_COMPLETE: Message Sent.</div>}
              {formStatus === 'error' && <div className="status-msg error">CRITICAL_ERROR: Missing Fields.</div>}
            </form>

            <div className="corner tr" />
            <div className="corner bl" />
          </motion.div>
        </div>

        <footer className="spatial-footer">
          <p>DESIGNED_BY <span className="green-txt">ISHAN_WIJESINGHE</span> // REF: 2026.SLIIT</p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@400;700&display=swap');

        .hyper-contact-container {
          background: #000;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 120px 40px;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        .spatial-floor {
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          transform: perspective(1000px) rotateX(60deg) translateY(200px);
          z-index: 1;
        }

        .vignette {
          position: absolute; inset: 0;
          background: radial-gradient(circle, transparent 20%, #000 100%);
          z-index: 2; pointer-events: none;
        }

        .content-shell { position: relative; z-index: 10; max-width: 1400px; margin: 0 auto; }

        .hud-header { margin-bottom: 80px; }
        .hud-badge {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid #00ff88; color: #00ff88;
          padding: 8px 25px; border-radius: 50px; font-size: 11px;
          background: rgba(0, 255, 136, 0.1); margin-bottom: 20px;
        }

        .expansive-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 5rem; font-weight: 900; line-height: 0.9;
        }
        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }
        .hud-meta { color: #888; font-size: 14px; margin-top: 15px; }

        .contact-main-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; }

        /* CONTACT NODES */
        .nodes-column { display: flex; flex-direction: column; gap: 20px; }
        .contact-node-card {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.1);
          padding: 25px; display: flex; align-items: center; gap: 20px;
          position: relative; overflow: hidden; transition: 0.3s; cursor: pointer;
        }
        .contact-node-card:hover { border-color: #00ff88; transform: translateX(10px); background: rgba(0, 255, 136, 0.05); }
        .node-icon-box { color: #00ff88; }
        .node-label { display: block; font-size: 10px; color: #555; font-weight: bold; }
        .node-value { display: block; font-size: 14px; color: #fff; margin-top: 5px; }

        /* TERMINAL FORM */
        .terminal-form-container {
          background: rgba(0, 20, 10, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.2);
          position: relative; backdrop-filter: blur(10px);
        }
        .terminal-top {
          padding: 12px 20px; background: rgba(0, 255, 136, 0.1);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
          display: flex; justify-content: space-between; align-items: center;
        }
        .dots { display: flex; gap: 6px; }
        .dots span { width: 10px; height: 10px; border-radius: 50%; background: #00ff88; opacity: 0.5; }
        .terminal-path { font-size: 11px; color: #00ff88; opacity: 0.7; }

        .terminal-body { padding: 40px; }
        .input-row { margin-bottom: 30px; border-bottom: 1px solid rgba(0, 255, 136, 0.1); padding-bottom: 10px; }
        .prompt { color: #00ff88; font-weight: bold; margin-right: 15px; font-size: 14px; }
        
        input, textarea {
          background: transparent; border: none; color: #fff;
          width: 70%; outline: none; font-family: 'JetBrains Mono', monospace;
        }
        textarea { width: 100%; margin-top: 15px; }

        .transmit-btn {
          width: 100%; padding: 20px; background: #00ff88; color: #000;
          border: none; font-family: 'Orbitron', sans-serif; font-weight: 900;
          display: flex; align-items: center; justify-content: center; gap: 15px;
          cursor: pointer; transition: 0.3s;
          clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
        }
        .transmit-btn:hover { background: #fff; box-shadow: 0 0 30px #00ff88; transform: scale(1.02); }

        .status-msg { margin-top: 20px; font-size: 12px; font-weight: bold; text-align: center; }
        .success { color: #00ff88; }
        .error { color: #ff5f56; }

        .spatial-footer { margin-top: 100px; text-align: center; color: #444; font-size: 12px; letter-spacing: 2px; }
        .green-txt { color: #00ff88; }
        .corner { position: absolute; width: 20px; height: 20px; border: 2px solid #00ff88; }
        .tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }

        .pulse-green { animation: pulse 2s infinite; }
        @keyframes pulse { 50% { opacity: 0.3; } }

        @media (max-width: 1000px) {
          .contact-main-grid { grid-template-columns: 1fr; }
          .expansive-title { font-size: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;