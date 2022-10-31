import { QRCode } from 'react-qrcode-logo';
import styled, { css } from 'styled-components';

import drop from '../../assets/svg/backdrop-opt.png';
import daivinityFlowers from '../../assets/svg/daivinity-flowers.png';
import stars from '../../assets/svg/stars-left-t2.svg';
import { NIMI_CARDS_WIDTH } from '../../constants';
import { NimiImage, NimiThemeType } from '../../types';
import { NimiTheme } from '../../types/NimiTheme';

type ProfilePhotoProps = {
  ensName: string;
  image?: NimiImage;
  theme: NimiTheme;
  profilePhotoRotated: boolean;
  setProfilePhotoRotated: () => void;
};

function getBackgroundImage(themeType: string) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return null;
    case NimiThemeType.DEVCON:
      return (
        <>
          <BackgroundImage src="https://davi.mypinata.cloud/ipfs/QmctpJVFxCaWx23qNqiJfUhH1wBY9Whq8Armze2pCMpWZk" />
          <BackgroundImage
            left={true}
            src="https://davi.mypinata.cloud/ipfs/QmctpJVFxCaWx23qNqiJfUhH1wBY9Whq8Armze2pCMpWZk"
          />
        </>
      );
    case NimiThemeType.RAAVE:
      return (
        <>
          <BackgroundImage left={true} src={stars} />
          <BackgroundImage src={stars} />
        </>
      );
    case NimiThemeType.INFINITE:
      return <BackgroundImage src={drop} />;
    case NimiThemeType.DAIVINITY:
      return (
        <>
          <BackgroundImage src={daivinityFlowers} />
          <BackgroundImage left={true} src={daivinityFlowers} />
        </>
      );
    default:
      return null;
  }
}

export function ProfilePhoto({
  ensName,
  image,
  theme,
  profilePhotoRotated,
  setProfilePhotoRotated,
}: ProfilePhotoProps) {
  return (
    <Container>
      <SwapperContainer profilePhotoRotated={profilePhotoRotated} onClick={setProfilePhotoRotated}>
        <ProfilePicture
          src={image ? image.url : 'https://davi.mypinata.cloud/ipfs/QmTVmDTUNnMChujFptE4gQvo2QH2yBpj4YX2wzVT1mdZEv'}
        />
        <QRCodeContainer>
          <StyledQrCode size={110} eyeRadius={15} qrStyle="squares" value={`https://${ensName}.limo`} />
        </QRCodeContainer>
      </SwapperContainer>
      {getBackgroundImage(theme.type)}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 176px;
  position: relative;
  margin: 0 auto 24px;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    height: 155px;
  }
`;

const SwapperContainer = styled.div<{ profilePhotoRotated: boolean }>`
  width: 176px;
  height: 176px;
  position: relative;
  z-index: 1;
  transform: rotateY(${({ profilePhotoRotated }) => (profilePhotoRotated ? '1620deg' : '0')});
  transform-style: preserve-3d;
  transition: 2s cubic-bezier(0, 1, 0, 1);
  cursor: pointer;
  margin: 0 auto;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    width: 155px;
    height: 155px;
  }
`;

function getProfilePhotoBorderColor(themeType: NimiThemeType) {
  switch (themeType) {
    case NimiThemeType.DEVCON:
      return 'linear-gradient(rgba(222, 243, 255, 1),rgba(194, 188, 255, 1))';
    case NimiThemeType.DAIVINITY:
      return 'linear-gradient(rgba(222, 243, 255, 1), rgba(242, 181, 212, 1))';
    default:
      return '#fff';
  }
}

const ProfilePicture = styled.img<{ image?: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  backface-visibility: hidden;
  border-radius: 50%;
  padding: 8px;
  background: ${({ theme }) => getProfilePhotoBorderColor(theme.type)};
  box-shadow: 0px 26px 56px -20px rgba(74, 48, 140, 0.25);
`;

const QRCodeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%) rotateY(180deg);
  border-radius: 50%;
  background-color: white;
  backface-visibility: hidden;
  overflow: hidden;
`;

const StyledQrCode = styled(QRCode)`
  box-shadow: 0px 26px 56px -20px rgba(74, 48, 140, 0.25);
`;

function getBackgroundImageSpecialStylings(themeType: string, left: boolean | undefined) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return ``;
    case NimiThemeType.DEVCON:
      return css`
        ${left ? 'left: calc(50% + 135px);' : 'right: calc(50% + 135px);'}

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          ${left ? 'left: calc(50% + 95px);' : 'right: calc(50% + 95px);'}
        }
      `;
    case NimiThemeType.RAAVE:
      return `
        ${left ? 'left: calc(50% + 80px);' : 'right: calc(50% + 80px);'}

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          ${left ? 'left: calc(50% + 65px);' : 'right: calc(50% + 65px);'}
        }
      `;
    case NimiThemeType.INFINITE:
      return css`
        width: 600px;
        bottom: -90px;
        left: 50%;
        transform: translateX(-50%);
      `;
    case NimiThemeType.DAIVINITY:
      return css`
        bottom: -40px;
        z-index: 0;
        ${left ? 'left: calc(50% + 70px);' : 'right: calc(50% + 70px);'}

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          bottom: -50px;
          ${left ? 'left: calc(50% + 50px);' : 'right: calc(50% + 50px);'}
        }
      `;
    default:
      return null;
  }
}

const BackgroundImage = styled.img<{ left?: boolean }>`
  position: absolute;
  bottom: 0;

  ${({ left }) => left && 'transform: scaleX(-1);'}
  ${({ theme, left }) => getBackgroundImageSpecialStylings(theme.type, left)}
`;
