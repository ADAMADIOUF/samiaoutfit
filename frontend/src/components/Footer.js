import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-logo'>
          <h1>Samia Outfit</h1>
        </div>
        <div className='footer-links'>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/boutique'>Boutique</Link>
            </li>
            <li>
              <Link to='/about'>À propos</Link>
            </li>
          </ul>
        </div>
        <div className='footer-social'>
          <ul>
            <li>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-contact'>
        <p>
          Contactez-nous: <a href='tel:+221774088655'>+221 774088655</a>
        </p>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2025 Samia Outfit. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
