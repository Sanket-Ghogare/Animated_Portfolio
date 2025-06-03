import "./heros.scss"
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const geometricVariants = {
  initial: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const Heros = () => {
  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <div className="heros">
        <div className="wrapper">
          <motion.div 
            className="textContainer"
            variants={textVariants}
            initial='initial'
            animate="animate"
          >
            <motion.h3 variants={textVariants}>Sanket Ghogare</motion.h3>
            <motion.h1 variants={textVariants}>
              FullStack Developer<br/> and UI Designer
            </motion.h1>
           
            <motion.div className="buttons" variants={textVariants}>
              <motion.button 
                className="btn" 
                variants={textVariants}
                onClick={() => scrollToSection('Projects')}
              >
                See the Latest Work
              </motion.button>
              <motion.button 
                className="btn" 
                variants={textVariants}
                onClick={() => scrollToSection('Contact')}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Modern Geometric Design Element */}
          <motion.div 
            className="designElement"
            variants={geometricVariants}
            initial="initial"
            animate="animate"
          >
            <div className="geometric-shape"></div>
            <div className="geometric-shape"></div>
            <div className="geometric-shape"></div>
            
            <div className="floating-elements">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </motion.div>
        </div>

        <div className="slidingtext">
          Coders
        </div>
      </div>
    </>
  )
}

export default Heros;