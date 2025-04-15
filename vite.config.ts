import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vitest
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MinhaLibReact",
      fileName: (format) => `minha-lib-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    exclude: [...configDefaults.exclude, "dist/**", "stories/**"],
  },
});
