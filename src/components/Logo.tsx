type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 148 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Morrow"
      role="img"
    >
      <text
        x="0"
        y="26"
        fill="currentColor"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="22"
        fontWeight="500"
        letterSpacing="0.35em"
      >
        MORROW
      </text>
      <rect x="0" y="30" width="148" height="2" fill="var(--ember)" />
    </svg>
  )
}
