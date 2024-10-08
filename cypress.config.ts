import { defineConfig } from 'cypress';

export default defineConfig({
  supportFolder: './e2e/support',
  screenshotsFolder: './e2e/screenshots',
  downloadsFolder: './e2e/downloads',
  videosFolder: './e2e/videos',
  fixturesFolder: './e2e/fixtures',
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: './e2e/specs/**/*.e2e.ts',
    supportFile: './e2e/support/e2e.ts',
  },
});
