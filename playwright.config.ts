// import { defineConfig, devices } from '@playwright/test';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: false,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   ...(process.env.CI && { workers: 1 }),
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('')`.
//      * Can be set via BASE_URL env var, e.g.:
//      *   BASE_URL=http://localhost:5173 npx playwright test
//      */
//     baseURL: process.env.BASE_URL || 'http://localhost:5173',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     /*
//      * In CI environments (Linux without a display server) we must run headless.
//      * Locally you can still run headed by setting CI= (or leaving it undefined).
//      */
//     headless: !!process.env.CI,
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     // {
//     //   name: 'firefox',
//     //   use: { ...devices['Desktop Firefox'] },
//     // },

//     // {
//     //   name: 'webkit',
//     //   use: { ...devices['Desktop Safari'] },
//     // },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

// });

//===============================================================


import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Read environment variables from file.
 * [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See [https://playwright.dev/docs/test-configuration](https://playwright.dev/docs/test-configuration).
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  ...(process.env.CI && { workers: 1 }),
  /* Reporter to use. See [https://playwright.dev/docs/test-reporters](https://playwright.dev/docs/test-reporters) */
  reporter: 'html',

  // ADD THIS: Automatically starts your dev server in CI
  webServer: {
    command: 'npm run dev',  // Replace with your app's dev command from package.json
    url: 'http://localhost:5173/login',  // Verifies server is ready
    timeout: 120 * 1000,  // 2 minutes to start
    reuseExistingServer: !process.env.CI,  // Don't reuse in CI
  },

  /* Shared settings for all the projects below. See [https://playwright.dev/docs/api/class-testoptions](https://playwright.dev/docs/api/class-testoptions). */
  use: {
    /* Base URL to use in actions like `await page.goto('')`.
     * Can be set via BASE_URL env var, e.g.:
     *   BASE_URL=http://localhost:5173 npx playwright test
     */
    baseURL: process.env.BASE_URL || 'http://localhost:5173',

    /* Collect trace when retrying the failed test. See [https://playwright.dev/docs/trace-viewer](https://playwright.dev/docs/trace-viewer) */
    trace: 'on-first-retry',
    /*
     * In CI environments (Linux without a display server) we must run headless.
     * Locally you can still run headed by setting CI= (or leaving it undefined).
     */
    headless: !!process.env.CI,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

});
