import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_hd_cave_de_mions.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="La Cave de Mions" />
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
          <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
          <li><Link to="/produits" onClick={toggleMenu}>Nos Produits</Link></li>
          <li><Link to="/evenements" onClick={toggleMenu}>Événements</Link></li>
          <li><Link to="/histoire" onClick={toggleMenu}>Notre Histoire</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 