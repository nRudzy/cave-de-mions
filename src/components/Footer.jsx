import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="legal">
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/politique-confidentialite">Politique de confidentialité</Link>
      </div>
      <p className="disclaimer">
        L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
      </p>
    </footer>
  )
}

export default Footer 