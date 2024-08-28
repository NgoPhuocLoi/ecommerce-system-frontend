export const authenticatedFetch = (
  url: string,
  method: string,
  accessToken: string
) => {
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
