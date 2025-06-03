import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const boxVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header Section */}
      <motion.div className="header-section" variants={itemVariants}>
        <div className="header-content">
          <motion.div 
            className="header-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/people.png" alt="Team" />
          </motion.div>
          <div className="header-text">
            <motion.h1>
              <motion.span whileHover={{ color: "#ff6b35" }}>Professional</motion.span> Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Crafting innovative solutions with cutting-edge technologies
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Experience Cards */}
      <motion.div className="experience-container" variants={itemVariants}>
        <motion.div
          className="experience-card"
          variants={boxVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="card-header">
            <motion.div 
              className="role-badge"
              whileHover={{ scale: 1.05 }}
            >
              <span className="badge-text">Full-Time</span>
            </motion.div>
            <h3>Software Engineer | Frontend Developer</h3>
            <div className="company-info">
              <h4>Syngenta</h4>
              <span className="duration">December 2023 - December 2024</span>
            </div>
          </div>
          
          <div className="card-content">
            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
            
            <ul className="achievements">
              <li>
                <motion.div 
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🚀</span>
                  Engineered scalable, high-performance user interfaces for SynGPT project and CloudFactory application, decreasing response times by <strong>30%</strong> and boosting customer satisfaction ratings to <strong>4.2/5</strong>.
                </motion.div>
              </li>
              <li>
                <motion.div 
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">⚡</span>
                  Crafted React-based UI components that streamlined request management for Amazon services, reducing workflow time by <strong>25%</strong> and improving user satisfaction scores.
                </motion.div>
              </li>
              <li>
                <motion.div 
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">💎</span>
                  Integrated RESTful APIs and optimized React components, ensuring <strong>99.9% uptime</strong>, seamless real-time functionality, and improved cross-platform compatibility.
                </motion.div>
              </li>
            </ul>
          </div>
          
          <motion.button 
            className="view-details-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project Details
          </motion.button>
        </motion.div>

        <motion.div
          className="experience-card"
          variants={boxVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="card-header">
            <motion.div 
              className="role-badge internship"
              whileHover={{ scale: 1.05 }}
            >
              <span className="badge-text">Internship</span>
            </motion.div>
            <h3>Software Engineer Intern | Full-Stack Developer</h3>
            <div className="company-info">
              <h4>Syngenta</h4>
              <span className="duration">July 2023 - November 2023</span>
            </div>
          </div>
          
          <div className="card-content">
            <div className="tech-stack">
               <span className="tech-tag">UI/UX</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Express js</span>
              <span className="tech-tag">Node js</span>
             
            </div>
            
            <ul className="achievements">
              <li>
                <motion.div 
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🎨</span>
                  Created and deployed <strong>12+</strong> responsive, WCAG-compliant web pages for a blog application, ensuring seamless navigation and enhanced user experience.
                </motion.div>
              </li>
              <li>
                <motion.div 
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">📊</span>
                  Conducted detailed study of UI changes and user retention, analyzing <strong>1,200+</strong> user interactions which increased daily active users by <strong>15%</strong> in two months.
                </motion.div>
              </li>
              <li>
                <motion.div 
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🔧</span>
                  Refactored <strong>20+</strong> React components into scalable, reusable code structure that reduced bundle size by <strong>30%</strong> and improved load time by <strong>25%</strong>.
                </motion.div>
              </li>
            </ul>
          </div>
          
          <motion.button 
            className="view-details-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project Details
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;