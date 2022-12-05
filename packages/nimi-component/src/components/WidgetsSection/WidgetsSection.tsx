import { NimiThemeType, NimiWidget, NimiWidgetType } from 'types'
import { NftyUniversalDM } from 'components/NftyUniversalDM'
import { POAPWidget } from 'components/POAPWidget'

type WidgetsSectionProps = {
  ensAddress: string
  ensName: string
  widgets: NimiWidget[]
  themeType: NimiThemeType
}

export function WidgetsSection({ ensAddress, ensName, widgets, themeType }: WidgetsSectionProps) {
  return (
    <>
      {widgets.map(widget => {
        switch (widget.type) {
          case NimiWidgetType.POAP:
            return (
              <POAPWidget
                key={`${widget.type}`}
                ensAddress={ensAddress}
                widget={widget.context}
                themeType={themeType}
              />
            )
          case NimiWidgetType.NFTY_UNIVERSAL_DM:
            return <NftyUniversalDM key={`${widget.type}`} ensAddress={ensAddress} ensName={ensName} />
          default:
            return null
        }
      })}
    </>
  )
}
