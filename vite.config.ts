import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // so it listens on 0.0.0.0 inside Docker
    watch: {
      usePolling: true,  // enables polling for file changes
      interval: 100,     // check every 100ms
    },
  },
})
