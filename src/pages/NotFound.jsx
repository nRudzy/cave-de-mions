import { Link } from 'react-router-dom'
import '../styles/pages/NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <h1>404</h1>
        <h2>Page non trouvée</h2>
        <p>Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

export default NotFound 