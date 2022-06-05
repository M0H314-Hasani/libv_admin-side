import { fileURLToPath, URL } from 'url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssNesting({
            noIsPseudoSelector: true,
          }),
        ],
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split('.')[1];
            if (
              `${
                assetInfo.name.split(
                  `${fileURLToPath(new URL('./src', import.meta.url))}/assets`
                    .split('\\')
                    .join('/')
                )[1]
              }`.split('/')[1] === 'fonts'
            ) {
              return `assets/fonts/[name]-[hash][extname]`;
            }
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },

          chunkFileNames: 'assets/js/[name]-[hash].js',

          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
    },
    server: {
      watch: {
        usePolling: /true/i.test(process.env.VITE_USEPOLLING),
      },
    },
  });
};
