import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      external: ['qrcode'],
      output: {
        globals: {
          qrcode: 'QRCode',
        },
      },
    },
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src'),
    },
  },
});
