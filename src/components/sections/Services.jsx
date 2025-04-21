import presentsImg from '../../assets/box_landscape.png'
import locationImg from '../../assets/beer_tap_landscape.png'
import '../../styles/components/Services.css'
import '../../styles/components/ScrollAnimation.css'
import ScrollAnimation from '../ScrollAnimation'

function Services() {
  return (
    <section className="services-grid">
      <ScrollAnimation>
        <div className="section-header">
          <h2>Des services pour chaque occasion</h2>
          <p>Retrouvez les services proposés par la Cave de Mions pour partager et profiter pleinement de moments gourmands</p>
        </div>
      </ScrollAnimation>
      
      <div className="services-container">
        <ScrollAnimation className="from-left">
          <div className="service-block">
            <div className="service-image">
              <img src={presentsImg} alt="Cadeaux" />
            </div>
            <div className="service-content">
              <h3>Le plaisir d'offrir</h3>
              <p>Offrez à vos proches le plaisir d'une dégustation avec nos bons cadeaux et paniers garnis,<br />
              soigneusement composés de vins, spiritueux et gourmandises artisanales pour toutes les occasions.</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="from-right">
          <div className="service-container">
            <div className="service-block">
              <div className="service-image">
                <img src={locationImg} alt="Location" />
              </div>
              <div className="service-content">
                <h3>Savourez l'authenticité d'une bière pression chez vous</h3>
                <p>Pour vos évènements, mariages, anniversaires ou simples soirées,<br />
                contactez la Cave de Mions pour connaître nos offres de location et réservation.</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Services 