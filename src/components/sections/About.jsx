import '../../styles/components/About.css'

function About() {
  return (
    <section className="about">
      <div className="section-header">
        <h2>Qui suis-je ?</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="intro">Moi c'est Bastien,</p>
          <p className="location">Breton d'origine, vivant dans la région lyonnaise depuis 2017.</p>
          <p className="experience">Mes débuts professionnels dans la restauration en tant que plongeur, serveur ou responsable de salle m'ont permis de me retrouver aujourd'hui à ce nouveau statut, celui de caviste.</p>
          <p className="mission">A la cave de Mions, je vais pouvoir vous transmettre ma passion autour des vins, spiritueux, bières et tout autres mets. En ce lieux propice aux échanges et à la convivialité je serai ravi de vous accompagner dans vos choix pour toutes occasions.</p>
          <p className="values">Je vous proposerai des produits de qualités et des nouveautés à découvrir en mettant un point d'honneur à aller à la rencontre des producteurs et de leurs savoirs faire.</p>
        </div>
      </div>
    </section>
  )
}

export default About 