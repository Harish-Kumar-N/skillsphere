import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/skillsphere/', // Replace with your GitHub repository name
  plugins: [react()],
});
