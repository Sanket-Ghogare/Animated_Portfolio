import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
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