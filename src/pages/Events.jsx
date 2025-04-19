import { events } from '../data/events'

function Events() {
  return (
    <section className="events">
      <h2>Événements à venir</h2>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-desc">{event.description}</p>
            <button className="btn btn-primary">Réserver</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events 