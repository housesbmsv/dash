import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Configuración 100% compatible con Vercel
export default defineConfig({
  plugins: [react()],
  root: '.', // Raíz explícita
  base: '/', // Base absoluta (requerido por Vercel)
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html') // Ruta absoluta
    }
  },
  
  server: {
    port: 5173
  }
});
