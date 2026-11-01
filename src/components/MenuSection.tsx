import { useState } from 'react'
import { DESSERTS, DRINKS, type MenuItem } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="menu-list">
      {items.map((item) => (
        <li key={item.name} className="menu-list__item">
          <div className="menu-list__head">
            <span className="menu-list__name">{item.name}</span>
            <span className="menu-list__dots" aria-hidden="true" />
            <span className="menu-list__price">{item.price} ₽</span>
          </div>
          {item.note ? <p className="menu-list__note">{item.note}</p> : null}
        </li>
      ))}
    </ul>
  )
}

export function MenuSection() {
  const [tab, setTab] = useState<'drinks' | 'desserts'>('drinks')
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id="menu"
      ref={ref}
      className={`menu-section ${visible ? 'is-visible' : ''}`}
      aria-labelledby="menu-title"
    >
      <div className="menu-section__intro">
        <p className="section-label">Меню</p>
        <h2 id="menu-title">Без лишних страниц</h2>
        <p>
          Цены актуальны на сезон. Если нужен декаф или альтернативное молоко — скажите бариста, это
          уже включено в стоимость напитка.
        </p>
      </div>

      <div className="menu-section__panel">
        <div className="menu-tabs" role="tablist" aria-label="Разделы меню">
          <button
            type="button"
            role="tab"
            id="tab-drinks"
            aria-selected={tab === 'drinks'}
            aria-controls="panel-drinks"
            className={tab === 'drinks' ? 'is-active' : ''}
            onClick={() => setTab('drinks')}
          >
            Напитки
          </button>
          <button
            type="button"
            role="tab"
            id="tab-desserts"
            aria-selected={tab === 'desserts'}
            aria-controls="panel-desserts"
            className={tab === 'desserts' ? 'is-active' : ''}
            onClick={() => setTab('desserts')}
          >
            Десерты
          </button>
        </div>

        <div
          id="panel-drinks"
          role="tabpanel"
          aria-labelledby="tab-drinks"
          hidden={tab !== 'drinks'}
        >
          <MenuList items={DRINKS} />
        </div>
        <div
          id="panel-desserts"
          role="tabpanel"
          aria-labelledby="tab-desserts"
          hidden={tab !== 'desserts'}
        >
          <MenuList items={DESSERTS} />
        </div>
      </div>
    </section>
  )
}
