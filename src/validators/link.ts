import isEmail from 'validator/lib/isEmail';
import * as Yup from 'yup';

import { NimiLinkBaseDetails, NimiLinkType } from '../types';
import { isValidUrl } from '../utils';
import { isDiscordUsername } from './discord';
import { isLensterUsername } from './lenster';

/**
 * A single link definition and validator
 */
export const nimiLinkValidator: Yup.SchemaOf<NimiLinkBaseDetails> = Yup.object({
  id: Yup.string().optional(),
  type: Yup.mixed().oneOf(Object.values(NimiLinkType)).required(),
  label: Yup.string().optional(),
  content: Yup.string()
    .required()
    .test({
      name: 'customNimiLinkValidator',
      message: '${path} must be a valid Nimi link',
      test: function customNimiLinkValidator(value) {
        const linkType = this.parent.type;

        // if (process.env.NODE_ENV !== 'production') {
        //   console.log({
        //     type: this.parent.type,
        //     value,
        //     // eslint-disable-next-line prefer-rest-params
        //     arguments,
        //   });
        // }

        if (arguments.length === 0) {
          throw new Error('Validation failed: customNimiLinkValidator requires arguments');
        }

        // Invalid link type
        if (!NimiLinkType[linkType]) {
          throw new Error('Invalid NimiLinkType');
        }

        // Email
        if (linkType === NimiLinkType.EMAIL) {
          if (!isEmail(value)) {
            throw new Error('Invalid email address');
          }
          return true;
        }

        // Discord
        if (linkType === NimiLinkType.DISCORD) {
          if (!isDiscordUsername(value)) {
            throw new Error('Invalid Discord username');
          }
          return true;
        }

        // Lenster
        if (linkType === NimiLinkType.LENSTER) {
          if (!isLensterUsername(value)) {
            throw new Error('Invalid Lenster username');
          }
          return true;
        }

        // URL
        if (linkType === NimiLinkType.URL) {
          if (!isValidUrl(value as any)) {
            throw new Error('Invalid URL');
          }
          return true;
        }

        return true;
      },
    }),
  title: Yup.string()
    .optional()
    .test({
      test: function defaultBack(value) {
        if (arguments.length === 0) {
          return this.parent.label;
        }

        if (value) {
          return value.length <= 60;
        }

        return true;
      },
    }),
});
