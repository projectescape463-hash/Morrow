import { TELEGRAM_URL } from '../data/content'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Logo />
        <p>
          Демонстрационный сайт для портфолио. Адрес и контакты вымышлены, кроме ссылки на Telegram —
          замените на реальную перед запуском.
        </p>
      </div>
      <div className="site-footer__bottom">
        <span>© {year} Morrow</span>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          t.me/morrow_coffee
        </a>
      </div>
    </footer>
  )
}
