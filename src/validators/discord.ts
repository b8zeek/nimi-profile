import { isValidUrl } from '../utils';

const DISCORD_USERNAME_PATTERN = /\w+#\d{4}/i;

/**
 * Checks if a value is a valid Discord username.
 * A Discord username is a string in the format `<username>#<discriminator>`.
 * @param value
 * @returns
 */
export function isDiscordUsername(value: any): boolean {
  return !isValidUrl(value) && DISCORD_USERNAME_PATTERN.test(value);
}
