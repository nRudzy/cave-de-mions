import wineImg from '../../assets/vin_landscape.png'
import beerImg from '../../assets/beer_landscape.png'
import '../../styles/components/Services.css'

function Services() {
  return (
    <section className="services">
      <h2>Des services pour chaque occasion</h2>
      <p>Retrouvez les services proposés par la Cave de Mions pour partager et profiter pleinement de moments gourmands</p>
      
      <div className="services-grid">
        <div className="service-block">
          <img src={wineImg} alt="Cadeaux" />
          <h3>Le plaisir d'offrir</h3>
          <p>Offrez à vos proches le plaisir d'une dégustation avec nos bons cadeaux et paniers garnis,<br />
          soigneusement composés de vins, spiritueux et gourmandises artisanales pour toutes les occasions.</p>
        </div>

        <div className="service-block">
          <img src={beerImg} alt="Location" />
          <h3>Savourez l'authenticité d'une bière pression chez vous</h3>
          <p>Pour vos évènements, mariages, anniversaires ou simples soirées,<br />
          contactez la Cave de Mions pour connaître nos offres de location et réservation.</p>
        </div>
      </div>
    </section>
  )
}

export default Services 