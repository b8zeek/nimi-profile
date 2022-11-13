import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { NIMI_CARDS_WIDTH } from '../../constants'
import { NimiThemeType } from 'types'

type NimiLinkProps = {
  children: ReactNode
  onClick: () => void
  lightButton?: boolean
  themeType: NimiThemeType
}

export function NimiLink({ children, onClick, lightButton, themeType }: NimiLinkProps) {
  return (
    <LinkButton
      onClick={onClick}
      lightButton={lightButton}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      themeType={themeType}
    >
      {children}
    </LinkButton>
  )
}

type LinkButtonProps = {
  lightButton?: boolean
  themeType: NimiThemeType
}

export const LinkButton = styled(motion.a)<LinkButtonProps>`
  width: fit-content;
  height: 42px;
  padding: 11px 16px;
  display: flex;
  gap: 9px;
  align-items: center;
  box-sizing: border-box;
  line-height: 20px;
  font-size: 15px;
  font-family: 'Archivo', sans-serif;
  border-radius: 1000px;
  box-shadow: 0px 5px 18px rgba(156, 149, 233, 0.2);
  ${({ themeType, lightButton }) => getLinkColors(themeType, lightButton)}
  cursor: pointer;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    font-size: 14px;
    gap: none;
  }

  & .svg-path-stroke {
    stroke: ${({ themeType }) => getSVGPathColor(themeType)};
  }
`

function getLinkColors(themeType: NimiThemeType, lightButton: boolean | undefined) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return css`
        border: 2px solid white;
        color: #8e85e0;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #ffffff;
      `
    case NimiThemeType.DEVCON:
      return css`
        border: 2px solid white;
        color: #8e85e0;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #ffffff;
      `
    case NimiThemeType.RAAVE:
      return css`
        border: ${lightButton ? 'none' : '2px solid #bed784'};
        color: ${lightButton ? '#bed78480' : '#bed784'};
        background: #000000;
        box-shadow: none;
      `
    case NimiThemeType.INFINITE:
      return css`
        border: ${lightButton ? 'none' : '2px solid #ffffff80'};
        color: ${lightButton ? '#ffffff80' : '#fff'};
        background: #000000;
        box-shadow: none;
      `
    case NimiThemeType.DAIVINITY:
      return css`
        border: ${lightButton ? 'none' : '2px solid #F4B5D4'};
        color: ${lightButton ? '#BB6BD980' : '#BB6BD9'};
        background: ${lightButton ? 'transparent' : '#fff'};
        box-shadow: none;
      `
    default:
      return null
  }
}

function getSVGPathColor(themeType: NimiThemeType) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return '#8E85E0'
    case NimiThemeType.DEVCON:
      return '#8E85E0'
    case NimiThemeType.RAAVE:
      return '#bed78480'
    case NimiThemeType.INFINITE:
      return '#ffffff80'
    case NimiThemeType.DAIVINITY:
      return '#BB6BD980'
    default:
      return null
  }
}
