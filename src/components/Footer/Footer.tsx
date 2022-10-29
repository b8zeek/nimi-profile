import { useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as NimiTextSVG } from '../../assets/svg/animated-footer.svg';
import nimiInfiniteFooterImage from '../../assets/svg/infinite-footer-1.png';
import nimiRaaveFooterImage from '../../assets/svg/nimi-footer-raave.png';
import { ReactComponent as NimiLogoSVG } from '../../assets/svg/nimi-logo-default.svg';
import { NIMI_CARDS_WIDTH } from '../../constants';
import { NimiThemeType } from '../../types';

function getNimiFooterImage(themeType: NimiThemeType) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return (
        <>
          <NimiLogo />
          <NimiText />
        </>
      );
    case NimiThemeType.DEVCON:
      return (
        <FooterImage src="https://ipfs.io/ipfs/QmQhjaifcDCCXgE7VcktQBeW31f4QGdgAsFyKcUxBqXsZR?filename=montanjas.svg" />
      );
    case NimiThemeType.RAAVE:
      return <FooterImage src={nimiRaaveFooterImage} />;
    case NimiThemeType.INFINITE:
      return <FooterImage src={nimiInfiniteFooterImage} />;
    default:
      return null;
  }
}

type FooterProps = {
  themeType: NimiThemeType;
};

export function Footer({ themeType }: FooterProps) {
  useEffect(() => {
    // TODO: MIRKO CHECK THIS OUT!
    const textPath = document.querySelector('#animated-text-path');

    let p = 30;

    textPathAnimationLoop();
    function textPathAnimationLoop() {
      if (!textPath) return;
      p += 0.07; // change to tweak the speed
      if (p > 32.6) p = 0;
      textPath.setAttribute('startOffset', p + '%');
      setTimeout(() => {
        window.requestAnimationFrame(textPathAnimationLoop);
      }, 1000 / 60);
    }
  }, []);

  return <Container>{getNimiFooterImage(themeType)}</Container>;
}

const Container = styled.footer`
  width: 100%;
  position: relative;
`;

const NimiLogo = styled(NimiLogoSVG)`
  width: 80px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    bottom: 12px;
  }
`;

export const NimiText = styled(NimiTextSVG)`
  width: 100%;
  height: 96px;
  display: flex;
  font-weight: 600;
  font-family: 'Archivo', sans-serif !important;
`;

function getFooterImageSpecialStylings(themeType) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return '';
    case NimiThemeType.DEVCON:
      return '';
    case NimiThemeType.RAAVE:
      return `
        width: 140%;
        position: relative;
        margin-left: -20%;
        margin-bottom: -70px;

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          width: 200%;
          position: relative;
          margin-bottom: -90px;
          margin-left: -55%;
        }
      `;
    case NimiThemeType.INFINITE:
      return `
        width: 120%;
        margin-left: -10%;

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          width: 100%;
          margin-left: 0;
        }
      `;
    default:
      return null;
  }
}

const FooterImage = styled.img`
  width: 500px;
  display: block;
  margin: 0 auto;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    width: 100%;
  }

  ${({ theme }) => getFooterImageSpecialStylings(theme.type)}
`;
