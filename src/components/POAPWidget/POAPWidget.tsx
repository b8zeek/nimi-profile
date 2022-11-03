import { NimiPOAPWidgetContext } from '../../types'
import { NimiSection } from '../NimiSection'
import { Container, POAPHeading, POAPItem, POAPList } from './components'
import { useFetchPOAPs } from './useFetchPOAPs'

type POAPWidgetProps = {
  ensAddress: string
  widget?: NimiPOAPWidgetContext
}

export function POAPWidget({ ensAddress, widget }: POAPWidgetProps) {
  const { data: poapList } = useFetchPOAPs(ensAddress, widget)
  // const { loading, data: poapList, error } = useFetchPOAPs(ensAddress, widget);
  // TODO: Adam, let's see what you're gonna do with loading and error state

  if (poapList.length === 0) return null

  return (
    <Container>
      <POAPHeading showFullCollection={() => window.open(`https://app.poap.xyz/scan/${ensAddress}`, '_blank')} />
      <NimiSection>
        <POAPList>
          {poapList.map(poap => (
            <POAPItem key={poap.tokenId} src={poap.event.image_url} />
          ))}
        </POAPList>
      </NimiSection>
    </Container>
  )
}
