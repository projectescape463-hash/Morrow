import { useEffect, useState } from 'react'
import { TELEGRAM_URL } from '../data/content'
import { Logo } from './Logo'

const links = [
  { href: '#menu', label: 'Меню' },
  { href: '#about', label: 'О нас' },
  { href: '#gallery', label: 'Интерьер' },
  { href: '#visit', label: 'Как найти' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${open ? 'site-header--menu-open' : ''}`}
    >
      <div className="site-header__inner">
        <a href="#" className="site-header__brand" onClick={close}>
          <Logo />
        </a>

        <nav className="site-header__nav" aria-label="Основная навигация">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="site-header__telegram"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
          <span aria-hidden="true">{open ? '×' : '≡'}</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`site-header__drawer ${open ? 'site-header__drawer--open' : ''}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Мобильная навигация">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                Написать в Telegram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
