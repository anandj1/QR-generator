import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html',
      external: ['main.css'],
      onwarn: (warning, warn) => {
        if (warning.code === 'UNRESOLVED_IMPORT' && warning.source === 'main.css') {
          return;
        }
        warn(warning);
      },
    },
  },
});
