import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_TEMP_ID':JSON.stringify(process.env.VITE_TEMP_ID),
    'process.env.VITE_PUBLIC_KEY':JSON.stringify(process.env.VITE_PUBLIC_KEY),
    'process.env.VITE_SERVICE_ID':JSON.stringify(process.env.VITE_SERVICE_ID)
  }
})
