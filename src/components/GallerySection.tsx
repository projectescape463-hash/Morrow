import { GALLERY } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function GallerySection() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="gallery"
      ref={ref}
      className={`gallery ${visible ? 'is-visible' : ''}`}
      aria-labelledby="gallery-title"
    >
      <div className="gallery__head">
        <div>
          <p className="section-label">Интерьер</p>
          <h2 id="gallery-title">Свет, бетон, тишина</h2>
        </div>
        <p className="gallery__hint">Листайте →</p>
      </div>

      <div className="gallery__scroll" tabIndex={0} role="region" aria-label="Галерея интерьера">
        <ul>
          {GALLERY.map((item) => (
            <li key={item.src}>
              <figure>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
