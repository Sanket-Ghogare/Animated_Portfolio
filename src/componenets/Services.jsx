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

        {/* Card 1 - Syngenta */}
        <motion.div
          className="experience-card"
          variants={boxVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="card-header">
            <motion.div className="role-badge" whileHover={{ scale: 1.05 }}>
              <span className="badge-text">Full-Time</span>
            </motion.div>
            <h3>Software Engineer | IT Digital Trainee</h3>
            <div className="company-info">
              <h4>Syngenta</h4>
              <span className="duration">July 2023 - December 2024</span>
            </div>
          </div>

          <div className="card-content">
            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>

            <ul className="achievements">
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🚀</span>
                  <span className="achievement-text">
                    Built scalable, high-performance UIs for <strong>SynGPT GenAI</strong> project and <strong>CloudFactory</strong> application using React.js, Redux &amp; Tailwind CSS, decreasing response times by <strong>30%</strong> and boosting customer satisfaction ratings to <strong>4.2/5</strong>.
                  </span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">⚡</span>
                  <span className="achievement-text">
                    Spearheaded <strong>GenAI-driven UI feature integration</strong>, enabling intelligent content suggestions and automated interactions that increased user productivity by <strong>45%</strong>.
                  </span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">💎</span>
                  <span className="achievement-text">
                    Integrated RESTful APIs and enhanced React components, ensuring <strong>99.9% uptime</strong>, seamless real-time functionality for <strong>5,000+ daily users</strong> and improved cross-platform compatibility.
                  </span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🏆</span>
                  <span className="achievement-text">
                    <strong>2nd Place – GenAIus Hackathon</strong> (May 2024): Award-winning GenAI invoice processing solution with multilingual translation and <strong>95% accuracy</strong> rate among 70+ participants.
                  </span>
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

        {/* Card 2 - Plan-A */}
        <motion.div
          className="experience-card"
          variants={boxVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="card-header">
            <motion.div className="role-badge current" whileHover={{ scale: 1.05 }}>
              <span className="badge-text">Current Role</span>
            </motion.div>
            <h3>FullStack Developer</h3>
            <div className="company-info">
              <h4>Plan-A</h4>
              <span className="duration">June 2025 - Present</span>
            </div>
          </div>

          <div className="card-content">
            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">GSAP</span>
              <span className="tech-tag">Framer Motion</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Mongodb</span>
              <span className="tech-tag">Laravel PHP</span>
              
            </div>

            <ul className="achievements">
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🌐</span>
                  <span className="achievement-text">
                    Engineered responsive digital solutions with React.js, Next.js &amp; Tailwind CSS for <strong>8+ client projects</strong>, ensuring <strong>100% cross-browser compatibility</strong>.
                  </span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🎨</span>
                  <span className="achievement-text">
                    Launched modern company website using <strong>Next.js SSR</strong>, achieving <strong>40% faster page loads</strong> and <strong>25% SEO performance boost</strong>, serving <strong>2,000+ monthly visitors</strong> with 95% satisfaction rate.
                  </span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">📦</span>
                  <span className="achievement-text">
                    Customized CMS solutions using <strong>Laravel PHP &amp; Joomla</strong>, delivering tailored solutions that reduced content update time by <strong>60%</strong> across client platforms.
                  </span>
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

        {/* Card 3 - Remark Skill */}
        <motion.div
          className="experience-card"
          variants={boxVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="card-header">
            <motion.div className="role-badge internship" whileHover={{ scale: 1.05 }}>
              <span className="badge-text">Internship</span>
            </motion.div>
            <h3>Software Engineer Intern</h3>
            <div className="company-info">
              <h4>Remark Skill</h4>
              <span className="duration">January 2023 - June 2023</span>
            </div>
          </div>

          <div className="card-content">
            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Mysql</span>
            </div>

            <ul className="achievements">
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🎯</span>
                  <span className="achievement-text">
                    Created and deployed <strong>12+ responsive, WCAG-compliant</strong> web pages for a blog application using React.js, ensuring seamless navigation and enhanced user experience.
                  </span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">📊</span>
                  <span className="achievement-text">
                    Conducted detailed study of UI changes and user retention, analyzing <strong>1,200+ user interactions</strong> which facilitated strategic recommendations that increased <strong>daily active users by 15%</strong> in two months.
                  </span>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="achievement-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bullet">🔧</span>
                  <span className="achievement-text">
                    Refactored <strong>20+ React components</strong> into scalable, reusable code structure that reduced bundle size by <strong>30%</strong> and improved application load time by <strong>25%</strong>.
                  </span>
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