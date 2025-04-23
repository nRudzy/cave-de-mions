import '../../styles/components/Contact.css'
import '../../styles/components/ScrollAnimation.css'
import ScrollAnimation from '../ScrollAnimation'

function Contact() {
  return (
    <section className="contact-section">
      <ScrollAnimation>
        <div className="section-header">
          <h2>Contactez nous !</h2>
          <p>Nous sommes là pour répondre à vos questions et vous accompagner au mieux dans vos choix.</p>
        </div>
      </ScrollAnimation>
      
      <div className="contact-container">
        <ScrollAnimation className="from-left">
          <div className="contact-block">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-content">
              <h4>Email</h4>
              <p>Pour toute demande d'information, de réservation ou de devis personnalisé, écrivez nous :</p>
              <a href="mailto:contact@lacavedemions.com" className="contact-link">
                contact@lacavedemions.com
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="contact-block">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-content">
              <h4>Téléphone</h4>
              <p>Du mardi au samedi, de 09h00 à 12h30 et de 14h00 à 19h00</p>
              <a href="tel:0478202055" className="contact-link">
                04 78 20 20 55
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="from-right">
          <div className="contact-block">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-content">
              <h4>Venez nous rendre visite</h4>
              <p>Vous souhaitez discuter de vive voix ou découvrir nos produits sur place ? Passez nous voir à la boutique, on vous accueille avec plaisir.</p>
              <p className="address">105 Rue du 23 Août 1944, 69780 Mions</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Contact 