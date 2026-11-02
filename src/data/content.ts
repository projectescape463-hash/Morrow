/** Путь к файлам из public/ — работает и локально, и на GitHub Pages (/Morrow/). */
export function publicAsset(path: string) {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}

export const TELEGRAM_URL = 'https://t.me/morrow_coffee'
export const CONTACT_TELEGRAM = 'https://t.me/DfF_gg'

export const HOURS = [
  { days: 'Пн — Чт', time: '08:00 — 22:00' },
  { days: 'Пт — Сб', time: '08:00 — 00:00' },
  { days: 'Вс', time: '09:00 — 21:00' },
] as const

export const ADDRESS = {
  line: 'ул. Розы Люксембург, 12',
  city: 'Екатеринбург',
  mapUrl:
    'https://yandex.ru/maps/?text=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB.%20%D0%A0%D0%BE%D0%B7%D1%8B%20%D0%9B%D1%8E%D0%BA%D1%81%D0%B5%D0%BC%D0%B1%D1%83%D1%80%D0%B3%2C%2012',
  embedSrc:
    'https://yandex.ru/map-widget/v1/?text=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB.%20%D0%A0%D0%BE%D0%B7%D1%8B%20%D0%9B%D1%8E%D0%BA%D1%81%D0%B5%D0%BC%D0%B1%D1%83%D1%80%D0%B3%2C%2012&z=16',
}

export type MenuItem = {
  name: string
  note?: string
  price: number
}

export const DRINKS: MenuItem[] = [
  { name: 'Эспрессо', note: 'Brazil Fazenda, 18 g', price: 190 },
  { name: 'Фильтр', note: 'Ethiopia Guji, V60', price: 320 },
  { name: 'Капучино', note: 'двойной шот, овсяное молоко по запросу', price: 280 },
  { name: 'Флэт уайт', note: 'рисовое молоко', price: 300 },
  { name: 'Раф ваниль', note: 'сироп домашний', price: 340 },
  { name: 'Колд брю', note: '12 ч steep, лёд', price: 360 },
  { name: 'Какао 70%', note: 'Madagascar', price: 310 },
  { name: 'Мatcha latte', note: 'Uji, без сахара', price: 350 },
]

export const DESSERTS: MenuItem[] = [
  { name: 'Банановый кекс', note: 'глазурь из mascarpone', price: 290 },
  { name: 'Тарт с инжиром', note: 'миндаль, сезонный', price: 420 },
  { name: 'Бриoche с солью', note: 'сливочное масло', price: 180 },
  { name: 'Чизкейк basque', note: 'обожжённая корочка', price: 380 },
  { name: 'Профитроли', note: 'карамель, два шт.', price: 260 },
]

export const GALLERY = [
  {
    src: publicAsset('images/g1.jpg'),
    alt: 'Барная стойка и лампы в интерьере кофейни',
    caption: 'Бар',
  },
  {
    src: publicAsset('images/g2.jpg'),
    alt: 'Стол у окна с чашкой кофе',
    caption: 'У окна',
  },
  {
    src: publicAsset('images/g3.jpg'),
    alt: 'Детали интерьера и растения',
    caption: 'Зал',
  },
  {
    src: publicAsset('images/g4.jpg'),
    alt: 'Latte art в чашке',
    caption: 'Чашка',
  },
  {
    src: publicAsset('images/g5.jpg'),
    alt: 'Десерты на витрине',
    caption: 'Витрина',
  },
] as const

export const HERO_IMAGE = publicAsset('images/hero.jpg')
