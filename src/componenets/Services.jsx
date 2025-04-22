import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  inital: {
    x: -500,
    // y:100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    // y:0,
    transition: {
      duration: 0.5,
      //   duration:1,
      //   staggerChilen:0.1,
      ease: "easeInOut",
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="inital"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p >
            I focus on helping your brand grow <br/> and move forward
        </p>
        <hr/>
     </motion.div> */}
      <br />
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.png" alt="" />
          <p>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </p>
        </div>
        {/* <div className="title">
        <p><motion.b whileHover={{color:"orange"}}>For Your </motion.b><strong>Business.</strong></p>
        <button>What to Do?</button>
     </div> */}
        <div className="title">
          {/* <p><motion.b whileHover={{color:"orange"}}>For Your </motion.b><strong>Business.</strong></p> */}
          <button>
            {" "}
            <h1>WORK EXPERIENCE</h1>
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h3>Software Engineer | Frontend Developer (React, Next.js)</h3>
          <br />
          <h4> Syngenta | December 2023 - December 2024</h4>
          <br />
          <ol>
            <li>
              Engineered scalable, high-performance user interfaces for the
              SynGPT project and CloudFactory application using React.js, Redux,
              and Tailwind CSS,decreasing response times by 30% and boosting
              customer satisfaction ratings by 4.2/5.
            </li>
            <li>
              Crafted React-based UI components for CloudFactory application
              that streamlined request management for Amazon services, reducing
              workflow time by 25% and improving user satisfaction scores.
            </li>
            <li>
              Integrated RESTful APIs and optimized React components, ensuring
              99.9% uptime, seamless real-time functionality, and improved
              cross-platform compatibility.
            </li>
          </ol>
          <button>View Details</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h3> Software Engineer Intern | Full-Stack Developer</h3>
          <h4> Syngenta | July 2023 - November 2023</h4>

          <ol>
            <li>
              Created and deployed 12+ responsive, WCAG-compliant web pages for
              a blog application using React.js and Next.js, ensuring seamless
              navigation and enhanced user experience.
            </li>
            <li>
              Conducted a detailed study of the correlation between UI changes
              and user retention, analyzing 1,200+ user interactions which
              facilitated strategic recommendations that increased daily active
              users by 15% in two months.
            </li>
            <li>
              Refactored 20+ React components into a scalable, reusable code
              structure that reduced bundle size by 30% and improved application
              load time by 25%.
            </li>
          </ol>
          <button>View Details</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
