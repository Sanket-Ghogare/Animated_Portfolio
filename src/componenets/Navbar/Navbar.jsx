import './navbar.scss'
import { motion } from "framer-motion"

const Navbar = () => {
  const socialLinks = [
     {
      href: "https://www.linkedin.com/in/sanket-ghogare/",
      src: "/blinkdin.png",
      alt: "linkedin"
    },
    {
      href: "mailto:sanketvghogare@gmail.com",
      src: "/gmail.png",
      alt: "gmail"
    },
    {
      href: "https://github.com/Sanket-Ghogare",
      src: "/github.png",
      alt: "github"
    },
    {
      href: "https://www.instagram.com",
      src: "/instagram.png", 
      alt: "instagram"
    },
    {
      href: "https://www.facebook.com/share/1ASrdhKjZf/",
      src: "/facebook.png",
      alt: "facebook"
    },
    
    
    
   
  ];

  return (
    <div className='navbar'>
      <motion.div 
        className='wrapper'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* You can add a logo or brand name here if needed */}
      </motion.div>
      
      <motion.div 
        className="social"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, staggerChildren: 0.1 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a 
            key={index}
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="socialLink"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={link.src} alt={link.alt} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

export default Navbar