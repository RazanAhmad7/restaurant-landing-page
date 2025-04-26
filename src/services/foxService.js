// src/services/foxService.js
/**
 * Fetches a random fox image.
 * @returns {Promise<{ image: string }>} Resolves with the JSON containing `image` URL.
 */
export function fetchFoxImage() {
  return fetch('https://randomfox.ca/floof/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      return response.json();
    });
}
