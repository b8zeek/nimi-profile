import { NimiWidget, NimiWidgetType } from '../../types';
import { NftyUniversalDM } from '../NftyUniversalDM';
import { POAPWidget } from '../POAPWidget';

type WidgetsSectionProps = {
  ensAddress: string;
  ensName: string;
  widgets: NimiWidget[];
};

export function WidgetsSection({ ensAddress, ensName, widgets }: WidgetsSectionProps) {
  return (
    <>
      {widgets.map((widget) => {
        switch (widget.type) {
          case NimiWidgetType.POAP:
            return <POAPWidget key={`${widget.type}`} ensAddress={ensAddress} widget={widget.context} />;
          case NimiWidgetType.NFTY_UNIVERSAL_DM:
            return <NftyUniversalDM key={`${widget.type}`} ensAddress={ensAddress} ensName={ensName} />;
          default:
            return null;
        }
      })}
    </>
  );
}
