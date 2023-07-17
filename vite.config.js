import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),react()],
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  define: {
    'process.env': process.env
  }
})
