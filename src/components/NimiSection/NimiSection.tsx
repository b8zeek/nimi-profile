import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { NimiThemeType } from '../../types/NimiTheme';

type NimiSectionProps = {
  children: ReactNode;
  marginBottom?: string;
};

export function NimiSection({ children, marginBottom }: NimiSectionProps) {
  return <Container marginBottom={marginBottom}>{children}</Container>;
}

function getSectionColors(themeType: string) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return css`
        border: 2px solid white;
        background: #fff;
      `;
    case NimiThemeType.NIMI:
      return css`
        border: 2px solid white;
        background: #fff;
      `;
    case NimiThemeType.RAAVE:
      return css`
        border: 2px solid rgba(190, 215, 132, 0.5);
        background: #000;
      `;
    case NimiThemeType.INFINITE:
      return null;
    case NimiThemeType.DAIVINITY:
      return css`
        border: 2px solid #f4b5d4;
        background: #fff;
      `;
    default:
      return null;
  }
}

const Container = styled.section<{ marginBottom?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 22px;
  border-radius: 1000px;
  ${({ theme }) => getSectionColors(theme.type)}
  box-shadow: 0px 16px 16px -12px rgba(47, 54, 71, 0.16);
  margin-bottom: ${({ marginBottom = '0' }) => marginBottom};
`;
