export const environment = {
  production: true,
  apiUrl: typeof window !== 'undefined' && (window as any).API_URL
    ? (window as any).API_URL
    : 'https://9x38j33l1h.execute-api.eu-north-1.amazonaws.com'
};
