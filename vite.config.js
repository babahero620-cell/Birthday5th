import { defineConfig } from 'vite'

// Single-page site. index.html at the root is the entry; birthday.css and
// birthday.js sit beside it, and everything under public/ (favicon, grain
// texture) is served from the web root as-is. No config beyond the defaults is
// needed — this file exists so the project is explicit about what it is.
export default defineConfig({})
