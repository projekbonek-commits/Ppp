import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Ppp/', // Ganti 'Ppp' dengan nama repository Anda jika berbeda
});

