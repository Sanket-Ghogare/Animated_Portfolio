import './navbar.scss'
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className='navbar'>
      
      <motion.span 
      className='wrapper'
      initial= {{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      transition={{duration: 0.5}}
      >
      </motion.span>
      
      <div className="social">
        <a href="https://www.facebook.com/share/1ASrdhKjZf/" target="_blank" rel="noopener noreferrer">
          <img src='/facebook.png' alt="facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src='/instagram.png' alt="instagram" />
        </a>
        <a href="https://github.com/Sanket-Ghogare" target="_blank" rel="noopener noreferrer">
          <img src='/github.png' alt="github" />
        </a>
        <a href="mailto:sanketvghogare@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src='/gmail.png' alt="gmail" />
        </a>
        <a href="https://www.linkedin.com/in/sanket-ghogare/" target="_blank" rel="noopener noreferrer">
          <img src='/blinkdin.png' alt="linkedin" />
        </a>
      </div>
   
    </div>
  )
}

export default Navbar