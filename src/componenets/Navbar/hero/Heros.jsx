import "./heros.scss"
import {motion }  from "framer-motion";

const textvarients = {
  initial:{
    x:-500,
    opacity:0,

  },
  animate:{
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

};

// const slidevarients = {
//   initial:{
//     x: 0,

//   },
//   animate:{
//     x: "220%",
//     transition: {
//     repeat: Infinity,
//     duration: 13,
//     },
//   },

// };
const Heros = () => {
  return (
   <>
    <div className="heros">
      <div className="wrapper">
      
      </div>
      <div className="slidingtext">
        Coders
        </div>
        <div className="imageContainers">
            {/* <img src="/hero.png"/> */}
        </div>
    </div>
    <motion.div className="textContainer"
    variants={textvarients}
    initial='initial'
    animate= "animate"
    >
    <motion.h3 variants={textvarients}>Ghogare Sanket</motion.h3>
        <motion.h1 variants={textvarients}>Web Developer<br/> and UI Designer</motion.h1>
       
        <motion.div className="buttons" variants={textvarients}>
          <motion.button className="btn" variants={textvarients}>See the latest Work</motion.button>
          <motion.button className="btn"  variants={textvarients}>Contact Me</motion.button>
        </motion.div>
       
      </motion.div>
    </>
  )
}

export default Heros
