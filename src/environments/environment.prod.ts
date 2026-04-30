export const environment = {
  production: true,
  apiUrl: typeof window !== 'undefined' && (window as any).API_URL
    ? (window as any).API_URL
    : 'https://o9bsy5k3wl.execute-api.eu-north-1.amazonaws.com'
};
