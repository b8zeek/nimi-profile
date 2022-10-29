import { QRCode } from 'react-qrcode-logo';
import styled from 'styled-components';

import { ReactComponent as AnimatedFooter } from '../../assets/svg/animated-footer.svg';
import { ReactComponent as Avatar } from '../../assets/svg/avatar-logo.svg';
import { ReactComponent as NimiLogoSVG } from '../../assets/svg/default-nimi.svg';
import { ReactComponent as TwitterLogo } from '../../assets/svg/links/twitter.svg';
import { ReactComponent as StyledNimiBigSvg } from '../../assets/svg/nimi-text.svg';
import { ReactComponent as QrCodeLogo } from '../../assets/svg/qr-code.svg';
import { ReactComponent as XIconBase } from '../../assets/svg/x-icon.svg';
import { NIMI_CARDS_WIDTH } from '../../constants';
import { encodeSVGToDataURI } from '../../utils';
import { ExternalLink } from '../ExternalLink';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;

  /** Spacing and padding */

  max-width: ${NIMI_CARDS_WIDTH}px;

  /** Mobile default style */
  background: #fff;

  /** Add blur on mobile */
  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    backdrop-filter: blur(20px);
  }

  /** Switch to card style */
  @media (min-width: ${NIMI_CARDS_WIDTH}px) {
    background: transparent;
    /** border-radius: 25px;
   box-shadow: 0px 5px 24px rgba(138, 143, 234, 0.12); **/
  }
`;

export const StyledInnerWrapper = styled.div`
  margin-top: 215px;
  display: flex;
  flex-flow: column;
  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    max-width: 100vw;
    padding: 0px 20px;
  }
`;

export const ProfilePictureContent = styled.div`
  perspective: 1000px;
`;

export const ProfilePictureContainer = styled.div<{ isRotate?: boolean }>`
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  width: 100%;
  align-items: center;
  transform-style: preserve-3d;
  transform: rotateY(${(props) => (props.isRotate ? '180deg' : 'rotateY(0)')});
  transition: 0.3s ease;
  height: 45px;
  perspective: 5000px;
`;

export const ProfilePictureWreapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 185px;
  width: 185px;
  backface-visibility: hidden;
`;

export const PicBackgroundTop = styled.div`
  background: linear-gradient(111.35deg, #4368ea -25.85%, #c490dd 73.38%);

  position: absolute;

  border-radius: 0px 0px 200px 200px;
  height: 188px;
  width: 100%;
  @media (min-width: ${NIMI_CARDS_WIDTH}px) {
    border-radius: 50%;
    width: 100vw;
    bottom: calc(100vh - 210px);
    height: 100vh;
  }
`;

export const StyledNimiBig = styled(StyledNimiBigSvg)`
  margin-top: 22px;
  position: absolute;
  z-index: 1;
  cursor: pointer;

  @media (min-width: ${NIMI_CARDS_WIDTH}px) {
    width: 105px;
    height: 35px;
  }
`;

const defaultNimiImageURI = encodeSVGToDataURI(<NimiLogoSVG />);

export const ProfilePicture = styled.div<{
  image?: string;
}>(
  ({ image = defaultNimiImageURI }) => `
  background-image: url(${image});
  background-position: center, center;
  background-size: cover;
  border: 8px solid #FFFFFF;
  box-shadow: 0px 26px 56px -20px rgba(74, 48, 140, 0.25);
  border-radius: 200px;
  height: 185px;
  width: 185px;
  z-index: 1;
`
);

export const DisplayNameWrapper = styled.div`
  display: flex;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

export const DisplayName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 31.818px;
  line-height: 100%;
  justify-content: center;
  margin-top: 33px;
  display: flex;
  align-items: center;
  color: #000000;
`;
export const EnsName = styled.div`
  display: flex;
  font-size: 22px;
  height: 16px;
  cursor: pointer;
  font-weight: 600;
  padding-left: 12px;
  width: 50%;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  gap: 4px;
  color: #383838;
`;
export const Divider = styled.div`
  height: 18px;
  width: 1.5px;
  position: absolute;
  background-color: #000000;
`;

export const AddressBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 24px;
`;

export const StyledExternalLink = styled(ExternalLink)`
  font-weight: 400;
  font-size: 17.8976px;
  line-height: 100%;
  text-transform: uppercase;
  width: 50%;
  height: 16px;
  padding-right: 12px;
  text-align: end;
  color: ${({ theme }) => theme.shadow1};
  display: flex;
  gap: 7px;
  justify-content: end;
`;

export const VerticalSeparator = styled.div`
  margin-right: 30px;
  margin-left: 30px;
  &:after {
    content: '|';
    display: inline-block;
  }
`;

export const DescriptionWrapper = styled.div`
  font-size: 16px;
  color: #000000;
  overflow-wrap: break-word;
  margin: 19px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;
export const ClaimYourNimi = styled.div<{ isBig?: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: 600;
  margin: 32px auto;
  font-size: 18px;
  line-height: 21px;
  color: #ffff;
  background: linear-gradient(111.35deg, #4368ea -25.85%, #c490dd 73.38%);
  border-radius: 50px;
  padding: 12px 27px;
  max-width: ${({ isBig }) => (isBig ? '355px' : 'fit-content')};
  height: ${({ isBig }) => isBig && '63px'};
  justify-content: center;
`;

export const Section = styled.section<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : '38px 36px')};
  background: #ffffff;
  box-shadow: 0px 8px 35px #e9e0ff;
  border-radius: 25px;
  width: 100%;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h3`
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
`;

export const SectionItemContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;
`;

export const SectionItemContainerGrid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 31px;
  justify-content: center;
`;
export const NimiTextFooter = styled(StyledNimiBigSvg)`
  position: absolute;
  min-height: 25px;
  bottom: 20px;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    bottom: 12px;
  }
`;
export const AddressButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 6px;
  border-radius: 20px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #ffffff;
  box-shadow: 0px 5px 18px rgba(156, 149, 233, 0.2);
`;

export const Footer = styled(AnimatedFooter)`
  margin-top: auto;
  width: 100%;
  min-height: 81px;
  font-weight: 600;
  font-family: 'Archivo', sans-serif !important;
  display: flex; ;
`;

/**
 *
 */
export const NimiLinkImage = styled.img`
  width: 22px;
  height: 22px;
`;

export const ShadowButton = styled.div<{ color: string }>`
  display: flex;
  height: 42px;
  cursor: pointer;
  padding: 12px 16px;
  width: fit-content;
  gap: 8.7px;
  align-items: center;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #ffffff;
  box-shadow: 0px 5px 18px rgba(156, 149, 233, 0.2);
  border-radius: 20px;
  color: ${({ theme, color }) => theme[color]};
  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    font-size: 14px;
    gap: none;
  }
`;

export const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const LandingFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const XIcon = styled(XIconBase)`
  margin: 0 42px;
`;

export const MainLandingWrapper = styled.div`
  display: flex;
  max-width: 237px;
  gap: 24px;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
`;

export const CommemorationText = styled.div`
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bca8f9;
  font-weight: 600;
  font-size: 9px;
  line-height: 16px;
`;

export const StyledTwitterLogo = styled(TwitterLogo)`
  path {
    fill: #8e85e0;
  }
`;

export const LinksAndSocials = styled.div`
  color: #383838;
  font-weight: 500;
  font-size: 27.8408px;
  text-align: center;
  line-height: 100%;
`;

export const NoLinks = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 14px;
  line-height: 21px;
  margin-top: 32px;
  color: #757575;
`;

export const StyledQrCodeWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotateY(180deg);
  background-position: center, center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  border-radius: 50%;
  height: 185px;
  background-color: white;
  width: 185px;
  backface-visibility: hidden;
  z-index: 1;
`;

export const QrCodeSvg = styled(QrCodeLogo)`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
`;

export const AvatarSvg = styled(Avatar)`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
`;

export const StyledQrCode = styled(QRCode)`
  box-shadow: 0px 26px 56px -20px rgba(74, 48, 140, 0.25);
  border-radius: 15px;
`;

export const StyledNftyUniversalDMWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
