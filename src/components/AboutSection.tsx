import { useReveal } from '../hooks/useReveal'

export function AboutSection() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className={`about ${visible ? 'is-visible' : ''}`}
      aria-labelledby="about-title"
    >
      <div className="about__year" aria-hidden="true">
        2019
      </div>
      <div className="about__grid">
        <blockquote className="about__quote">
          <p>
            «Morrow — это не про “ещё одну кофейню”. Мы открылись, потому что хотели место, где утро
            не спешит».
          </p>
          <footer>— Алина и Марк, основатели</footer>
        </blockquote>

        <div className="about__story">
          <p className="section-label">О нас</p>
          <h2 id="about-title">Шесть лет в одном дворе</h2>
          <p>
            Первую чашку здесь сварили в бывшей типографии: бетонный пол, высокие окна, запах свежей
            обжарки из соседней комнаты. С тех пор мало что изменилось — только карта зерна и витрина
            десертов.
          </p>
          <p>
            Мы работаем с двумя обжарщиками из Петербурга и Казани, меняем single origin каждые
            шесть недель и не держим зерно дольше десяти дней. Десерты — маленькие партии: basque,
            тарт с инжиром, иногда что-то экспериментальное к выходным.
          </p>
          <ul className="about__list">
            <li>Спешелти и фильтр — основа карты</li>
            <li>Столы без брони в будни до 11:00</li>
            <li>С собой — скидка 30 ₽ на напиток</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
