import { defineConfig } from "vite"

export default defineConfig({
  build: {
    outDir: "../out",
    emptyOutDir: true,
    target: ["es2020"],
    rollupOptions: {
      output: {
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].mjs"
      },
      input: [
        "./app.css",
      ]
    }
  }
})
