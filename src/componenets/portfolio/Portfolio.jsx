import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import React, { useRef } from 'react';

const items = [
    {
        id:1, 
        title:"React Js",
        img:"https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus veniam dolor doloribus amet, sed, quasi velit dolorum corrupti, esse consequuntur?"

    },
    {
        id:2, 
        title:"Js",
        img:"https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus veniam dolor doloribus amet, sed, quasi velit dolorum corrupti, esse consequuntur?"

    },
    {
        id:3, 
        title:"HTML",
        img:"https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus veniam dolor doloribus amet, sed, quasi velit dolorum corrupti, esse consequuntur?"

    },
    {
        id:4, 
        title:"CSS",
        img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus veniam dolor doloribus amet, sed, quasi velit dolorum corrupti, esse consequuntur?"

    },
    {
        id:5, 
        title:"CSS",
        img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus veniam dolor doloribus amet, sed, quasi velit dolorum corrupti, esse consequuntur?"

    },
    {
        id:5, 
        title:"CSS",
        img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus veniam dolor doloribus amet, sed, quasi velit dolorum corrupti, esse consequuntur?"

    },
    {
        id:5, 
        title:"CSS",
        img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus veniam dolor doloribus amet, sed, quasi velit dolorum corrupti, esse consequuntur?"

    },
];

const Single = ({item}) => 
    {
    const ref=useRef();

    const {scrollYProgress} = useScroll({
    target: ref
});

    const y = useTransform(scrollYProgress,[0,1],[-300, 300]);

        return(
            <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                <img src={item.img} alt="" />
                </div>
                <br/>
                <div className="textContainer" style={{y}}>
                    
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </div>
                
                </div>
            </div>
            </section>
        )
};

const Portfolio = () => {

   const ref = useRef();

    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item =>(
                <Single item={item} key={item.id}/>
            ))}
            
        </div>
    )
}

export default Portfolio;










