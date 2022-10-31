import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components';

import { NimiComponent } from './NimiComponent';
import {
    Nimi,
    NimiImageType,
    NimiBlockchain,
    NimiLinkType,
    NimiWidgetType
} from '../../types';

const nimi: Nimi = {
    displayName: "NimiComponent",
    image: {
      type: NimiImageType.URL,
      url: "https://davi.mypinata.cloud/ipfs/QmTVmDTUNnMChujFptE4gQvo2QH2yBpj4YX2wzVT1mdZEv"
    },
    addresses: [
      { address: "0xb492873D940dAc02B5021dFF82282d8374509582", blockchain: NimiBlockchain.ETHEREUM },
      { address: "0x26358E62C2eDEd350e311bfde51588b8383A9315", blockchain: NimiBlockchain.ETHEREUM }
    ],
    description: "Host your personal page on your ENS domain! Nimi 0.1.alpha live on EthereumMainnet:) #devconnect #ETHAmsterdam",
    ensAddress: "0x26358E62C2eDEd350e311bfde51588b8383A9315",
    widgets: [
      {
        type: NimiWidgetType.POAP,
        context: {
          tokenIds: ["5388110", "5364618", "5389976", "4997079", "4941037", "4770382"]
        }
      }
    ],
    ensName: "nimi.eth",
    links: [
      { type: NimiLinkType.DISCORD, title: "", content: "violet#6640" },
      { type: NimiLinkType.EMAIL, title: "Email", content: "smilenostress@gmail.com" },
      { type: NimiLinkType.URL, title: "My website", content: "https://linkedin.com/in/Mi-lan" },
      { type: NimiLinkType.TWITTER, title: "Twitter", content: "0xViolet" },
      { type: NimiLinkType.LINKEDIN, title: "Github", content: "https://linkedin.com/in/Mi-lan" },
      { type: NimiLinkType.GITHUB, title: "Github", content: "https://github.com/Mi-lan" },
      { type: NimiLinkType.LENSTER, title: "Lenster", content: "luduvigo.lens" },
      { type: NimiLinkType.FIGMA, title: "", content: "luduvigo" },
      { type: NimiLinkType.DRIBBBLE, title: "Personal", content: "dribler" }
    ],
    theme: {
      type: "NIMI"
    }
}
  

export default {
  title: 'Nimi',
  component: NimiComponent,
  decorators: [Story => <Container><Story /></Container>]
} as ComponentMeta<typeof NimiComponent>

const Template: ComponentStory<typeof NimiComponent> = args => <NimiComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
    nimi
}

const Container = styled.div`
    max-width: 570px;
    margin: 0 auto;
`

