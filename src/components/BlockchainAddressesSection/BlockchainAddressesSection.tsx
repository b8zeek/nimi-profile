import styled from 'styled-components';

import { NIMI_BLOCKCHAIN_LOGO_URL } from '../../constants';
import { useToast } from '../../toast';
import { Address } from '../Address';
import { renderSVG } from '../NimiComponent/NimiComponent.renders';
import { NimiSection } from '../NimiSection';
import { NimiBlockchainAddress } from '../../types';

type BlockchainAddressesSectionProps = {
  addresses: NimiBlockchainAddress[]
}

export function BlockchainAddressesSection({ addresses }: BlockchainAddressesSectionProps) {
  const { open } = useToast();

  const copyBlockchainAddress = (address: string, feedback: string) => {
    navigator.clipboard.writeText(address);
    open(feedback);
  };

  return (
    <NimiSection marginBottom="25px">
      <SectionItemContainer>
        {addresses.map(({ address, blockchain }) => (
          <Address
            key={`${blockchain}-${address}`}
            onClick={() => copyBlockchainAddress(address, 'Address copied to the clipboard!')}
          >
            {renderSVG(NIMI_BLOCKCHAIN_LOGO_URL[blockchain])}
          </Address>
        ))}
      </SectionItemContainer>
    </NimiSection>
  );
}

export const SectionItemContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
`;
