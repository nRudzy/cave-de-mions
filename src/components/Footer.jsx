import { Link } from 'react-router-dom'
import '../styles/components/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>La Cave de Mions</h3>
          <p>Votre caviste de confiance à Mions, proposant une sélection soignée de vins, bières, spiritueux et charcuteries.</p>
        </div>
        
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/products">Nos Produits</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>105 Rue du 23 Août 1944<br />69780 Mions</p>
          <p>Tél : <a href="tel:0478202055">04 78 20 20 55</a></p>
          <p>Email : <a href="mailto:contact@lacavedemions.com">contact@lacavedemions.com</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        
        <div className="legal">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/politique-confidentialite">Politique de confidentialité</Link>
        </div>
        
        <p className="disclaimer">L'abus d'alcool est dangereux pour la santé. À consommer avec modération.</p>
        <p className="copyright">© 2024 La Cave de Mions. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer 