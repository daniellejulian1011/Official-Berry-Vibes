window.CCD_CONFIG = {
  // When the frontend is served by server.js, same-origin works automatically.
  // For GitHub Pages, replace this with your deployed backend URL, e.g. https://berry-vibes-api.onrender.com
  API_BASE: location.hostname.endsWith("github.io") ? "https://YOUR-BACKEND.onrender.com" : location.origin,
  STORAGE_PREFIX: "berryVibesCCDNeo"
};
