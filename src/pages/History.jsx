// import histoireImg from '../assets/histoire.jpg'

function History() {
  return (
    <section className="history">
      <h2>Notre Histoire</h2>
      <div className="history-content">
        {/* <img src={histoireImg} alt="Notre Histoire" /> */}
        <div className="history-text">
          <p>
            La Cave de Mions est née d'une passion authentique pour les vins et les saveurs. 
            Notre engagement envers la qualité et la tradition nous guide dans chaque sélection.
          </p>
          <p>
            Depuis notre ouverture, nous nous efforçons de vous offrir une expérience unique, 
            en mettant en valeur les meilleurs produits locaux et internationaux.
          </p>
          <p>
            Notre équipe d'experts est toujours à votre disposition pour vous conseiller 
            et vous faire découvrir de nouvelles saveurs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default History 