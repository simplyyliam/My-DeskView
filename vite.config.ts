import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-DeskView/', // Match your repository name
  plugins: [react()],
});
