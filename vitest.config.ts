import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    include: ["**/*.test.{ts,tsx}"],
    globals: true,
    setupFiles: "./src/core/tests/setup.ts",
    coverage: {
      provider: "v8",
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "parens-division",
      },
      scss: {
        api: "modern",
      },
    },
  },
});
