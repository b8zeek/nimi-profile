import { NimiPOAPWidgetContext, NimiThemeType } from '../../types'
import { NimiSection } from '../NimiSection'
import { Container, POAPHeading, POAPItem, POAPList } from './components'
import { useFetchPOAPs } from './useFetchPOAPs'

type POAPWidgetProps = {
  ensAddress: string
  widget?: NimiPOAPWidgetContext
  themeType: NimiThemeType
}

export function POAPWidget({ ensAddress, widget, themeType }: POAPWidgetProps) {
  const { data: poapList } = useFetchPOAPs(ensAddress, widget)

  if (poapList.length === 0) return null

  return (
    <Container>
      <POAPHeading showFullCollection={() => window.open(`https://app.poap.xyz/scan/${ensAddress}`, '_blank')} />
      <NimiSection themeType={themeType}>
        <POAPList>
          {poapList.map(poap => (
            <POAPItem key={poap.tokenId} src={poap.event.image_url} />
          ))}
        </POAPList>
      </NimiSection>
    </Container>
  )
}
