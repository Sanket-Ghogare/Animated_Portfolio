// Sidebar.jsx
import "./sidebar.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Togglebutton from "./togglebuttons/Togglebutton";
import Links from "./Links/Links";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop circle animation variants
  const circleVariants = {
    open: {
      clipPath: "circle(800px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 25,
        damping: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
  };

  // Mobile slide animation variants
  const slideVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.div className="sidebar">
      <motion.div 
        className="bg"
        animate={open ? "open" : "closed"}
        variants={isMobile ? slideVariants : circleVariants}
      >
        <Links open={open} setOpen={setOpen} />
      </motion.div>
      <div className="button">
        <Togglebutton setOpen={setOpen} open={open} />
      </div>
    </motion.div>
  );
};

export default Sidebar;