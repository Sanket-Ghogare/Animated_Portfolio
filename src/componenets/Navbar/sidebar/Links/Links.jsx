// Links.jsx
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Links = ({ open, setOpen }) => {
  const items = [
    "HomePage",
    "Experience", 
    "Projects",
    "Contact",
  ];

  const handleLinkClick = (item) => {
    // Close sidebar on mobile after clicking
    setOpen(false);
    
    // Add smooth scrolling or navigation logic here
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="links"
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(item);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;