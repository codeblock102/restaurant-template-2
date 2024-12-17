export default defineConfig({
  // ... other config options ...
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        order: resolve(__dirname, 'order/index.html'),
      },
    },
  },
}) 