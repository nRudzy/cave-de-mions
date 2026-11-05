import aboutImg from '../../assets/me_presentation.jpg'
import '../../styles/components/About.css'
import '../../styles/components/ScrollAnimation.css'
import ScrollAnimation from '../ScrollAnimation'

function About() {
  return (
    <section className="about-grid">
      <ScrollAnimation>
        <div className="section-header">
          <h2>Qui suis-je ?</h2>
          <p>Découvrez l'histoire et la passion qui se cachent derrière la Cave de Mions</p>
        </div>
      </ScrollAnimation>
      
      <div className="about-container">
        <ScrollAnimation className="from-left">
          <div className="about-block">
            <div className="about-image">
              <img src={aboutImg} alt="Bastien, caviste à la Cave de Mions" />
            </div>
            <div className="about-content">
              <h3>Bon Vivant Breton,</h3>
              <h3>B.V.B</h3>
              <p>Moi, c'est Bastien. Je vis dans la région lyonnaise depuis 2017.</p>
              <p>Mes débuts professionnels dans la restauration, en tant que plongeur, serveur ou responsable de salle, m'ont conduit au métier de caviste.</p>
              <p>À la Cave de Mions, je vous transmets ma passion pour les vins, les spiritueux, les bières et les produits du terroir. En ce lieu propice aux échanges et à la convivialité, je suis ravi de vous accompagner dans vos choix, pour toutes les occasions.</p>
              <p>Je vous propose des produits de qualité et des nouveautés à découvrir, en mettant un point d'honneur à rencontrer les producteurs et à valoriser leur savoir-faire.</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default About 