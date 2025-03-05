import type { PlaywrightTestConfig } from "@playwright/test";
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';


dotenv.config({ path: `.env.${process.env.NODE_ENV || 'qa'}` });

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  workers: 1,
  timeout: 5000 * 1000,
  retries: 0,
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-report.json' }],
    ['html']
  ],
  expect: {
    timeout: 20 * 1000,
  },
 
  use: {
    baseURL: process.env.ENV_URL || "https://magento.softwaretestingboard.com/",
    headless: false,
    actionTimeout: 20000,
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        permissions: ["clipboard-read", "clipboard-write"],
      },
    },
  ],
};

export default config;


