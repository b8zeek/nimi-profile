import { FC, SVGProps } from 'react'

/**
 * Renders a SVG element
 * @param logo
 * @returns
 */
export function renderSVG(logo?: FC<SVGProps<SVGSVGElement>>) {
  if (!logo) return
  const Logo = logo

  return <Logo height={22} width={22} />
}
