import { ADDRESS, HOURS } from '../data/content'

const CONTACT_TELEGRAM = 'https://t.me/DfF_gg'
import { useReveal } from '../hooks/useReveal'

export function VisitSection() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="visit"
      ref={ref}
      className={`visit ${visible ? 'is-visible' : ''}`}
      aria-labelledby="visit-title"
    >
      <div className="visit__info">
        <p className="section-label">Как найти</p>
        <h2 id="visit-title">Заходите с улицы Розы</h2>
        <address>
          {ADDRESS.line}
          <br />
          {ADDRESS.city}
        </address>

        <table className="visit__hours">
          <caption className="sr-only">Часы работы</caption>
          <tbody>
            {HOURS.map((row) => (
              <tr key={row.days}>
                <th scope="row">{row.days}</th>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="visit__links">
          <a className="btn btn--primary" href={ADDRESS.mapUrl} target="_blank" rel="noopener noreferrer">
            Открыть в картах
          </a>
          <a
            className="btn btn--ghost"
            href={CONTACT_TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
          </a>
        </div>
      </div>

      <div className="visit__map">
        <iframe
          title="Карта — Morrow, Екатеринбург"
          src={ADDRESS.embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
