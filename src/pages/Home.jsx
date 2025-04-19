import { Link } from 'react-router-dom'
// import heroBg from '../assets/hero-bg.jpg'
// style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})` }}

function Home() {
  return (
    <section 
      className="hero" 
    >
      <div className="hero-content">
        <h1>La Cave de Mions</h1>
        <p className="slogan">"Des bulles ou du raisin, c'est toujours entre copains"</p>
        <div className="cta-buttons">
          <Link to="/produits" className="btn btn-primary">
            Découvrir nos produits
          </Link>
          <Link to="/evenements" className="btn btn-secondary">
            Voir les événements
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home 