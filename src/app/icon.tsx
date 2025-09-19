import { ImageResponse } from 'next/og'

export const size = {
  width: 52,
  height: 52
}

export default function Icon(props: React.SVGProps<SVGSVGElement>) {
  return new ImageResponse(
    <svg
      role='img'
      aria-label='Icon'
      width={52}
      height={52}
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M39 0H26v13H0v39h26V39h26V0H39zM13 39h13V26h13V13H26v13H13v13z'
        fill='#000'
      />
      <style>{'@media (prefers-color-scheme:dark){path{fill:#fff}}'}</style>
    </svg>,
    {
      ...size
    }
  )
}
