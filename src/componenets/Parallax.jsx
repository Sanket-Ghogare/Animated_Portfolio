import React, { useRef } from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Scroll transforms (slightly varied for better distinction)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", type === "projects" ? "400%" : "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Determine background and content per section
  const isSkills = type.toLowerCase() === "skills";
  const isProjects = type.toLowerCase() === "projects";

  const backgroundGradient = isSkills
    ? "linear-gradient(180deg, #111132, #0c0c1d)"
    : "linear-gradient(180deg, #111132, #505064)";

  const headingText = isSkills ? "What We Do?" : "What We Did?";
  const planetImage = isSkills ? "/planets.png" : "/sun.png";

  return (
    <div className='parallax' ref={ref} style={{ background: backgroundGradient }}>
      <motion.h1 style={{ y: yText }}>{headingText}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${planetImage})`
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  )
}

export default Parallax;