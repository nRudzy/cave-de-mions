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
              <img src={aboutImg} alt="À propos de moi" />
            </div>
            <div className="about-content">
              <h3>Bon Vivant Breton,</h3>
              <h3>B.V.B</h3>
              <p>Moi c'est Bastien, vivant dans la région lyonnaise depuis 2017.</p>
              <p>Mes débuts professionnels dans la restauration en tant que plongeur, serveur ou responsable de salle m'ont permis de me retrouver aujourd'hui à ce nouveau statut, celui de caviste.</p>
              <p>A la cave de Mions, je vais pouvoir vous transmettre ma passion autour des vins, spiritueux, bières et tout autres mets. En ce lieux propice aux échanges et à la convivialité je serai ravi de vous accompagner dans vos choix pour toutes occasions.</p>
              <p>Je vous proposerai des produits de qualités et des nouveautés à découvrir en mettant un point d'honneur à aller à la rencontre des producteurs et de leurs savoirs faire.</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default About 