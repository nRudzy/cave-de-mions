import aboutImg from '../../assets/rack_vin.png'
import '../../styles/components/About.css'

function About() {
  return (
    <section className="about-grid">
      <div className="section-header">
        <h2>Qui suis-je ?</h2>
        <p>Découvrez l'histoire et la passion qui se cachent derrière la Cave de Mions</p>
      </div>
      
      <div className="about-container">
        <div className="about-block">
          <div className="about-image">
            <img src={aboutImg} alt="À propos de moi" />
          </div>
          <div className="about-content">
            <h3>Moi c'est Bastien,</h3>
            <p>Breton d'origine, vivant dans la région lyonnaise depuis 2017.</p>
            <p>Mes débuts professionnels dans la restauration en tant que plongeur, serveur ou responsable de salle m'ont permis de me retrouver aujourd'hui à ce nouveau statut, celui de caviste.</p>
            <p>A la cave de Mions, je vais pouvoir vous transmettre ma passion autour des vins, spiritueux, bières et tout autres mets. En ce lieux propice aux échanges et à la convivialité je serai ravi de vous accompagner dans vos choix pour toutes occasions.</p>
            <p>Je vous proposerai des produits de qualités et des nouveautés à découvrir en mettant un point d'honneur à aller à la rencontre des producteurs et de leurs savoirs faire.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 