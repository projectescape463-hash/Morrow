import { HERO_IMAGE, TELEGRAM_URL } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Hero() {
  const { ref, visible } = useReveal<HTMLElement>(0.08)

  return (
    <section
      ref={ref}
      className={`hero ${visible ? 'is-visible' : ''}`}
      aria-labelledby="hero-title"
    >
      <div className="hero__media">
        <img src={HERO_IMAGE} alt="Barista наливает фильтр-кофе в белую чашку" />
        <p className="hero__stamp">спешелти · центр</p>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Кофейня Morrow</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-line">Утро</span>
          <span className="hero__title-line hero__title-line--accent">начинается</span>
          <span className="hero__title-line">до будильника</span>
        </h1>
        <p className="hero__lead">
          Обжариваем малыми партиями, печём десерты каждое утро и оставляем столы свободными — чтобы
          можно было просто посидеть.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#menu">
            Смотреть меню
          </a>
          <a
            className="btn btn--ghost"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Забронировать стол
          </a>
        </div>
        <dl className="hero__facts">
          <div>
            <dt>Обжарка</dt>
            <dd>каждые 10 дней</dd>
          </div>
          <div>
            <dt>Зерно</dt>
            <dd>3 страны, сезонная карта</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
