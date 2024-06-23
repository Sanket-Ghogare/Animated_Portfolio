import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import React, { useRef } from 'react';

const items = [
    {
        id:1, 
        title:"Blog Application",
        img:"https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"1.  Implemented robust user authentication system for a blog application, utilizing security practices and technologies such as password hashing and JWT tokens.\n 2. Readers can leave comments on blog posts.The comment section can be moderated by the blog owner. Users can create, edit, and delete blog posts. They can also upload images to accompany their posts.\n 3. The blog admin can track website traffic, user engagement, and other bar graphs using analytics tools. \n\n Tech Stack : ReactJs, NodeJs, ExpressJs & MongoDB."

    },
    {
        id:2, 
        title:"WordCount Web Application",
        img:"https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"1. Ability to count characters, sentences, and paragraphs, or to analyze the reading level of the text.Designed to be easy to use and provide a quick and accurate way to determine the length of a piece of writing.\n 2. Application can be used for writers, editors, publishers, bloggers and content creators may use them to ensure that their work meets specific word count requirements.\n\n Tech Stack : Python & Framework django."
    },
    {
        id:3, 
        title:"iNotebook",
        img:"https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"1. iNotebook enables users to manage personal notes on the cloud, providing a web platform for taking and storing notes.\n 2. Maintained a way to create new notes, retrieve and view existing notes, make changes or updates to notes, and remove notes when they are no longer needed & Ensuring the security of users' data through encryption and secure authentication.\n\n Tech Stack: Javascript, ReactJs, NodeJs, ExpressJs & MongoDB."

    },
    {
        id:4, 
        title:"Heart Disease Prediction",
        img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"1. Develop a user-friendly interface for healthcare professionals to input patient data and receive risk assessments quickly and easily,Clean the dataset by handling missing values,outlierand data inconsistencies, and ensure it's ready for logistic regression.\n 2. logistic regression model that provides accurate and interpretable predictions of heart disease risk, which can assist healthcare professionals and individuals in making informed decisions and taking preventive measures.\n 3. Implemented the system evaluates their heart disease risk. If it's high, it shows nearby hospitals on a map, allowing the user to call an ambulance, and the system sends the user's location to dispatch an ambulance.\n\n Tech Stack: Javascript, Python & Machine Learning."
    },
    {
        id:5, 
        title:"Ecommerce Application",
        img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"1. Developed a full-stack e-commerce platform that allows users to browse products, add them to a shopping cart, and complete the checkout process.\n 2. Implemented a secure user authentication system with password hashing and JWT tokens and Enabled users to leave reviews and ratings for products, which are displayed on the product pages.\n 3. Provided an admin dashboard where store owners can manage products, orders, and customer data.\n Tech Stack : React.js, Node.js, Tailwind CSS, JavaScript"

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
                    <p>{item.desc.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}</p>
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










