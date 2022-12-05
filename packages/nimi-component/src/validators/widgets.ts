import * as Yup from 'yup'

/**
 * POAP widget context validator
 */
export const nimiPOAPWidgetContextValidator = Yup.object({
  tokenIds: Yup.array().of(Yup.string()).optional()
}).optional()
