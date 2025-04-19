import { Link } from 'react-router-dom'
import '../../styles/components/Hero.css'

function Hero() {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)))` }}
    >
      <div className="hero-content">
        <h1>Bienvenue à la Cave de Mions</h1>
        <p className="slogan">Profitez d'une sélection variée de vins, bières, spiritueux et charcuteries pour savourer ensemble des moments de convivialité. Des conseils avisés vous seront réservés.</p>
        <p className="quote">" Des bulles ou du raisin, c'est toujours entre copains "</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">
            Contactez nous
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero 