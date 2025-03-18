import type { SVGProps } from 'react'

export function Spinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {
          '@keyframes spinner-fade{0%{opacity:1}to{opacity:.1}}.spinner-line{animation:spinner-fade 1.2s linear infinite;stroke:var(--muted-foreground);stroke-linecap:round}'
        }
      </style>
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '0s',
        }}
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.1s',
        }}
        transform="rotate(30 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.2s',
        }}
        transform="rotate(60 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.3s',
        }}
        transform="rotate(90 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.4s',
        }}
        transform="rotate(120 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.5s',
        }}
        transform="rotate(150 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.6s',
        }}
        transform="rotate(180 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.7s',
        }}
        transform="rotate(210 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.8s',
        }}
        transform="rotate(240 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-.9s',
        }}
        transform="rotate(270 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-1s',
        }}
        transform="rotate(300 50 50)"
        d="M50 22v11"
      />
      <path
        className="spinner-line"
        strokeWidth={6}
        style={{
          animationDelay: '-1.1s',
        }}
        transform="rotate(330 50 50)"
        d="M50 22v11"
      />
    </svg>

  )
}
