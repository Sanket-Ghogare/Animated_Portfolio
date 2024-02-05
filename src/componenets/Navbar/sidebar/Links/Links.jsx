import React from 'react'
import {motion }  from "framer-motion";

const variants ={
    open:{
        Transition:{
        staggerChildren:0.1,
        },
    },
    closed:{
        transition:{
            staggeredChildren: 0.05,
            StaggeredDirection:-1
        }
    }
}
const itemvariants ={
    open:{
       y:0,
       opacity:1,
       
    },
    closed:{
       y:50,
       opacity:0
    }
}
const Links = () => {

    const items =  [
        "homePage",
        "Services",
        "Portfolio",
        "Contact",
        "About",
    ]
  return (
    <motion.div className='links' variants={variants}>
        {items.map((items) =>(
        <a href={`#${items}`} key={items}>
            {items}
        </a>
    ))}</motion.div>
  )
}

export default Links