// vite.config.cjs
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [ react() ],
  server: {
    host: '0.0.0.0',   // <-- escucha en *:5173
    port: 5173,
    cors: true
  }
})
