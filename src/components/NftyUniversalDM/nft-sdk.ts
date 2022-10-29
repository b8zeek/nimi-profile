/**
 * Loads a Nfy Chat SDK
 */
export function loadNfySDK() {
  const scriptURL = 'https://universe.nftychat.xyz/universal_dm.js';

  return new Promise<void>((resolve, reject) => {
    const prevScript = document.querySelector(`script[src="${scriptURL}"]`);

    if (prevScript) {
      console.warn('Nfty is already loaded');
      return resolve();
    }

    // Load the script
    const script = document.createElement('script');
    script.onload = () => resolve();
    script.onerror = () => reject();
    script.defer = true;
    script.src = scriptURL;
    script.id = 'nfty-chat-js';
    document.body.appendChild(script);
  });
}
