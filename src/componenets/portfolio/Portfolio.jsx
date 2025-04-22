import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const items = [
  {
    id: 1,
    title: "SynGPT | November 2023 - December 2024",
    img: "https://img.freepik.com/premium-photo/data-search-concept-using-artificial-intelligence-chatbot-chatgpt-young-businessman-chatting-with-smart-chatbot-find-business-economic-information-artificial-intelligence-developed-by-openai_1226545-907.jpg?ga=GA1.1.1400772433.1736257455&w=740",
    desc: `Built a highly interactive, real-time AI-powered chat application using React.js, Next.js, and Tailwind CSS, integrating backend APIs for knowledge base access. Optimized API handling, reducing response time by 40%.
Engineered backend logic for chat streaming that handled 200+ concurrent connections with <100ms latency, ensuring seamless real-time communication. 
Identified and resolved 15+ critical frontend-backend integration issues, improving system stability by 45% and eliminating frequent user reported errors.
Tech Stack: ReactJs, NextJs, Tailwind CSS, JavaScript, Python.`,
    demoLink: "https://syngpt.example.com"
  },
  {
    id: 2,
    title: " Blog Application | July 2023 - November 2023",
    img: "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?ga=GA1.1.1400772433.1736257455&semt=ais_hybrid&w=740",
    desc: `Established JWT-based authentication and password hashing (bcrypt) for a secure user login system, ensuring data encryption and reducing unauthorized access attempts by 60%.
 Delivered features allowing users to create, edit, delete, and upload images for blog posts, along with a moderated comment section managed by blog owners.
 Integrated analytics tools to enable blog administrators to monitor website traffic, user engagement, and generate visual reports through interactive bar graphs.
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
    demoLink: "https://ecommerce.example.com"
  },
  {
    id: 4,
    title: " Heart Disease Prediction | January 2023 - May 2023",
    img: "https://img.freepik.com/free-vector/high-cholesterol-blood-pressure-tiny-people-character-concept-vector-illustration_272375-2278.jpg?t=st=1745342547~exp=1745346147~hmac=326517b12ddf4166f63e2489f893d6cb61f7a8368836200c44681e86f44287f1&w=1060",
    desc: `Designed a ML-based heart disease prediction system with a user-friendly dashboard, integrating Logistic Regression for accurate risk assessment. Cleaned 100K+ data points to enhance prediction accuracy by 20%.
 Developed logistic regression model that provides 87% accurate and interpretable predictions of heart disease risk, assisting healthcare professionals in making informed decisions for preventive care.
Implemented the system evaluates their heart disease risk. If it's high, it shows nearby hospitals on a map, allowing the user to call an ambulance, and the system sends the user's location to dispatch an ambulance.
Tech Stack: Javascript, Python, Machine Learning.`,
    demoLink: "https://healthprediction.example.com"
  },
  {
    id: 5,
    title: "iNotebook Web Platform | October 2022 - December 2022",
    img: "https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?ga=GA1.1.1400772433.1736257455&semt=ais_hybrid&w=740",
    desc: `Developed a personal cloud-based note management web platform enabling users to securely create, edit, organize, and delete personal notes from any device.
Ensured CRUD support for all note operations, and incorporated responsive UI with autosave and category-based note sorting for better user experience.
Utilized MongoDB for persistent data storage and Express.js for scalable API architecture, allowing seamless real-time syncing across sessions.
Tech Stack: Javascript, ReactJs, NodeJs, ExpressJs, MongoDB.`,
    demoLink: "https://inotebook.example.com"
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
            <div className="imageButtonContainer">
              <a
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.id === 2 && (
              <a
                href="https://blog.schemesinindia.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>See it Live</button>
              </a>
            )}
              </a>
            </div>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <ul>
              {item.desc.split("\n").map((line, index) => (
                <li key={index} style={{ marginBottom: "7px" }}>
                  {line.trim()}
                </li>
              ))}
            </ul>
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