import "./sidebar.scss";
import {motion }  from "framer-motion";
import  {useState} from 'react'
import Togglebutton from "./togglebuttons'/Togglebutton";
import Links from "./Links/Links";

const Sidebar = () => {
    const[open, setOpen]= useState(false)


    const varients = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type: "spring",
                stiffness: 20,

            },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,

            },
                },
    };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={varients}>
           <Links/>
        </motion.div>
    <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar