import React,{useRef} from 'react'
import "./services.scss"
import {motion ,useInView} from "framer-motion";

const variants={
   inital:{
      x:-500,
      // y:100,
      opacity:0,
   },
   animate:{
      x:0,
      opacity:1,
      // y:0,
      transition:{
        duration:0.5,
      //   duration:1,
      //   staggerChilen:0.1,
      ease: "easeInOut",

      },
   },
};
const Services = () => {
   const ref=useRef();

   const isInView=useInView(ref , {margin: "-100px"});
  return (
    <motion.div className='services' variants={variants} initial="inital" ref={ref} animate={"animate"}>
     <motion.div className="textContainer" variants={variants}>
        <p>
            I focus on helping your brand grow <br/> and move forward
        </p>
        <hr/>
     </motion.div>
 
     <motion.div className="titleContainer" variants={variants}>
        <div className="title">
        <img src="/people.png"alt=''/>
        <p><motion.b whileHover={{color:"orange"}}>Unique</motion.b>  Ideas</p>
     </div>
     <div className="title">
        <p><motion.b whileHover={{color:"orange"}}>For Your </motion.b><strong>Business.</strong></p>
        <button>What to Do?</button>
     </div>

</motion.div>
     <motion.div className="listContainer" variants={variants}>
        <motion.div className="box"  whileHover={{ background: "lightgray", color: "black" }}>
           <h2>
            Branding
           </h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nobis autem reprehenderit temporibus iste enim doloribus quas perspiciatis aut vero! Neque repellat nihil temporibus quidem quam itaque, accusamus beatae vitae.</p>
           <button>Go</button>
        </motion.div>

        <motion.div className="box"  whileHover={{ background: "lightgray", color: "black" }}>
           <h2>
            Branding
           </h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nobis autem reprehenderit temporibus iste enim doloribus quas perspiciatis aut vero! Neque repellat nihil temporibus quidem quam itaque, accusamus beatae vitae.</p>
           <button>Go</button>
        </motion.div>

        <motion.div className="box"  whileHover={{ background: "lightgray", color: "black"} }>
           <h2>
            Branding
           </h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nobis autem reprehenderit temporibus iste enim doloribus quas perspiciatis aut vero! Neque repellat nihil temporibus quidem quam itaque, accusamus beatae vitae.</p>
           <button>Go</button>
        </motion.div>

         <motion.div className="box"  whileHover={{ background: "lightgray", color: "black" }}>
           <h2>
            Branding
           </h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nobis autem reprehenderit temporibus iste enim doloribus quas perspiciatis aut vero! Neque repellat nihil temporibus quidem quam itaque, accusamus beatae vitae.</p>
           <button>Go</button>
        </motion.div>
     </motion.div>
    </motion.div>
  )
}

export default Services