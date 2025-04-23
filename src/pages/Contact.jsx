import { useEffect } from 'react'
import '../styles/pages/Contact.css'
import '../styles/components/ScrollAnimation.css'
import ScrollAnimation from '../components/ScrollAnimation'

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contactez-nous</h1>
          <p>Nous sommes à votre écoute pour vous accompagner dans vos choix et répondre à toutes vos questions</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-container">
          <ScrollAnimation className="from-left">
            <div className="contact-block">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-content">
                <h3>Notre adresse</h3>
                <p>105 Rue du 23 Août 1944<br />69780 Mions</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="zoom-in">
            <div className="contact-block">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-content">
                <h3>Horaires d'ouverture</h3>
                <p>Mardi - Samedi<br />
                9h00 - 12h30<br />
                14h00 - 19h00</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="from-right">
            <div className="contact-block">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-content">
                <h3>Téléphone</h3>
                <p>04 78 20 20 55</p>
                <a href="tel:0478202055" className="contact-link">Appelez-nous</a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="zoom-in">
            <div className="contact-block">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-content">
                <h3>Email</h3>
                <p>contact@lacavedemions.com</p>
                <a href="mailto:contact@lacavedemions.com" className="contact-link">Envoyez-nous un email</a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1234567890123!2d4.949563776891454!3d45.66444267123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c497f83d596b%3A0x7ef6812036fb25ec!2sLA%20CAVE%20DE%20MIONS!5e0!3m2!1sfr!2sfr!4v1709912345678!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact 