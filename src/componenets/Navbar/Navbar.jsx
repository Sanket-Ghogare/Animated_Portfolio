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
      >Hello
      </motion.span>
      
        <div className="social">
            <a href="#"><img src='/facebook.png' alt="facebook"/></a>
            <a href="#"><img src='/instagram.png' alt="instagram"/></a>
            <a href="#"><img src='/github.png' alt="github"/></a>
            <a href="#"><img src='/gmail.png' alt="gmail"/></a>
            <a href="#"><img src='/blinkdin.png' alt="linkdin"/></a>
           
        </div>
   
    </div>
  )
}

export default Navbar