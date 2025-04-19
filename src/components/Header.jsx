import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_hd_cave_de_mions_white.png'
import '../styles/components/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Cave de Mions" />
        </Link>
      </div>
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/products">Nos Produits</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 