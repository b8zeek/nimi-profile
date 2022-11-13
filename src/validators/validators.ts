import * as Yup from 'yup'

import { Nimi, NimiBlockchain, NimiBlockchainAddress } from '../types'
import { NimiWidgetType } from '../types/NimiWidget'
import { validators as addressValidators, evmAddress as evmAddressValidator } from './blockchainAddress'
import { nimiImageValidator } from './image'
import { nimiLinkValidator } from './link'
import { themeScheme } from './themeScheme'
import { nimiPOAPWidgetContextValidator } from './widgets'

// re-exports
export { nimiLinkValidator } from './link'
export { nimiImageValidator } from './image'
export { themeScheme } from './themeScheme'

/**
 * Display name validator
 */
export const displayName = Yup.string().min(3, 'Minimum 3 characters').max(30, 'Maximum 30 characters').required()

/**
 * ENS name
 */
export const ensName = Yup.string().min(3, 'Minimum 3 characters').max(255, 'Maximum 255 characters').required()

/**
 * The Ethereum address that holds the ENS
 */
export const ensAddress = evmAddressValidator.required()

/**
 *
 * @todo - add support for Markdown
 */
export const description = Yup.string().max(1000, 'Maximum 1000 characters').optional()

/**
 * A single Blockchain address
 */
export const blockchainWallet: Yup.SchemaOf<NimiBlockchainAddress> = Yup.object({
  blockchain: Yup.mixed().oneOf(Object.keys(NimiBlockchain)).required(),
  address: Yup.string()
    .required()
    .test({
      name: 'customNimiBlockchainAddressValidators',
      test: function customNimiBlockchainAddressValidators(value) {
        if (this.parent.blockchain === NimiBlockchain.BITCOIN) {
          return addressValidators.isBitcoinAddress(value as string)
        } else if (this.parent.blockchain === NimiBlockchain.ETHEREUM) {
          return addressValidators.isEVMAddress(value as string)
        } else {
          return true
        }
      }
    })
})

/**
 * List of Blockchain addresses
 */
export const blockchainAddresses = Yup.array().of(blockchainWallet)

/**
 * Nimi Links - a list of links
 */
export const links = Yup.array().of(nimiLinkValidator)

/**
 * Nimi schema definition and validator
 */
export const nimiValidator = Yup.object().shape({
  displayName,
  ensName,
  ensAddress,
  image: Yup.object()
    .test({
      name: 'customNimiImageValidator',
      test: function customNimiImageValidator(value) {
        if (value === null || value === undefined || JSON.stringify(value) === '{}') {
          return true
        }

        const validatedImage = nimiImageValidator.validateSync(value, {
          abortEarly: true,
          stripUnknown: true
        }) as Nimi['image']

        if (validatedImage) {
          return true
        }

        throw new Error('Invalid image')
      }
    })
    .transform(function customNimiImageTransfomer(value) {
      const validatedImage = nimiImageValidator.validateSync(value, {
        abortEarly: true,
        stripUnknown: true
      }) as Nimi['image']

      return validatedImage
    })
    .optional(),
  description,
  links,
  addresses: blockchainAddresses,
  widgets: Yup.array()
    .of(
      Yup.object({
        type: Yup.mixed().oneOf([NimiWidgetType.POAP, NimiWidgetType.NFTY_UNIVERSAL_DM]).required(),
        context: Yup.object()
          .when('type', {
            is: NimiWidgetType.POAP,
            then: nimiPOAPWidgetContextValidator.default({})
          })
          .when('type', {
            is: NimiWidgetType.NFTY_UNIVERSAL_DM,
            then: Yup.object().optional().default({})
          })
      })
    )
    .optional(),
  theme: themeScheme
})

/**
 * NimiCard schema definition and validator
 * @deprecated use `nimiCardValidator` instead
 */
export const nimiCard = nimiValidator

/**
 * Validates a Nimi standard. This validator removes any unknown properties
 * @param nimi - Nimi standard
 * @returns Nimi standard
 */
export async function validateNimi(nimi: Nimi): Promise<Nimi> {
  // undefined or null
  if (nimi === null || nimi === undefined) {
    throw new Error('Nimi is required')
  }

  // empty object
  if (JSON.stringify(nimi) === '{}') {
    throw new Error('Nimi is empty')
  }

  const nimiKeys = Object.keys(nimiValidator.fields)

  // Remove any undefined properties
  const cleanedNimi = Object.fromEntries(Object.entries(nimi).filter(([key]) => nimiKeys.includes(key))) as Nimi

  const validatedNimi: Nimi = (await nimiValidator.validate(cleanedNimi, {
    abortEarly: true
  })) as any

  return validatedNimi
}
