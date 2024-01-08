import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="social">
            <a href="#"><img src='/facebook.png' alt=""/></a>
            <a href="#"><img src='/instagram.png' alt=""/></a>
            <a href="#"><img src='/git.png' alt=""/></a>
            <a href="#"><img src='/gmail.png' alt=""/></a>
            <a href="#"><img src='/linkedin.png' alt=""/></a>
        </div>
    </div>
  )
}

export default Navbar