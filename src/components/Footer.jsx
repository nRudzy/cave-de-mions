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
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <p className="address">
              <i className="fas fa-map-marker-alt"></i>
              105 Rue du 23 Août 1944, 69780 Mions
            </p>
            <p className="phone">
              <i className="fas fa-phone"></i>
              <a href="tel:0478202055">04 78 20 20 55</a>
            </p>
            <p className="email">
              <i className="fas fa-envelope"></i>
              <a href="mailto:contact@lacavedemions.com">contact@lacavedemions.com</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <p className="disclaimer">L'abus d'alcool est dangereux pour la santé. À consommer avec modération.</p>
        <p className="copyright">© 2024 La Cave de Mions. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer 