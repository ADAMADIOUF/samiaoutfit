import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Function to close the menu
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' onClick={closeMenu}>
          <img src={logo} alt='Logo' className='logo-img' />
        </Link>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to='/' onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={closeMenu}>
              À Propos
            </Link>
          </li>
          <li>
            <Link to='/boutique' onClick={closeMenu}>
              Boutique
            </Link>
          </li>
        </ul>

        <button className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
