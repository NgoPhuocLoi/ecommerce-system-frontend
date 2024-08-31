export const authenticatedFetch = (
  url: string,
  method: string,
  accessToken: string,
  body?: Record<string, unknown>,
) => {
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
