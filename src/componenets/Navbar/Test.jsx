import { motion } from "framer-motion"
import "./test.scss"

const Test = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { 
        delay: i * 0.15, // Reduced delay for mobile
        duration: 0.6,
        ease: "easeOut"
      }, 
    }),
    hidden: { 
      opacity: 0, 
      x: -30, // Reduced movement for mobile
      y: 15, 
      scale: 0.95 
    },
  }

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08 // Faster stagger for mobile
      }
    },
    hidden: {}
  }

  const items = [
    { id: "item1", title: "Frontend Development", description: "React, Vue, Angular" },
    { id: "item2", title: "Backend Development", description: "Node.js, Python, Java" },
    { id: "item3", title: "Database Management", description: "MongoDB, PostgreSQL, MySQL" },
    { id: "item4", title: "Cloud Services", description: "AWS, Azure, Google Cloud" }
  ];

  return (
    <div className="test">
      <div className="container">
        <motion.h2 
          className="sectionTitle"
          initial={{ opacity: 0, y: -20 }} // Reduced movement for mobile
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills & Expertise
        </motion.h2>
        
        <motion.ul 
          className="skillsList"
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
        >
          {items.map((item, i) => (
            <motion.li 
              key={item.id}
              className="skillItem"
              variants={variants} 
              custom={i}
              whileHover={{ 
                scale: 1.02, // Reduced scale for mobile
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="skillContent">
                <h3 className="skillTitle">{item.title}</h3>
                <p className="skillDescription">{item.description}</p>
              </div>
              <div className="skillNumber">{String(i + 1).padStart(2, '0')}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Test;