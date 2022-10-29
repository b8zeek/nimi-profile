/**
 *
 */
export function isLensterUsername(value: any): boolean {
  return typeof value == 'string' && value.endsWith('.lens');
}
