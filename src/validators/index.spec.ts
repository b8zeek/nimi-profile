describe('Validators Modules', () => {
  test('Exports the required validators', () => {
    const requiredKeys = [
      'blockchainAddresses',
      'blockchainWallet',
      'description',
      'displayName',
      'ensAddress',
      'ensName',
      'isLanding',
      'links',
      'nimiCard',
      'nimiValidator',
      'themeScheme',
      'nimiLinkValidator',
      'nimiImageValidator',
      'validateNimi',
    ].sort();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const validators = require('.');
    expect(validators).toBeDefined();

    const validatorsModuleKeys = Object.keys(validators).sort();

    expect(validatorsModuleKeys).toEqual(requiredKeys);
  });
});

export {};
