export enum NimiWidgetType {
  POAP = 'POAP',
  NFTY_UNIVERSAL_DM = 'NFTY_UNIVERSAL_DM'
}

export type NimiPOAPWidgetContext = {
  tokenIds?: string[]
}

export type NimiWidget<WidgetType = keyof typeof NimiWidgetType, ContextType = Record<string, never | string[]>> = {
  type: WidgetType
  context?: ContextType
}

export type NimiPOAPWidget =
  | NimiWidget<NimiWidgetType.POAP, NimiPOAPWidgetContext>
  | NimiWidget<NimiWidgetType.NFTY_UNIVERSAL_DM>
