export function Marquee() {
  const line =
    'фильтр · эспрессо · basque cheesecake · oat flat white · cold brew · matcha ·'

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}
