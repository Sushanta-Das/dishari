import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": "http://3.108.54.172:3000"
        }
    },
  
    plugins: [react()],
})
