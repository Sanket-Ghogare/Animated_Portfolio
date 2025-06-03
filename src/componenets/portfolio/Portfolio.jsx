import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const items = [
  {
    id: 1,
    title: "SynGPT | November 2023 - December 2024",
    img: "https://img.freepik.com/premium-photo/data-search-concept-using-artificial-intelligence-chatbot-chatgpt-young-businessman-chatting-with-smart-chatbot-find-business-economic-information-artificial-intelligence-developed-by-openai_1226545-907.jpg?ga=GA1.1.1400772433.1736257455&w=740",
   desc: `Built a real-time AI chat application with React.js & Next.js, optimizing API handling to reduce response time by 40%.
Engineered chat streaming backend supporting 200+ concurrent connections with <100ms latency, ensuring seamless real-time communication.
Resolved 15+ critical integration issues, improving system stability by 45%.
Tech Stack: ReactJs, NextJs, Tailwind CSS, JavaScript, Python.`,
    demoLink: "https://chat.syngenta.com/"
  },
  {
    id: 2,
    title: " Blog Application | July 2023 - November 2023",
    img: "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?ga=GA1.1.1400772433.1736257455&semt=ais_hybrid&w=740",
    desc: `Implemented JWT authentication with bcrypt hashing for secure user login, reducing unauthorized access by 60%.
 Built full CRUD functionality for blog posts with image uploads and moderated comment system for blog owners.
 Developed analytics dashboard enabling administrators to track traffic, engagement, and generate interactive visual reports.
 Tech Stack: ReactJs, NodeJs, ExpressJs & MongoDB`,
    demoLink: "https://blog.schemesinindia.in/"
  },
  {
    id: 3,
    title: " Ecommerce Application | May 2023 - July 2023",
    img: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?ga=GA1.1.1400772433.1736257455&semt=ais_hybrid&w=740",
    desc: `Engineered a responsive, full-stack ecommerce platform offering seamless product browsing, real-time cart updates, and a secure checkout experience.
Implemented user authentication, order history tracking, and personalized dashboards to enhance customer engagement and retention.
Designed a dynamic admin panel with complete product lifecycle management including add/edit/delete functionality, inventory tracking, and order management.
Tech Stack: React.js, Node.js, Express.js, Tailwind CSS, JavaScript.`,
    // demoLink: "https://ecommerce.example.com"
  },
  {
    id: 4,
    title: " Heart Disease Prediction | January 2023 - May 2023",
    img: "https://img.freepik.com/free-vector/high-cholesterol-blood-pressure-tiny-people-character-concept-vector-illustration_272375-2278.jpg?t=st=1745342547~exp=1745346147~hmac=326517b12ddf4166f63e2489f893d6cb61f7a8368836200c44681e86f44287f1&w=1060",
   desc: `Developed ML-based heart disease prediction system achieving 87% accuracy using Logistic Regression on 100K+ cleaned data points.
Built user dashboard with risk assessment and emergency features including hospital mapping and ambulance dispatch integration.
Enhanced prediction accuracy by 20% to assist healthcare professionals in preventive care decisions.
Tech Stack: Javascript, Python, Machine Learning.`,
    // demoLink: "https://healthprediction.example.com"
  },
  {
    id: 5,
    title: "iNotebook Web Platform | Oct 2022 - Dec 2022",
    img: "https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?ga=GA1.1.1400772433.1736257455&semt=ais_hybrid&w=740",
   desc: `Developed a cloud-based note management platform with secure CRUD operations and real-time syncing across devices.
Built responsive UI featuring autosave and category-based sorting for enhanced user experience.
Implemented scalable architecture using MongoDB and Express.js for persistent storage and seamless session management.
Tech Stack: ReactJs, NodeJs, ExpressJs, MongoDB.`,
    // demoLink: "https://inotebook.example.com"
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  
  // Reduced parallax effect for mobile devices
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} loading="lazy" />
            <div className="imageButtonContainer">
              <a
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                <button className="demo-button">
                  <span>See it Live</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <div className="description">
              {item.desc.split("\n").map((line, index) => (
                <p key={index} className="description-line">
                  {line.trim()}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;