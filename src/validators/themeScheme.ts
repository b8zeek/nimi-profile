import * as Yup from 'yup'

import { NimiThemeType } from '../types'

export const themeScheme = Yup.object().shape({
  type: Yup.mixed().oneOf(Object.values(NimiThemeType)).required()
})
