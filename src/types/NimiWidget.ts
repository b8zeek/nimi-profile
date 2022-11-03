export enum NimiWidgetType {
  POAP = 'POAP',
  NFTY_UNIVERSAL_DM = 'NFTY_UNIVERSAL_DM'
}

export type NimiPOAPWidgetContext = {
  tokenIds?: string[]
}

/**
 * Extend this to add new widget context
 */
export type NimiWidget<WidgetType = keyof typeof NimiWidgetType, ContextType = Record<string, never | string[]>> = {
  type: WidgetType
  context?: ContextType
}

// We don't need address, we already have the address => ensAddress: string;
export type NimiPOAPWidget =
  | NimiWidget<NimiWidgetType.POAP, NimiPOAPWidgetContext>
  | NimiWidget<NimiWidgetType.NFTY_UNIVERSAL_DM>
