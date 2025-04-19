import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Données du formulaire:', formData)
    alert('Message envoyé avec succès !')
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      message: ''
    })
  }

  return (
    <section className="contact">
      <h2>Contactez-nous</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>105, rue du 23 août 1944, 69780 Mions</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>04 78 20 20 55</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>contact@cavedemions.com</p>
          </div>
        </div>
        <div id="map" className="map"></div>
      </div>
    </section>
  )
}

export default Contact 