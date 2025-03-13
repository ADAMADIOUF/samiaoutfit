import { useState } from 'react'
import { FaBars, FaTimes, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../slices/userApiSlice'
import { logout } from '../slices/authSlice'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
 const [dropdownOpen, setDropdownOpen] = useState(false)
 const [adminDropdownOpen, setAdminDropdownOpen] = useState(false) // State for admin dropdown



 const toggleAdminDropdown = () => {
   setAdminDropdownOpen(!adminDropdownOpen)
 }
  // Function to close the menu
  const closeMenu = () => setIsOpen(false)
const { userInfo } = useSelector((state) => state.auth)
const [logoutApiCall] = useLogoutMutation()
 const dispatch = useDispatch()
 const navigate = useNavigate()
const logoutHandler = async () => {
  try {
    await logoutApiCall().unwrap()
    dispatch(logout())
    navigate('/login') 
  } catch (error) {
    console.log(error)
  }
}

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
        {userInfo && userInfo.isAdmin && (
          <div className='admin-dropdown'>
            <button
              onClick={toggleAdminDropdown}
              className='admin-dropdown-toggle'
            >
              Admin
            </button>
            {adminDropdownOpen && (
              <div className='admin-dropdown-menu no-wrap'>
                <Link
                  to='/admin/dashboard'
                  className='admin-dropdown-item'
                  onClick={() => setAdminDropdownOpen(false)}
                >
                  Tableau de bord
                </Link>
                <Link
                  to='/admin/productlist'
                  className='admin-dropdown-item'
                  onClick={() => setAdminDropdownOpen(false)}
                >
                  Produits
                </Link>

                <Link
                  to='/admin/userlist'
                  className='admin-dropdown-item'
                  onClick={() => setAdminDropdownOpen(false)}
                >
                  Utilisateurs
                </Link>
              </div>
            )}
          </div>
        )}

        {userInfo ? (
          <div className='register-dropdown'>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='nav-user'
            >
              {userInfo.name}
            </button>
            {dropdownOpen && (
              <div className='dropdown-user no-wrap'>
                <Link to='/profile' className='dropdown-item'>
                  <FaUser /> Profil
                </Link>

                <button onClick={logoutHandler} className='dropdown-item'>
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/login' className='nav-button'>
            <FaUser /> Se connecter
          </Link>
        )}
        <button className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
